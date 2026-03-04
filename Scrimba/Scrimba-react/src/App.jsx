import { createRoot } from "react-dom/client";
import { Fragment } from "react";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
//import reactLogo from "./assets/react.svg";
import "./App.css";

function AppHeader() {
  return (
    <header className="header">
      <nav>
        <img
          src="https://res.cloudinary.com/control4/image/upload/v1771443981/06e12c91-7e08-4796-b2bc-b56e5d62972a/reactjs-icon.png"
          className="AppLogo"
          alt="React logo"
        />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main className="mainContent">
      <h1>Fun facts about React</h1>
      <ul className="facts-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2026 Campbell development. All rights reserved.</small>
    </footer>
  );
}

function App() {
  return (
    <>
      <AppHeader />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
