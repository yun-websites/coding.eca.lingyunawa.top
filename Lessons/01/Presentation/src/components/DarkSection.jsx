import Slide from "./Slide.jsx";

export default function DarkSection({ number, children, className = "" }) {
    return (
        <Slide className={`dark-slide ${className}`} backgroundColor="#171d2b">
            <div className="section-number">{number}</div>
            {children}
        </Slide>
    );
}
