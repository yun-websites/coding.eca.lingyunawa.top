import { createFileRoute, Outlet } from "@tanstack/react-router";

import "@/styles/app.css";

export const Route = createFileRoute("/_app")({
    component: () => <Outlet />,
});
