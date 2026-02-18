import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
//import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <img
          src="https://res.cloudinary.com/control4/image/upload/v1771443981/06e12c91-7e08-4796-b2bc-b56e5d62972a/reactjs-icon.png"
          className="logo"
          alt="React logo"
          width="40px"
        />
        <h1>ReactFacts</h1>
      </nav>
      <main>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <img
          src="https://res.cloudinary.com/control4/image/upload/v1771444024/06e12c91-7e08-4796-b2bc-b56e5d62972a/reactjs-icon_2.png"
          alt="React logo 2"
        />
      </main>
    </>
  );
}

export default App;
