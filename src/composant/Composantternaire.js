// ComposantAvecTernaire.js
import React from 'react';

const ComposantAvecTernaire = () => {
  const isLoggedIn = true; // Remplacez par votre logique de connexion

  return (
    <div>
      <h1>EXO30 ternaire</h1>
      {isLoggedIn ? (
        <p>Vous êtes connecté !</p>
      ) : (
        <p>Veuillez vous connecter pour accéder au contenu.</p>
      )}
    </div>
  );
};

export default ComposantAvecTernaire;
