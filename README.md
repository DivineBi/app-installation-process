# Projet Node.js - Environnement de Développement

## Description
Ce projet utilise un environnement de développement structuré et professionnel pour une application Node.js. L'objectif est de garantir un développement efficace avec des outils modernes tels que Webpack, Babel, ESLint, SASS, et plus encore.

---

## Fonctionnalités
- **Tests unitaires** avec Jest, incluant un rapport de couverture.
- **Documentation automatique** générée avec JSDoc.
- **Linter ESLint** avec la configuration Airbnb.
- **Gestion des styles** avec SASS et Webpack.
- **Hot Reload** pour un rechargement en direct pendant le développement.
- **Transpilation** du code JavaScript moderne (ES6+) avec Babel.
- **Conventions de commits** respectées via Commitizen et Commitlint.

---

## Structure du Projet
Voici l'organisation des dossiers et fichiers :


/nom_du_projet ├── /tests/ # Dossier pour les fichiers de tests ├── /src/ # Code source │ ├── index.js # Point d'entrée principal │ ├── styles.scss # Fichier de styles en SASS ├── /dist/ # Fichiers générés par Webpack ├── jsdoc.json # Configuration JSDoc ├── package.json # Configuration Node.js ├── webpack.config.js # Configuration Webpack └── README.md # Documentation du projet

---

## Pré-requis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés :
- **Node.js** (version 16 ou supérieure)
- **npm** (ou Yarn)

---

## Installation
1. Clonez le dépôt :
   ```bash
   git clone <URL_DU_REPO>
   cd nom_du_projet

Commandes Disponibles
Les commandes suivantes sont définies dans le fichier package.json :

npm run prod : Compile le projet pour la production (tests inclus).

npm run dev : Lance l'environnement de développement avec hot reload.

npm run lint : Vérifie le code avec ESLint.

npm run test : Exécute les tests unitaires avec Jest.

npm run doc : Génère la documentation JSDoc.

Tests Unitaires
Les tests sont organisés dans le dossier __tests__/.

Pour exécuter les tests :

bash
npm run test
Documentation
La documentation du code est générée automatiquement avec JSDoc. Pour la générer :

bash
npm run doc
Elle sera disponible dans un dossier nommé out/.

Contribution
Respectez les conventions de commits (utilisez npm run commit pour un message de commit structuré).

Vérifiez votre code avec ESLint avant de créer une pull request :

bash
npm run lint
Licence
Ce projet est sous licence MIT.