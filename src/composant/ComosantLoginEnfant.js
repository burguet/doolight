// FormulaireAvecEnfant.js
import './composant.css';
import React, { useState } from 'react';

class EnfantComposant extends React.Component {
  render() {
    const { login, password } = this.props;
    const isBothFilled = login.trim() !== '' && password.trim() !== '';

    return (
      <div>
        <h2>Enfant Composant</h2>
        {isBothFilled ? (
          <p style={{ color: 'green' }}>Les champs sont renseignés!</p>
        ) : (
          <p>Remplissez les deux champs pour voir le changement de couleur.</p>
        )}
      </div>
    );
  }
}

const FormulaireAvecEnfant = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
        <h1>Exo32</h1>
      <form>
        <label>Login:</label>
        <input type="text" value={login} onChange={handleLoginChange} />

        <br />

        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </form>

      <EnfantComposant login={login} password={password} />
    </div>
  );
};

export default FormulaireAvecEnfant;
