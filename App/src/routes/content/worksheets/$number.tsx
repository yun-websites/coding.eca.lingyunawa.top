import { createFileRoute } from "@tanstack/react-router";

import type { LessonContent } from "@/lib/type";
import { PreviewShell } from "@/components/worksheets/PreviewShell";

import "@/styles/app.css";
import "@/styles/worksheet.css";
import { ThemeProvider } from "@/components/general/theme-provider";

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

export const Route = createFileRoute("/content/worksheets/$number")({
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
                    <p>No worksheet is available for lesson {number}.</p>
                </div>
            </main>
        );
    }

    return (
        <ThemeProvider>
            <PreviewShell document={lesson.worksheet} />
        </ThemeProvider>
    );
}
