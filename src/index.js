import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JulienCodeComp   from './composant/JulienCodeComp';
import LoginForm from './composant/LoginForm';
import ComposantLoginObjet from './composant/ComposantLoginObjet';
import ComposantLoginVariables from './composant/ComposantLoginVariables';
import ComposantAvecMapping from './composant/Composantmapping';
import ComposantAvecTernaire from './composant/Composantternaire';
import FormulaireAvecEnfant from './composant/ComosantLoginEnfant';
import FormulaireAvecEnfants from './composant/ComposantEnfants'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
    <App/>
    <JulienCodeComp couleur={'red'}/>
    
    <ComposantLoginObjet/>
    <ComposantLoginVariables/>
    <ComposantAvecTernaire/>
    <ComposantAvecMapping/>
    <LoginForm/>
    <FormulaireAvecEnfant/>
    <FormulaireAvecEnfants/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
