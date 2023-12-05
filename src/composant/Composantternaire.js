import React, { Component } from 'react';
//mise en place de l'initialisation du compposant
class ComposantAvecInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputContent: '',
      isBothFilled: false,
    };
  }
//fonction pour modifier l'etat du composant
  handleInputChange = (e) => {
    const newInputContent = e.target.value;
    const newIsBothFilled = newInputContent.trim() !== '';
    
    this.setState({
      inputContent: newInputContent,
      isBothFilled: newIsBothFilled,
    });
  };

  render() {
    const { isBothFilled, inputContent } = this.state;
//affichage d'un input et des phrace grace 
// ? est un ternaire qui remplace le if etle else
    return (
      <div>
        <h2>Exo30 ternaire</h2>
        <input
          type="text"
          value={inputContent}
          onChange={this.handleInputChange}
          placeholder="Saisissez quelque chose"
        />

        
        {isBothFilled ? (
          <p style={{ color: 'green' }}>Le champ est renseigné!</p>
        ) : (
          <p>Remplissez le champ pour voir le changement de couleur.</p>
        )}
      </div>
    );
  }
}

export default ComposantAvecInput;

