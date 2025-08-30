$(document).ready(function() {
    // --- Initialisation de la logique du jeu avec chess.js ---
    var game = new Chess();

    // --- Variable pour l'échiquier UI ---
    var board;

    // --- Configuration de Chessboard.js ---

    // Ne pas autoriser le déplacement des pièces si la partie est terminée
    var onDragStart = function(source, piece, position, orientation) {
        if (game.isGameOver()) {
            return false;
        }

        // N'autoriser que le déplacement des pièces du joueur dont c'est le tour
        if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
            (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
            return false;
        }
    };

    // Gérer le déplacement d'une pièce
    var onDrop = function(source, target) {
        // Essayer d'effectuer le coup dans la logique de chess.js
        var move = game.move({
            from: source,
            to: target,
            promotion: 'q' // NOTE: Promotion automatique en Dame pour simplifier
        });

        // Si le coup est illégal, annuler le déplacement
        if (move === null) {
            return 'snapback';
        }

        // Gérer la fin de partie
        if (game.isGameOver()) {
            alert('Partie terminée !');
        }
    };

    // Mettre à jour la position de l'échiquier après le déplacement
    // Essentiel pour les coups spéciaux comme le roque, la prise en passant, etc.
    var onSnapEnd = function() {
        board.position(game.fen());
    };

    // -- Configuration de l'échiquier --
    var config = {
        draggable: true,
        position: 'start',
        onDragStart: onDragStart,
        onDrop: onDrop,
        onSnapEnd: onSnapEnd
    };

    // Créer l'échiquier
    board = Chessboard('board', config);
});
