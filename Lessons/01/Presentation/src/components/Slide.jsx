export default function Slide({ children, className = "", backgroundColor }) {
    return (
        <section className={className} data-background-color={backgroundColor}>
            {children}
        </section>
    );
}
