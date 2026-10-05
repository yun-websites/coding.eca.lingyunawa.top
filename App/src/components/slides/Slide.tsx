import type { ReactNode } from "react";
import { Slide as SlidePrimitive } from "@revealjs/react";

export interface SlideProps {
    children: ReactNode;
    className?: string;
    backgroundColor?: string;
}

export default function Slide({ children, className = "", backgroundColor }: SlideProps) {
    return (
        <SlidePrimitive className={className} data-background-color={backgroundColor} data-transition="slide">
            {children}
        </SlidePrimitive>
    );
}
