import { createRoot } from "react-dom/client";
//import { useState } from "react";
import headshot from "./assets/resizedMegan2025.jpg";
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
      <section>
        <container className="buttons-container">
          <button className="email-button">Email</button>
          <button className="linkedin-button">LinkedIn</button>
        </container>
        <container className="about-container">
          <h2>About</h2>
          <p>
            Front-End Developer with 8+ years of experience building and
            managing responsive, high-performing web solutions across
            multi-platform environments. Proven track record of owning
            end-to-end development workflows from wireframe to development in
            enterprise B2B and B2C marketing efforts. Skilled in HTML, CSS, Git,
            Webflow, and multiple CMS platforms, with active development in
            JavaScript and React. Experienced collaborator who has mentored
            junior developers, driven measurable revenue outcomes, and delivered
            work at scale across global regions.{" "}
          </p>
          <h2>Interests</h2>
          <p>
            Avid outdoors enthusiast. World Traveler. Deeply creative and care
            about the customer journey.
          </p>
        </container>
      </section>
    </main>
  );
}
function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://github.com/poeticedge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/megancampbell3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/zaneyadventures"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
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
