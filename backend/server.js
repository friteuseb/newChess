const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { Chess } = require('chess.js');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

let game = new Chess();
let players = {};

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Assign player
    if (Object.keys(players).length < 2) {
        if (!players.white) {
            players.white = socket.id;
            socket.emit('playerRole', 'w');
        } else {
            players.black = socket.id;
            socket.emit('playerRole', 'b');
        }

        socket.emit('gameState', game.fen());
    } else {
        socket.emit('spectatorRole');
    }

    // Handle moves
    socket.on('move', (move) => {
        // Check if the move is made by the correct player
        const playerIsWhite = players.white === socket.id;
        const playerIsBlack = players.black === socket.id;
        const isWhiteTurn = game.turn() === 'w';
        const isBlackTurn = game.turn() === 'b';

        if ((playerIsWhite && isWhiteTurn) || (playerIsBlack && isBlackTurn)) {
            const result = game.move(move);
            if (result) {
                io.emit('gameState', game.fen());
                io.emit('updateStatus', getGameStatus());
            } else {
                socket.emit('invalidMove', move);
            }
        } else {
            socket.emit('notYourTurn');
        }
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        if (players.white === socket.id) {
            delete players.white;
        } else if (players.black === socket.id) {
            delete players.black;
        }
        // Optional: reset game if a player leaves
        // game = new Chess();
        // io.emit('gameState', game.fen());
    });

    // Send initial game state
    socket.emit('gameState', game.fen());
    socket.emit('updateStatus', getGameStatus());
});

function getGameStatus() {
    let status = '';
    const moveColor = game.turn() === 'w' ? 'White' : 'Black';

    if (game.isCheckmate()) {
        status = `Game over, ${moveColor} is in checkmate.`;
    } else if (game.isDraw()) {
        status = 'Game over, drawn position';
    } else {
        status = `${moveColor} to move`;
        if (game.isCheck()) {
            status += `, ${moveColor} is in check`;
        }
    }
    return status;
}

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
