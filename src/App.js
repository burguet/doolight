import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <form>
         <h5><input ></input> login</h5>
         <h5><input></input> password</h5>
        <button>connexion</button>
       </form>
       <p>
        bienvenu a abstergo
       </p>
      </header>
    </div>
  );
}

export default App;
