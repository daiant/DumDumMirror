import Time from './components/time/time';
import Weather from './components/weather/weather';
function App() {
  return (
    <div className="App">
      <header>
        <Time />
        <Weather />
      </header>
    </div>
  );
}

export default App;
