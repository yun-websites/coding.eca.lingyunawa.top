import type { ComponentType } from "react";

export interface LessonContent {
    metadata: {
        id: number;
        title: string;
        summary: string;
    };
    slides: readonly ComponentType[];
    worksheet?: ComponentType;
}
