import type { ReactNode } from "react";

interface KickerProps {
    children: ReactNode;
    dark?: boolean;
}

export default function Kicker({ children, dark = false }: KickerProps) {
    return <div className={`kicker${dark ? "dark-kicker" : ""}`}>{children}</div>;
}
