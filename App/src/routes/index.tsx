"use client";

import { ThemeProvider } from "@/components/general/theme-provider";
import type { LessonContent } from "@/lib/type";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, FileText, XIcon } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/shadcn/tooltip";

import "@/styles/app.css";
import "@/styles/typeset.css";

const lessonModules = import.meta.glob<{ default: LessonContent }>("../contents/*/index.ts", { eager: true });
const lessons = Object.values(lessonModules)
    .map(({ default: lesson }) => lesson)
    .sort((left, right) => left.metadata.id - right.metadata.id);

export const Route = createFileRoute("/")({ component: App });

function App() {
    return (
        <ThemeProvider>
            <main className="typeset typeset-docs min-h-screen px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
                <div className="mx-auto flex flex-col gap-12">
                    <header className="border-border flex flex-col gap-4 border-b pb-8">
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

                    <nav aria-label="Course chapters" className="grid gap-4">
                        {lessons.map((lesson) => {
                            const { id, title, summary } = lesson.metadata;
                            const number = String(id).padStart(2, "0");

                            return (
                                <article
                                    className="group border-border bg-card hover:border-primary/50 flex flex-col justify-between rounded-lg border p-6 transition-colors"
                                    key={id}>
                                    <div className="flex flex-col gap-5">
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground text-sm font-medium">CHAPTER {number}</span>
                                            <BookOpen aria-hidden="true" className="text-muted-foreground size-5" />
                                        </div>
                                        <section className="flex justify-between gap-5">
                                            <div>
                                                <h2 className="mt-0 text-2xl">{title}</h2>
                                                <p className="text-muted-foreground mt-3 text-sm leading-6">{summary}</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Link params={{ number }} to="/content/slides/$number" target="_blank">
                                                    <Button className="w-full cursor-pointer justify-start">
                                                        <BookOpen aria-hidden="true" className="size-4" />
                                                        Slides
                                                        <ArrowUpRight aria-hidden="true" className="ml-auto size-4" />
                                                    </Button>
                                                </Link>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <Link
                                                                params={{ number }}
                                                                to="/content/worksheets/$number"
                                                                target="_blank"
                                                                disabled={!lesson.worksheet}>
                                                                <Button
                                                                    className="w-full cursor-pointer justify-start"
                                                                    variant="secondary"
                                                                    disabled={!lesson.worksheet}>
                                                                    <FileText aria-hidden="true" className="size-4" />
                                                                    Worksheet
                                                                    <ArrowUpRight
                                                                        aria-hidden="true"
                                                                        className="ml-auto size-4"
                                                                    />
                                                                </Button>
                                                            </Link>
                                                        </TooltipTrigger>
                                                        {!lesson.worksheet && (
                                                            <TooltipContent side="left">
                                                                <XIcon size={12} />
                                                                No worksheet is available
                                                            </TooltipContent>
                                                        )}
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </div>
                                        </section>
                                    </div>
                                </article>
                            );
                        })}
                    </nav>
                </div>
            </main>
        </ThemeProvider>
    );
}
