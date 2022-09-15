import MainView from "./views/MainView";
import injectContext from "./store/appContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MainView />
    </div>
  );
}

export default injectContext(App);
