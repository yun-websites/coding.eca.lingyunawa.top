import type { ReactNode } from "react";
import Slide from "./Slide";

interface DarkSectionProps {
    number: string;
    children: ReactNode;
    className?: string;
}

export default function DarkSection({ number, children, className = "" }: DarkSectionProps) {
    return (
        <Slide className={`dark-slide ${className}`} backgroundColor="#171d2b">
            <div className="section-number">{number}</div>
            {children}
        </Slide>
    );
}
