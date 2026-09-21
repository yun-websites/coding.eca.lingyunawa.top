import { useEffect, type ComponentType } from "react";
import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight";
import Notes from "reveal.js/plugin/notes";

export interface PresentationProps {
    slides: readonly ComponentType[];
}

export function Presentation({ slides }: PresentationProps) {
    useEffect(() => {
        const deck = new Reveal({
            plugins: [Highlight, Notes],
            controls: false,
            history: true,
        });

        void deck.initialize();
        return () => deck.destroy();
    }, []);

    return (
        <div className="reveal">
            <div className="slides">
                {slides.map((SlideComponent, index) => (
                    <SlideComponent key={index} />
                ))}
            </div>
        </div>
    );
}
