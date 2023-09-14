import './App.css';
import TopBar from './components/TopBar';
import StoreListing from './components/StoreListing';
import Location from './components/location';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Location />
      <StoreListing />
    </div>
  );
}

export default App;
