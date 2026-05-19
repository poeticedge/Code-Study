//import { createRoot } from "react-dom/client";
//const root = createRoot(document.getElementById("root"));
export default function Header() {}

function Header() {
  return (
    <header>
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href="../globe.png/"></use>
      </svg>
      <h1>my travel journal.</h1>
    </header>
  );
}

root.render(<Header />);
