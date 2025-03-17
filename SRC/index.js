import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss'; // Import du fichier SASS

require('dotenv').config(); //pour charger les variables d'environnement

const App = () => {
  return (
    <div>
      <h1>Bienvenue l'application Node.js avec React</h1>
      <p>L'environnement de développement est configuré.</p>
    </div>
  );
};

// Montre le composant principal dans la div "root" de index.html
ReactDOM.render(<App />, document.getElementById('root'));