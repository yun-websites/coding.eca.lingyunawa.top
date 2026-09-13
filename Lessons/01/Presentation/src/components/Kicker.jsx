export default function Kicker({ children, dark = false }) {
    return (
        <div className={`kicker${dark ? " dark-kicker" : ""}`}>{children}</div>
    );
}
