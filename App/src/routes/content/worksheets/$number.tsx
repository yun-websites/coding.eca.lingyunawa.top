import { createFileRoute } from "@tanstack/react-router";

import type { LessonContent } from "@/lib/type";
import { PreviewShell } from "@/components/worksheets/PreviewShell";

import "@/styles/app.css";
import "@/styles/worksheet.css";
import { ThemeProvider } from "@/components/general/theme-provider";

type WorksheetLanguage = "en" | "cn";

const lessonModules = import.meta.glob<{ default: LessonContent }>("../../../contents/*/index.ts", { eager: true });

function getLesson(number: string) {
    const lessonNumber = Number(number);

    if (!Number.isInteger(lessonNumber) || lessonNumber < 1) {
        return undefined;
    }

    const normalizedNumber = String(lessonNumber).padStart(2, "0");
    const modulePath = `../../../contents/${normalizedNumber}/index.ts`;

    return Object.entries(lessonModules).find(([path]) => path === modulePath)?.[1].default;
}

export const Route = createFileRoute("/content/worksheets/$number")({
    validateSearch: (search): { lang: WorksheetLanguage } => ({
        lang: search.lang === "cn" ? "cn" : "en",
    }),
    component: LessonSlidesPage,
});

function LessonSlidesPage() {
    const { number } = Route.useParams();
    const { lang } = Route.useSearch();
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

    const Worksheet = lesson.worksheet?.[lang];

    if (!Worksheet) {
        return (
            <main className="flex min-h-screen items-center justify-center p-8">
                <div>
                    <h1>Worksheet not found</h1>
                    <p>No worksheet is available for lesson {number}.</p>
                </div>
            </main>
        );
    }

    return (
        <ThemeProvider>
            <PreviewShell document={Worksheet} />
        </ThemeProvider>
    );
}
