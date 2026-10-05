import type { ReactNode } from "react";
import Slide from "./Slide";

interface NumberedSlideProps {
    number: string;
    children: ReactNode;
    className?: string;
}

export default function NumberedSlide({ number, children, className = "" }: NumberedSlideProps) {
    return (
        <Slide className={className}>
            <div className="section-number">{number}</div>
            {children}
        </Slide>
    );
}
