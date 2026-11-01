"use client";

import { useState } from "react";
import { ThemeProvider } from "@/components/general/theme-provider";
import type { LessonContent } from "@/lib/type";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, FileText, XIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/shadcn/tooltip";

import "@/styles/app.css";
import "@/styles/typeset.css";

const lessonModules = import.meta.glob<{ default: LessonContent }>("../contents/*/index.ts", { eager: true });
const lessons = Object.values(lessonModules)
    .map(({ default: lesson }) => lesson)
    .sort((left, right) => left.metadata.id - right.metadata.id);

export const Route = createFileRoute("/")({ component: App });

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const filteredLessons = lessons.filter((lesson) => {
        if (!normalizedQuery) return true;

        const { id, title, summary } = lesson.metadata;
        return [String(id).padStart(2, "0"), title, summary].some((value) => value.toLowerCase().includes(normalizedQuery));
    });

    return (
        <ThemeProvider>
            <main className="typeset typeset-docs flex h-dvh flex-col overflow-hidden px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
                <div className="mx-auto flex min-h-0 w-full flex-1 flex-col gap-12">
                    <header className="border-border flex shrink-0 flex-col gap-4 border-b pb-8">
                        <p className="text-muted-foreground text-xs font-medium tracking-[0.18em] uppercase">
                            26-27 ECA Coding Club
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <h1 className="mt-0 text-3xl sm:text-4xl">Course index</h1>
                                <p className="text-muted-foreground mt-3 max-w-2xl text-base">
                                    Choose a chapter to open its presentation or worksheet.
                                </p>
                            </div>
                            <span className="text-muted-foreground text-sm">{lessons.length} chapters</span>
                        </div>
                    </header>

                    <Input
                        className="-my-8"
                        aria-label="Search chapters"
                        type="search"
                        placeholder="Search chapters..."
                        onChange={(event) => {
                            setSearchQuery(event.target.value);
                        }}
                    />

                    <nav aria-label="Course chapters" className="min-h-0 flex-1 overflow-y-auto pr-2">
                        <div className="grid gap-4">
                            {filteredLessons.length > 0 ? (
                                filteredLessons.map((lesson) => {
                                    const { id, title, summary } = lesson.metadata;
                                    const number = String(id).padStart(2, "0");

                                    return (
                                        <article
                                            className="group border-border bg-card hover:border-primary/50 flex flex-col justify-between rounded-lg border p-6 transition-colors"
                                            key={id}>
                                            <div className="flex flex-col gap-5">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-muted-foreground text-sm font-medium">
                                                        CHAPTER {number}
                                                    </span>
                                                    <BookOpen aria-hidden="true" className="text-muted-foreground size-5" />
                                                </div>
                                                <section className="flex justify-between gap-5">
                                                    <div>
                                                        <h2 className="mt-0 text-2xl">{title}</h2>
                                                        <p className="text-muted-foreground mt-3 text-sm leading-6">
                                                            {summary}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <Link params={{ number }} to="/content/slides/$number" target="_blank">
                                                            <Button className="w-full cursor-pointer justify-start">
                                                                <BookOpen aria-hidden="true" className="size-4" />
                                                                Slides
                                                                <ArrowUpRight aria-hidden="true" className="ml-auto size-4" />
                                                            </Button>
                                                        </Link>
                                                        {lesson.worksheet ? (
                                                            <div className="flex gap-2">
                                                                <Link
                                                                    className={
                                                                        buttonVariants({ variant: "secondary" }) +
                                                                        " flex-1 justify-start"
                                                                    }
                                                                    params={{ number }}
                                                                    search={{ lang: "en" }}
                                                                    to="/content/worksheets/$number"
                                                                    target="_blank">
                                                                    <FileText aria-hidden="true" className="size-4" />
                                                                    Worksheet EN
                                                                    <ArrowUpRight
                                                                        aria-hidden="true"
                                                                        className="ml-auto size-4"
                                                                    />
                                                                </Link>
                                                                <Link
                                                                    className={
                                                                        buttonVariants({ variant: "secondary" }) +
                                                                        " flex-1 justify-start"
                                                                    }
                                                                    params={{ number }}
                                                                    search={{ lang: "cn" }}
                                                                    to="/content/worksheets/$number"
                                                                    target="_blank">
                                                                    <FileText aria-hidden="true" className="size-4" />
                                                                    Worksheet 中文
                                                                    <ArrowUpRight
                                                                        aria-hidden="true"
                                                                        className="ml-auto size-4"
                                                                    />
                                                                </Link>
                                                            </div>
                                                        ) : (
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger render={<span />}>
                                                                        <Button
                                                                            className="w-full justify-start"
                                                                            variant="secondary"
                                                                            disabled>
                                                                            <FileText aria-hidden="true" className="size-4" />
                                                                            Worksheet
                                                                            <ArrowUpRight
                                                                                aria-hidden="true"
                                                                                className="ml-auto size-4"
                                                                            />
                                                                        </Button>
                                                                    </TooltipTrigger>
                                                                    <TooltipContent side="left">
                                                                        <XIcon size={12} />
                                                                        No worksheet is available
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                        )}
                                                    </div>
                                                </section>
                                            </div>
                                        </article>
                                    );
                                })
                            ) : (
                                <p className="text-muted-foreground py-8 text-sm">No chapters match your search.</p>
                            )}
                        </div>
                    </nav>
                </div>
            </main>
        </ThemeProvider>
    );
}
