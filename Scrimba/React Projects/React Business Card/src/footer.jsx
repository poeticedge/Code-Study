import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../React Projects/React Business Card/src/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

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
export default Footer;
