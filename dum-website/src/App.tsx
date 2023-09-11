import Background from './components/background/background.component';
import Time from './components/time/time';
import TODOList from './components/todo/todo';
import Weather from './components/weather/weather';
function App() {
  return (
    <div className="App">
      <main>
        <div className="row row__1">
          <Time />
          <Weather />
        </div>
        <div className="row row__2">
          <TODOList />
          <Background />
        </div>
      </main>
    </div>
  );
}

export default App;
