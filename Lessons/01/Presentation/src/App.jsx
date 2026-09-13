import { useEffect } from "react";
import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight";
import Notes from "reveal.js/plugin/notes";
import { lesson01Slides } from "./slides/index.js";

import "reveal.js/reveal.css";
import "reveal.js/theme/dracula.css";
import "reveal.js/plugin/highlight/monokai.css";

export default function App() {
    useEffect(() => {
        const deck = new Reveal({
            plugins: [Highlight, Notes],
            controls: false,
            history: true,
        });
        deck.initialize();
        return () => deck.destroy();
    }, []);

    return (
        <div className="reveal">
            <div className="slides">
                {lesson01Slides.map((SlideComponent, index) => (
                    <SlideComponent key={index} />
                ))}
            </div>
        </div>
    );
}
