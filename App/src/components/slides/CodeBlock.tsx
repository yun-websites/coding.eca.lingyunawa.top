import { Code } from "@revealjs/react";
import type { ReactNode } from "react";

interface CodeBlockProps {
    children: ReactNode;
    language?: string;
    className?: string;
}

export default function CodeBlock({ children, language = "python" }: CodeBlockProps) {
    return <Code className={`language-${language}`}>{String(children).trim()}</Code>;
}
