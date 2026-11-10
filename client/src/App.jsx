import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faMagnifyingGlass,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="ide">
      <header className="ide__header">
        <p>Dev Portfolio OS</p>
      </header>
      <aside className="ide__sidebar">
        <button
          className="ide__sidebar-item"
          type="button"
          aria-label="Explorer"
        >
          <FontAwesomeIcon icon={faFolderOpen} aria-hidden="true" />
        </button>
        <button className="ide__sidebar-item" type="button" aria-label="Search">
          <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden="true" />
        </button>
        <button className="ide__sidebar-item" type="button" aria-label="Git">
          <FontAwesomeIcon icon={faCodeBranch} aria-hidden="true" />
        </button>
      </aside>

      <div className="ide__tabs">portfolio.jsx</div>

      <main className="ide__main">
        <Hero></Hero>
      </main>

      <footer className="ide__footer">
        <p>main — MERN Stack</p>
      </footer>
    </div>
  );
}

export default App;
