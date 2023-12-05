// FormulaireAvecEnfants.js
import React, { useState } from 'react';
//mise en place de la classe enfant
class EnfantLogin extends React.Component {
  render() {
    const { login } = this.props;

    return (
      <div>
        <h2>Enfant Login</h2>
        {login.trim() !== '' ? (
          <p style={{ color: 'green' }}>Le login est renseigné!</p>
        ) : (
          <p style={{ color: 'red' }}>Veuillez renseigner le login.</p>
        )}
      </div>
    );
  }
}
//mise en place de la classe enfant
class EnfantPassword extends React.Component {
  render() {
    const { password } = this.props;

    return (
      <div>
        <h2>Enfant Password</h2>
        {password.trim() !== '' ? (
          <p style={{ color: 'green' }}>Le mot de passe est renseigné!</p>
        ) : (
          <p style={{ color: 'red' }}>Veuillez renseigner le mot de passe.</p>
        )}
      </div>
    );
  }
}
//fontcion pour modifier en temps réel les valeur
const FormulaireAvecEnfants = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isBothFilled = login.trim() !== '' && password.trim() !== '';
//affichage sur la page
  return (
    <div style={{ color: isBothFilled ? 'green' : 'red' }}>
      <h1>Exo 33</h1>
      <form>
        <label>Login:</label>
        <input type="text" value={login} onChange={handleLoginChange} />

        <br />

        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </form>

      <EnfantLogin login={login} />
      <EnfantPassword password={password} />
    </div>
  );
};

export default FormulaireAvecEnfants;
