# Tempête sur l'Échiquier - Web

Une version navigateur du jeu de cartes "Tempête sur l'Échiquier" de Pierre Cléquin & Bruno Faidutti.

Ce projet vise à créer une version jouable du célèbre jeu qui mélange les échecs avec des cartes aux effets surprenants et amusants.

## État actuel du projet

Le projet est actuellement dans sa première phase de développement. La base est fonctionnelle, mais toutes les cartes ne sont pas encore implémentées.

**Fonctionnalités implémentées :**
- Un échiquier fonctionnel pour jouer une partie d'échecs standard.
- Un système de cartes : pioche, défausse, et une main de 5 cartes pour chaque joueur.
- La logique pour jouer une carte depuis sa main.
- L'effet des cartes suivantes est implémenté :
    - **Asile**
    - **Désintégration**

## Comment lancer et tester

Ce projet est une application web "statique". Il n'y a pas de backend ou de serveur à lancer.

1.  Assurez-vous d'avoir les trois fichiers du projet dans le même répertoire :
    - `index.html`
    - `style.css`
    - `script.js`
2.  Ouvrez le fichier `index.html` avec un navigateur web moderne (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).

Le jeu se chargera et vous pourrez commencer à jouer.

## Dépendances

Le projet utilise les bibliothèques JavaScript suivantes, chargées via un CDN :
- [jQuery](https://jquery.com/) (v2.2.4)
- [chessboard.js](https://chessboardjs.com/) (v1.0.0)
- [chess.js](https://github.com/jhlywa/chess.js) (v0.10.3)
