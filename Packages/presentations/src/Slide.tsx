import type { ReactNode } from "react";

export interface SlideProps {
    children: ReactNode;
    className?: string;
    backgroundColor?: string;
}

export function Slide({ children, className = "", backgroundColor }: SlideProps) {
    return (
        <section className={className} data-background-color={backgroundColor}>
            {children}
        </section>
    );
}
