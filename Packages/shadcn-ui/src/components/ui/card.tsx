import type { ComponentProps } from "react";
import { cn } from "@eca/shadcn-ui/lib/utils";

function Card({ className, ...props }: ComponentProps<"div">) {
    return (
        <div
            data-slot="card"
            className={cn(
                "flex flex-col gap-6 rounded-xl border border-[var(--border,#e4e4e7)] bg-[var(--card,#ffffff)] py-6 text-[var(--card-foreground,#18181b)] shadow-sm",
                className,
            )}
            {...props}
        />
    );
}

function CardHeader({ className, ...props }: ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn("grid gap-1.5 px-6", className)}
            {...props}
        />
    );
}

function CardTitle({ className, ...props }: ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            className={cn("font-semibold leading-none", className)}
            {...props}
        />
    );
}

function CardContent({ className, ...props }: ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-6", className)}
            {...props}
        />
    );
}

export { Card, CardContent, CardHeader, CardTitle };
