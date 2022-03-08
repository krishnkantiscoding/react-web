import photo from './kk.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="pic" src={photo} /> 
        <div className="About">
          <h1>I am Krishn Kant Shukla</h1>
          <h2>Currently persuing my Bachelors<br/>
          in Computer Applications with specialization in Data Science and Artificial Intellegence<br/>from BBD University.
          </h2>
          <h3>Email: mail2krishnkant@gmail.com</h3>
        </div>

        <div className="project">
        <h1>Projects</h1>
          <li>GitHub Notifier : Listen for events from GitHub and notify you.</li><br/>
          <li>Twitter Bot : Build a program that submits new status messages to Twitter.</li><br/>
          <li>Weather API : Use the Forecast.io api to display the weather near you.</li>
        
        </div>
        <div className="Skills">
          <h1>Skills</h1>
      <p>React</p>
      <div class="container">
      <div class=" react">90%</div>
      </div>

      <p>JavaScript</p>
      <div class="container">
      <div class=" js ">70%</div>
     </div>

     <p>HTML</p>
      <div class="container">
      <div class=" html ">90%</div>
     </div>

     <p>C++</p>
      <div class="container">
      <div class="cpp ">75%</div>
     </div>

     <p>Python</p>
      <div class="container">
      <div class=" python">95%</div>
     </div>
      </div>
       
    </div>
  );
}

export default App;
