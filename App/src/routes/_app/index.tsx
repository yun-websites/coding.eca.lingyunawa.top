"use client";

import { ThemeProvider } from "@/components/general/theme-provider";
import RubberSegment from "@/components/reactbits/RubberSegment";
import { createFileRoute } from "@tanstack/react-router";

import "@/styles/app.css";

export const Route = createFileRoute("/_app/")({ component: App });

function App() {
    return (
        <div className="app">
            <ThemeProvider>
                <div className="typeset typeset-docs flex flex-col gap-8 p-8">
                    <nav className="flex items-center justify-between">
                        <h3>Index: 26-27 ECA Coding Club</h3>
                        <RubberSegment
                            items={["All", "PPT", "HWs"]}
                            defaultValue="All"
                            onChange={(value, index) => console.log(value, index)}
                            trackColor="#27272a"
                            thumbColor="#fafafa"
                            textColor="#fafafa"
                            activeTextColor="#18181b"
                            size="md"
                            radius={10}
                            inset={3}
                            equalSlots
                            stretch={100}
                            squash={3}
                            speed={1}
                            glide={75}
                            draggable
                            disabled={false}
                        />
                    </nav>
                </div>
            </ThemeProvider>
        </div>
    );
}
