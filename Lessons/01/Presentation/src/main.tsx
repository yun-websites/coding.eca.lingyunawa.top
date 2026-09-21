import { createRoot } from "react-dom/client";
import App from "./App.js";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("The presentation root element was not found.");
}

createRoot(rootElement).render(<App />);
