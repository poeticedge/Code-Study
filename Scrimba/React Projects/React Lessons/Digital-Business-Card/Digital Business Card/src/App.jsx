import { createRoot } from "react-dom/client";
//import { useState } from "react";
//import headshot from "./assets/react.svg";
import { Fragment } from "react";
import "./App.css";
//import "./footer.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

function AppHeader() {
  return (
    <>
      <header className="header">
        <img src="#" className="headshot" alt="Megan Campbell headshot" />
      </header>
    </>
  );
}

function MainContent() {
  return (
    <main className="mainContent">
      <h1>Megan Campbell</h1>
      <span>Frontend Developer</span>
      <p>
        <a
          href="https://designs.poeticedge.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          designs.poeticedge.com
        </a>
      </p>
    </main>
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
