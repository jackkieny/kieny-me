import './App.css';
import { DiGithubFull } from "react-icons/di";

function App() {
  return (
    <div className="App">
      <h1>kieny.me</h1>
      <p>This project is under construction...</p>

      <h2>View this project</h2>
      <button className='github-button'>
        <a href="https://github.com/jackkieny/kieny-me" target="_blank">
          <DiGithubFull className='github-icon'/>
        </a>
      </button>
    </div>
  );
}

export default App;
