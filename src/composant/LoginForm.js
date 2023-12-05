import React, { useState } from 'react';

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Vérifier si le mot de passe est différent de '1234' et définir isError en conséquence
    setIsError(e.target.value !== '1234');
  };

  const handleSubmit = (e) => { // pour intercepté le form pour éviter le rechargement de la page
    e.preventDefault(); 
  };

  return (
    <div>
        <h1>Exo31</h1>
    <form onSubmit={handleSubmit} style={{ backgroundColor: isError ? 'red' : 'white' }}>
      <label>
        Login:
        <input type="text" value={login} onChange={handleLoginChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default LoginForm;
