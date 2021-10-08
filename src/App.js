import "./assets/css/utils.css";
import './style/Countdown.css';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <Countdown date={new Date().setDate(new Date().getDate() + 30)} />,
    </div>
  );
}

export default App;
