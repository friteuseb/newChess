const allCards = [
    { id: "contrordre", title: "CONTRORDRE", description: "Le déplacement de votre adversaire est annulé. Il doit rejouer un autre coup, avec la même pièce ou une autre.", timing: "Jouez cette carte immédiatement après un coup de votre adversaire." },
    { id: "bonnet_dane", title: "BONNET D'ÂNE", description: "Vous désignez une pièce adverse (sauf le roi) que vous envoyez au piquet sur une case libre située dans un des quatre coins de l'échiquier. Votre adversaire ne pourra pas déplacer cette pièce à ce coup-ci.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "poussee", title: "POUSSÉE", description: "L'un de vos Pions peut avancer sur une case occupée, en poussant devant lui la pièce qui s'y trouve. Si elle est poussée sur une case également occupée, elle pousse de nouveau la pièce qui l'occupe, et ainsi de suite. Une pièce poussée en dehors de l'échiquier est retirée du jeu. Le roi ne peut pas être poussé.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "quatre_coins", title: "QUATRE COINS", description: "Si trois des quatre coins de l'échiquier sont occupés, vous pouvez amener une de vos pièces, de votre choix, dans le quatrième coin.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "parachutiste", title: "PARACHUTISTE", description: "Vous pouvez \"parachuter\" l'un de vos Pions pris par votre adversaire sur une case vide au milieu du champ de bataille, c'est-à-dire sur l'une des quatre cases centrales de l'échiquier.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "infiltration", title: "INFILTRATION", description: "Sur l'échiquier, vous permutez un ou deux de vos Pions avec un ou deux Pions adverses.", timing: "Jouez cette carte avant votre coup. Ce coup est en plus de votre déplacement normal." },
    { id: "ambition", title: "AMBITION", description: "Vous pouvez remplacer un de vos Pions par une des pièces (sauf la Reine) que vous a pris votre adversaire.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "neutralite", title: "NEUTRALITÉ", description: "Vous transformez une pièce adverse de votre choix (sauf le Roi et la Reine) en pièce \"neutre\". Une pièce neutre peut être manipulée à son tour par chacun des joueurs, et peut prendre des pièces appartenant aux deux adversaires.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "fantoche", title: "FANTOCHE", description: "Jouez cette carte quand vous êtes mis en échec (même mat). Vous permutez alors sur l'échiquier votre Roi avec l'un de vos Pions.", timing: "Jouez cette carte avant votre coup. Ce coup est en plus de votre déplacement normal." },
    { id: "fou_reflechi", title: "FOU RÉFLÉCHI", description: "Vous pouvez à ce coup déplacer l'un de vos Fous en le faisant \"rebondir\" sur les côtés de l'échiquier. Il décrit alors un angle à 90°. Il n'y a pas de limite au nombre de rebondissements au cours d'un déplacement.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "kidnapping", title: "KIDNAPPING", description: "Votre adversaire tourne la tête dix secondes, et vous en profitez pour subtiliser une de ses pièces sur l'échiquier. S'il trouve la pièce et sa case en 10s, elle est remise. Sinon, elle est prise.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "trappe", title: "TRAPPE", description: "Notez les coordonnées d'une case (vide ou occupée par vous). Dès qu'une pièce adverse s'y arrête, elle est retirée du jeu (sauf le Roi).", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "cassation", title: "CASSATION", description: "Le déplacement de votre adversaire est annulé. Il doit rejouer un autre coup, avec la même pièce ou une autre.", timing: "Jouez cette carte immédiatement après un coup de votre adversaire." },
    { id: "annulation", title: "ANNULATION", description: "Le déplacement de votre adversaire est annulé. Il doit rejouer un autre coup, avec la même pièce ou une autre.", timing: "Jouez cette carte immédiatement après un coup de votre adversaire." },
    { id: "hallucination_passagere", title: "HALLUCINATION PASSAGÈRE", description: "Vous pouvez, à ce coup, déplacer n'importe laquelle de vos pièces à la manière d'un Fou. Mais vous ne pouvez pas prendre ainsi une pièce adverse.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "crazy_horse", title: "CRAZY HORSE", description: "Sur l'échiquier, vous permutez un Cavalier adverse avec un Fou adverse.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "roque_acrobatique", title: "ROQUE ACROBATIQUE", description: "Si votre Roi et une Tour sont sur une même ligne/colonne sans pièce entre eux, vous pouvez les déplacer simultanément en plaçant la Tour près du Roi et en la faisant passer par-dessus celui-ci.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "derby", title: "DERBY", description: "Le Cavalier que vous venez de déplacer peut rejouer à nouveau, tout de suite, s'il ne vient pas de prendre une pièce adverse.", timing: "Jouez cette carte immédiatement après le premier déplacement de votre Cavalier." },
    { id: "favorite", title: "FAVORITE", description: "Vous pouvez à ce coup déplacer n'importe laquelle de vos pièces (sauf un Pion) à la manière d'une Dame, mais vous ne pouvez pas ainsi prendre une pièce adverse.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "periph", title: "PÉRIPH", description: "Vous pourrez déplacer n'importe laquelle de vos pièces (sauf un pion) qui se trouve sur une case du bord de l'échiquier, vers toute autre case libre du bord de l'échiquier.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "fusion", title: "FUSION", description: "Déplacez une de vos pièces sur une case occupée par une autre de vos pièces. Elles \"fusionnent\" en une nouvelle pièce qui se déplacera comme l'une ou l'autre. Le Roi ne peut pas fusionner.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "chrono", title: "CHRONO", description: "Votre adversaire a 15 secondes, montre en main, pour jouer son prochain coup. Passé ce temps, il perd son tour de jeu.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "avion_prive", title: "AVION PRIVÉ", description: "Vous pouvez à ce coup déplacer votre Roi pour l'amener sur n'importe quelle case vide de l'échiquier.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "cylindre", title: "CYLINDRE", description: "À ce coup, vous pouvez déplacer une de vos pièces en la faisant passer d'un côté à l'autre de l'échiquier, comme si les bords gauches et droits étaient contigus.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "trou_noir", title: "TROU NOIR", description: "Vous désignez une case vide qui est \"retirée\" de l'échiquier jusqu'à la fin de la partie. Il sera impossible de s'y arrêter ou de la traverser.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "homme_de_paille", title: "HOMME DE PAILLE", description: "Vous pouvez perdre un de vos Pions à la place de la pièce que votre adversaire vient de vous prendre. Vous remettez cette pièce à la place du Pion ainsi perdu.", timing: "Jouez cette carte immédiatement après le coup de votre adversaire." },
    { id: "urbanisme", title: "URBANISME", description: "Sur l'échiquier, vous permutez une de vos Tours avec une Tour adverse.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "attentat", title: "ATTENTAT", description: "Notez les coordonnées d'une case (vide ou occupée par vous). Dès qu'une pièce adverse s'y arrête, une bombe explose et la pièce est retirée du jeu (sauf le Roi).", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "chameau", title: "CHAMEAU", description: "Vous transformez l'un de vos Cavaliers en Chameau (déplacement en L 3x4) définitivement.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "changez_vos_cavaliers", title: "CHANGEZ VOS CAVALIERS", description: "Sur l'échiquier, vous permutez l'un de vos Cavaliers avec un Cavalier adverse.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "visites_officielles", title: "VISITES OFFICIELLES", description: "Vous permutez votre Roi avec celui de votre adversaire, à condition que cela ne mette aucun de vous deux en échec.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "pas_question", title: "PAS QUESTION !", description: "Cette carte annule toute autre carte.", timing: "Jouez-la juste après la carte de votre adversaire que vous voulez annuler." },
    { id: "anti_gang", title: "ANTI GANG", description: "Jouez cette carte quand votre adversaire vous annonce un échec (même mat). Il doit alors remettre la pièce qu'il vient de jouer là où elle était, et ne peut rien jouer d'autre.", timing: "Jouez cette carte immédiatement après le coup de votre adversaire." },
    { id: "vautour", title: "VAUTOUR", description: "En jouant cette carte, vous pouvez récupérer la carte que votre adversaire vient de jouer et la mettre dans votre jeu.", timing: "Jouez cette carte après la carte que vous voulez récupérer." },
    { id: "cheval_fou", title: "CHEVAL FOU", description: "Sur l'échiquier, vous permutez un de vos Fou avec un de vos Cavaliers.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "diktat", title: "DIKTAT", description: "Vous obligez votre adversaire à jouer un type de pièce (sauf le Roi ou la Reine) à ce coup (par exemple : \"tu joueras un Cavalier\" ou \"tu joueras un Pion\").", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "box", title: "BOX", description: "Sur l'échiquier, vous permutez un Cavalier adverse avec une Tour adverse.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "estafette", title: "ESTAFETTE", description: "Vous pouvez à ce coup déplacer l'une de vos pièces (selon sa manière habituelle) en lui faisant traverser toutes les cases de son chemin où se trouvent vos propres pièces. Vous ne pouvez pas prendre ainsi une pièce adverse.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "non", title: "NON.", description: "Cette carte annule toute autre carte.", timing: "Jouez-la juste après la carte de votre adversaire que vous voulez annuler." },
    { id: "bombe_atomique", title: "BOMBE ATOMIQUE", description: "Si la pièce que vous venez de déplacer n'a pas pris de pièce adverse, vous pouvez la faire \"exploser\". Elle est retirée du jeu, ainsi que toutes les pièces sur les 8 cases adjacentes (sauf les Rois).", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "coup_detat", title: "COUP D'ÉTAT", description: "Votre Roi devient un simple Prince (peut être pris). Une autre pièce (sauf Dame ou Tour) devient la nouvelle pièce \"royale\" à mater.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "que_nenni", title: "QUE NENNI !", description: "Cette carte annule toute autre carte.", timing: "Jouez-la juste après la carte de votre adversaire que vous voulez annuler." },
    { id: "brigade_legere", title: "BRIGADE LÉGÈRE", description: "Avancez deux de vos Pions, chacun de deux cases.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "saute_mouton", title: "SAUTE MOUTON", description: "Déplacez un de vos Pions comme au jeu de dames, en sautant en diagonale par-dessus n'importe quelle pièce (sans la prendre).", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "banzai", title: "BANZAI", description: "Vous avancez un de vos Pions de 3 cases (aucune prise en passant ne sera possible).", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "desintegration", title: "DÉSINTÉGRATION", description: "Vous pouvez retirer de l'échiquier l'un de vos propres Pions.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "cavalcade", title: "CAVALCADE", description: "Vous pouvez, à ce coup, déplacer n'importe laquelle de vos pièces à la manière d'un Cavalier. Vous ne pouvez pas prendre ainsi une pièce adverse.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "rigolo", title: "RIGOLO", description: "Un de vos Pions peut, à ce coup, prendre en reculant (mais toujours en diagonale).", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "bombarde", title: "BOMBARDE", description: "À ce coup, vous pouvez avec une de vos Tours prendre en sautant par-dessus une autre pièce, qu'elle soit à vous ou à votre adversaire.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "amphetamines", title: "AMPHÉTAMINES", description: "Le Fou que vous venez de déplacer peut rejouer à nouveau, tout de suite, s'il ne vient pas de prendre une pièce adverse.", timing: "Jouez cette carte immédiatement après le premier déplacement de votre Fou." },
    { id: "double_tour", title: "DOUBLE TOUR", description: "La Tour que vous venez de déplacer peut rejouer à nouveau, tout de suite, si elle ne vient pas de prendre une pièce adverse.", timing: "Jouez cette carte immédiatement après le premier déplacement de votre tour." },
    { id: "niet", title: "NIET.", description: "Cette carte annule toute autre carte.", timing: "Jouez-la juste après la carte de votre adversaire que vous voulez annuler." },
    { id: "magnetisme", title: "MAGNÉTISME", description: "L'une de vos pièces devient un aimant. Tant qu'elle reste sur la même case, toutes les pièces sur les 8 cases contiguës sont immobilisées.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "asile", title: "ASILE", description: "Sur l'échiquier, vous permutez l'un de vos Fous avec l'une de vos Tours.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "exil", title: "EXIL", description: "Vous remettez sur la case, ou sur l'une des cases où elle pouvait se trouver en début de partie, une pièce adverse de votre choix.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "ecurie", title: "ÉCURIE", description: "Sur l'échiquier, vous permutez un de vos Cavaliers avec une de vos Tours.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "gueules_cassees", title: "GUEULES CASSÉES", description: "Vous pouvez regarder les cartes du talon et en choisir une que vous mettez dans votre jeu à la place de celle-ci.", timing: "Jouez cette carte lorsque vous venez de perdre (de manière \"normale\") une de vos pièces (pas un Pion)." },
    { id: "cannibale", title: "CANNIBALE", description: "Vous pouvez à ce coup prendre l'une de vos propres pièces avec une autre de celles-ci.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "on_ne_vit_que_deux_fois", title: "ON NE VIT QUE DEUX FOIS", description: "Vous récupérez une de vos pièces (sauf la Reine) que vous a pris votre adversaire. Vous devez la placer sur une case libre où elle pouvait se trouver en début de partie.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "schizophrenie", title: "SCHIZOPHRÉNIE", description: "Sur l'échiquier, vous échangez l'un de vos Fous avec un Fou adverse.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "represailles", title: "REPRÉSAILLES", description: "Vous vous vengez de votre adversaire en retirant un de ses pions de l'échiquier.", timing: "Jouez cette carte lorsque vous venez de perdre (de manière \"normale\") une de vos pièces (pas un Pion)." },
    { id: "percee", title: "PERCÉE", description: "Un de vos Pions peut, à ce coup, prendre en avançant normalement, droit devant lui.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "bouclier", title: "BOUCLIER", description: "Votre adversaire ne peut pas vous prendre à ce coup-ci la pièce que vous venez de déplacer.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "trahison", title: "TRAHISON", description: "Un pion adverse qui se trouve déjà de votre côté de l'échiquier change soudain de couleur et passe dans votre camp.", timing: "Jouez cette carte avant votre coup." },
    { id: "charge", title: "CHARGE", description: "Avancez tous ceux de vos Pions que vous voulez et qui le peuvent d'une case.", timing: "Jouez cette carte à votre tour de jeu. Ce coup remplace votre déplacement normal." },
    { id: "autodefense", title: "AUTODÉFENSE", description: "La pièce attaquée reste à sa place, et c'est la pièce attaquante qui est éliminée.", timing: "Jouez cette carte au moment où votre adversaire prend l'une de vos pièces." },
    { id: "frayeur", title: "FRAYEUR", description: "Faites reculer un Pion adverse d'une ou deux cases.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "regence", title: "RÉGENCE", description: "Votre Roi disparaît pour un tour. Avant votre prochain coup, vous devrez le replacer sur une case de votre choix au bord de l'échiquier.", timing: "Jouez cette carte immédiatement avant votre coup. Cette disparition est en plus de votre déplacement normal." },
    { id: "peuple_en_marche", title: "PEUPLE EN MARCHE", description: "Jusqu'à la fin de la partie, les déplacements \"normaux\" et \"de prise\" des Pions sont inversés (ils prennent droit devant eux, avancent en diagonale).", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "tour_de_fada", title: "TOUR DE FADA", description: "Sur l'échiquier, vous échangez un Fou adverse avec une Tour adverse.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "super_gang", title: "SUPER GANG", description: "Tentez de tirer sur une pièce adverse (sauf roi) avec un pistolet à fléchettes à 4m. Si vous la touchez, elle est retirée du jeu.", timing: "Jouez cette carte immédiatement après votre coup." },
    { id: "camouflet", title: "CAMOUFLET", description: "Si votre adversaire fait un geste ou une réflexion désobligeante, vous enlevez un de ses Pions de l'échiquier.", timing: "Jouez cette carte lorsque votre adversaire fait un geste ou une réflexion qui vous paraît désobligeante." }
];

$(document).ready(function() {
    // --- Game State ---
    var game = new Chess();
    var board;
    var gameState = {
        deck: [],
        playerHand: [],
        opponentHand: [],
        discardPile: [],
        isPlayerTurn: true // White is player
    };

    // --- Utility Functions ---
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- UI Rendering ---
    function renderCards() {
        const playerHandDiv = $('#player-hand').empty();
        gameState.playerHand.forEach(card => {
            const cardDiv = $('<div>').addClass('card playable').attr('data-card-id', card.id);
            cardDiv.html(`<div class="card-title">${card.title}</div><div class="card-description">${card.description}</div><div class="card-timing">${card.timing}</div>`);
            cardDiv.on('click', () => onCardClick(card));
            playerHandDiv.append(cardDiv);
        });

        const opponentHandDiv = $('#opponent-hand').empty();
        gameState.opponentHand.forEach(() => {
            opponentHandDiv.append($('<div>').addClass('card opponent-card'));
        });

        $('#deck').html(`Pioche<br><span class="card-pile-count">${gameState.deck.length}</span>`);
        $('#discard').html(`Défausse<br><span class="card-pile-count">${gameState.discardPile.length}</span>`);
    }

    // --- Game Logic ---
    function setupNewGame() {
        game.reset();
        if (board) {
            board.position('start');
        }

        gameState.deck = shuffle([...allCards]);
        gameState.playerHand = [];
        gameState.opponentHand = [];
        gameState.discardPile = [];

        for (let i = 0; i < 5; i++) {
            if(gameState.deck.length > 0) gameState.playerHand.push(gameState.deck.pop());
            if(gameState.deck.length > 0) gameState.opponentHand.push(gameState.deck.pop());
        }
        renderCards();
    }

    function onCardClick(card) {
        // This is the entry point when a player clicks a card in their hand.
        playCard(card);
    }

    function playCard(card) {
        const cardIndex = gameState.playerHand.findIndex(c => c.id === card.id);
        if (cardIndex === -1) {
            console.error("Card not in hand!");
            return;
        }

        console.log(`Attempting to play card: ${card.title}`);
        let effectSuccess = false;
        const playerColor = game.turn(); // Assuming it's the player's turn to play the card

        // NOTE: The logic below is simplified. It does not handle all edge cases
        // or prompt the user for choices (e.g., which pawn to remove).
        // This is a starting point for the card effect logic.

        switch (card.id) {
            case 'desintegration':
                const squares = 'abcdefgh'.split('').map(f => [1,2,3,4,5,6,7,8].map(r => f+r)).flat();
                let pawnRemoved = false;
                for (const square of squares) {
                    const piece = game.get(square);
                    if (piece && piece.type === 'p' && piece.color === playerColor) {
                        game.remove(square);
                        pawnRemoved = true;
                        break; // Remove only the first pawn found
                    }
                }
                if (pawnRemoved) {
                    effectSuccess = true;
                } else {
                    alert("Vous n'avez aucun pion à désintégrer !");
                }
                break;

            case 'asile':
                const boardState = game.board();
                let bishopPos = null;
                let rookPos = null;

                for (let r = 0; r < 8; r++) {
                    for (let f = 0; f < 8; f++) {
                        const piece = boardState[r][f];
                        if (piece && piece.color === playerColor) {
                            const square = 'abcdefgh'[f] + (8 - r);
                            if (piece.type === 'b') bishopPos = square;
                            if (piece.type === 'r') rookPos = square;
                        }
                    }
                }

                if (bishopPos && rookPos) {
                    const bishop = game.get(bishopPos);
                    const rook = game.get(rookPos);
                    game.remove(bishopPos);
                    game.remove(rookPos);
                    game.put(rook, bishopPos);
                    game.put(bishop, rookPos);
                    effectSuccess = true;
                } else {
                    alert("Il vous faut au moins un Fou et une Tour pour jouer cette carte.");
                }
                break;

            default:
                alert(`L'effet de la carte "${card.title}" n'est pas encore implémenté.`);
                return; // Do not proceed to discard/draw
        }

        if (!effectSuccess) {
            return; // Effect failed, so don't discard/draw
        }

        // Move card from hand to discard pile
        gameState.discardPile.push(gameState.playerHand.splice(cardIndex, 1)[0]);

        // Draw a new card from the deck
        if (gameState.deck.length > 0) {
            gameState.playerHand.push(gameState.deck.pop());
        }

        // Update the UI
        renderCards();
        board.position(game.fen());
    }

    // --- Chessboard.js Configuration ---
    var onDragStart = function(source, piece) {
        if (game.isGameOver() || (game.turn() === 'b' && gameState.isPlayerTurn) || (game.turn() === 'w' && !gameState.isPlayerTurn)) {
            return false;
        }
    };

    var onDrop = function(source, target) {
        var move = game.move({ from: source, to: target, promotion: 'q' });
        if (move === null) return 'snapback';

        // TODO: Logic for post-move card plays

        // Make random move for opponent for now
        window.setTimeout(makeRandomMove, 250);
    };

    var onSnapEnd = function() {
        board.position(game.fen());
    };

    function makeRandomMove() {
        var possibleMoves = game.moves();
        if (possibleMoves.length === 0) {
            alert('Partie terminée !');
            return;
        }
        var randomIdx = Math.floor(Math.random() * possibleMoves.length);
        game.move(possibleMoves[randomIdx]);
        board.position(game.fen());
    }

    var config = {
        draggable: true,
        position: 'start',
        onDragStart: onDragStart,
        onDrop: onDrop,
        onSnapEnd: onSnapEnd,
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
    };

    board = Chessboard('board', config);
    setupNewGame();
});
