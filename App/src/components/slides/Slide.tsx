import type { ReactNode } from "react";

export interface SlideProps {
    children: ReactNode;
    className?: string;
    backgroundColor?: string;
}

export default function Slide({ children, className = "", backgroundColor }: SlideProps) {
    return (
        <section className={className} data-background-color={backgroundColor} data-transition="slide">
            {children}
        </section>
    );
}
