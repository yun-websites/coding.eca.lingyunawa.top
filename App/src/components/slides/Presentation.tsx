"use client";

import { useEffect, type ComponentType } from "react";

export interface PresentationProps {
    slides: readonly ComponentType[];
}

interface RevealDeck {
    initialize: () => Promise<unknown>;
    destroy: () => void;
}

export function Presentation({ slides }: PresentationProps) {
    useEffect(() => {
        let disposed = false;
        let deck: RevealDeck | undefined;

        void (async () => {
            const [{ default: Reveal }, { default: Highlight }, { default: Notes }] = await Promise.all([
                import("reveal.js"),
                import("reveal.js/plugin/highlight"),
                import("reveal.js/plugin/notes"),
            ]);

            if (disposed) {
                return;
            }

            deck = new Reveal({
                plugins: [Highlight, Notes],
                controls: false,
                history: true,
            });

            await deck.initialize();

            if (disposed) {
                deck.destroy();
            }
        })();

        return () => {
            disposed = true;
            deck?.destroy();
        };
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
