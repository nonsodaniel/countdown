import "./assets/css/utils.css";
import './style/Countdown.css';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
        <Countdown date='2020-12-24T00:00:00' />,
      </div>
  );
}

export default App;
