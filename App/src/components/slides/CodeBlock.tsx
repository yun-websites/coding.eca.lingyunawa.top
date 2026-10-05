import type { ReactNode } from "react";

interface CodeBlockProps {
    children: ReactNode;
    language?: string;
    className?: string;
}

export default function CodeBlock({ children, language = "python", className = "" }: CodeBlockProps) {
    return (
        <pre className={className}>
            <code className={`language-${language}`} data-trim>
                {String(children).trim()}
            </code>
        </pre>
    );
}
