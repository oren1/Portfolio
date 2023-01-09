import logo from './logo.svg';
import grapqlImage from './graphql-reasons.png'
import app from './app.png'
import website from './website.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Oren Shalev</h1>
          <h4>Software Engineer</h4>
          <div className="projects-container">
          <div class="project">
              <a href="https://apps.apple.com/il/app/crypto-tracker-alert-chain/id1575176418">
                <img src={app} alt="Cinque Terre" />
              </a>
              <div class="desc">Crypto Tracking App</div>
          </div>
          <div class="project">
              <a href="http://localhost:3001/">
                <img src={website} alt="Cinque Terre" />
              </a>
              <div class="desc">Crypto Website with React.js</div>
          </div>
          <div class="project">
              <a href="https://5142s291u6.execute-api.us-east-1.amazonaws.com/">
                <img src={grapqlImage} alt="Cinque Terre" />
              </a>
              <div class="desc">Graph QL server with Apollo as a crypto service</div>
          </div>
          <div class="project">
              <a href="https://5142s291u6.execute-api.us-east-1.amazonaws.com/">
                <img src={grapqlImage} alt="Cinque Terre" />
              </a>
              <div class="desc">Graph QL server with Apollo 4</div>
          </div>
          </div>
      </header>
    </div>
  );
}

export default App;
