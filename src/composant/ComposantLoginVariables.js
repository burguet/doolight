import React from 'react';

const ComposantLoginVariables = () => {
  //initialisation des variables
  const login = 'Lucasvariable';
  const mdp = 'MDPvariable';

  return (
    //utilisation des variable dans l'affichage
    <div>
      <h1>Exo29 variable</h1>
      <p>Login: {login}</p>
      <p>Mot de passe: {mdp}</p>
    </div>
  );
};

export default ComposantLoginVariables;