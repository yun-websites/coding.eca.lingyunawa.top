"use client";

import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "@/components/slides/Presentation";
import type { LessonContent } from "@/lib/type";

import "reveal.js/reveal.css";
import "reveal.js/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";

const lessonModules = import.meta.glob<{ default: LessonContent }>("../../../contents/*/index.ts", { eager: true });

function getLesson(number: string) {
    const lessonNumber = Number(number);

    if (!Number.isInteger(lessonNumber) || lessonNumber < 1) {
        return undefined;
    }

    const normalizedNumber = String(lessonNumber).padStart(2, "0");
    const modulePath = `../../../contents/${normalizedNumber}/index.ts`;

    return lessonModules[modulePath]?.default;
}

export const Route = createFileRoute("/content/slides/$number")({
    component: LessonSlidesPage,
});

function LessonSlidesPage() {
    const { number } = Route.useParams();
    const lesson = getLesson(number);

    if (!lesson) {
        return (
            <main className="flex min-h-screen items-center justify-center p-8">
                <div>
                    <h1>Lesson not found</h1>
                    <p>No slide content is available for lesson {number}.</p>
                </div>
            </main>
        );
    }

    return <Presentation slides={lesson.slides} />;
}
