import "./App.css";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/Home";

console.log(window.location);

const pagina = window.location.pathname === "/" ? <HomePage /> : <AboutMe />;

function App() {
  return pagina;
}

export default App;
