import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import StatefulGreeting from "./components/StatefulGreeting";
import HooksCounter from "./components/HooksCounter";

function App() {
  return (
    <div className="App">
      <FunctionalGreeting name="John" />
      <hr />
      <StatefulGreeting name="Anna" />
      <hr />
      <HooksCounter />
    </div>
  );
}

export default App;
