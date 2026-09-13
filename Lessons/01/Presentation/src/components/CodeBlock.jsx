export default function CodeBlock({
    children,
    language = "python",
    className = "",
}) {
    return (
        <pre className={className}>
            <code className={`language-${language}`} data-trim>
                {String(children).trim()}
            </code>
        </pre>
    );
}
