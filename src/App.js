import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p className='App-intro'>
         i was changed on the feature branch...
         making another change, to see what is going on..
         making yet... another change to see if it was that docker parameter
        </p>
      </header>

    </div>
  );
}

export default App;
