"use client";

import { useEffect, type ComponentType } from "react";
import { Deck } from "@revealjs/react";
import RevealHighlight from "reveal.js/plugin/highlight";
import RevealNotes from "reveal.js/plugin/notes";

import "reveal.js/reveal.css";
import "reveal.js/theme/white.css";
import "reveal.js/plugin/highlight/monokai.css";

export interface PresentationProps {
    slides: readonly ComponentType[];
}

export function Presentation({ slides }: PresentationProps) {
    return (
        <Deck plugins={[RevealHighlight, RevealNotes]} config={{ controls: false, history: true, hash: false }}>
            {slides.map((SlideComponent, index) => (
                <SlideComponent key={index} />
            ))}
        </Deck>
    );
}
