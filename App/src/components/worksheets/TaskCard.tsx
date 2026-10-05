import type { ReactNode } from "react";
import { pdfStyles } from "@/lib/config";
import { View, Text } from "@react-pdf/renderer";

interface TaskCardProps {
    number: string;
    title: string;
    children: ReactNode;
}

export function TaskCard({ number, title, children }: TaskCardProps) {
    return (
        <View style={pdfStyles.taskCard} wrap={false}>
            <Text style={pdfStyles.taskLabel}>Task {number}</Text>
            <Text style={pdfStyles.taskTitle}>{title}</Text>
            {children}
        </View>
    );
}
