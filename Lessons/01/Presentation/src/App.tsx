import { Presentation } from "@eca/presentations";
import { lesson01Slides } from "./slides/index.js";

import "reveal.js/reveal.css";
import "reveal.js/theme/white.css";
import "reveal.js/plugin/highlight/monokai.css";

export default function App() {
    return <Presentation slides={lesson01Slides} />;
}
