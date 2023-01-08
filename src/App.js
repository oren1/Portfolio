import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Oren Shalev</h1>
          <h4>Software Engineer</h4>
          <div className="projects-container">
          <div class="project">
              <a href="https://5142s291u6.execute-api.us-east-1.amazonaws.com/">
                <img src="graph.jpeg" alt="Cinque Terre" />
              </a>
              <div class="desc">Graph QL server with Apollo</div>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
