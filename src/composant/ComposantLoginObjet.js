// ComposantLoginObjet.js
import React from 'react';

const ComposantLoginObjet = () => {
  const credentials = {
    login: 'lucasObjet',
    mdp: 'MDPobjet',
  };

  return (
    <div>
      <h1>Exo29 objet</h1>
      <p>Login: {credentials.login}</p>
      <p>Mot de passe: {credentials.mdp}</p>
    </div>
  );
};

export default ComposantLoginObjet;
