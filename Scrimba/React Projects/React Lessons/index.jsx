import { createElement } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const reactElement = createElement("h1", null, "Hello from createElement!");
root.render(reactElement);
//root.render(createElement("h1", null, "Hello, React!"));

//imperative way
const h1 = document.createElement("h1");
h1.textContent = "Hello from createElement!";
h1.className = "header";
document.getElementById("root").appendChild(h1);

//declarative way
root.render(<h1 className="header">Hello from createElement!</h1>);
