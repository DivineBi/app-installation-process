import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.scss'; // Import du fichier SASS

console.log(process.env.DB_HOST);

const App = () => {
  return (
    <div>
      <h1>Bienvenue l&apos;application Node.js avec React</h1>
      <p>L&apos;environnement de développement est configuré.</p>
    </div>
  );
};

// Montre le composant principal dans la div "root" de index.html
//ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);