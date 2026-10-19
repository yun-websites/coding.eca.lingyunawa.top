import type { ReactNode } from "react";

interface InlineCodeProps {
    children: ReactNode;
    className?: string;
}

export default function InlineCode({ children, className = "" }: InlineCodeProps) {
    return <code className={`inline-code ${className}`.trim()}>{children}</code>;
}
