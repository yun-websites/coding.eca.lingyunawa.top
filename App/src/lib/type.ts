import type { ComponentType } from "react";

export interface LessonContent {
    metadata: {
        id: number;
    };
    slides: readonly ComponentType[];
    worksheet: ComponentType;
}
