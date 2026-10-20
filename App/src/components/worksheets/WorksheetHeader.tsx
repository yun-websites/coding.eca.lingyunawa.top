import { pdfStyles } from "@/lib/config";
import { View, Text } from "@react-pdf/renderer";
import { StudentField } from "./StudentField";

interface WorksheetHeaderProps {
    title: string;
    subtitle: string;
    lessonNumber: number;
    activityLabel?: string;
    language?: "en" | "cn";
}

export function WorksheetHeader({
    title,
    subtitle,
    lessonNumber,
    activityLabel = "Homework",
    language = "en",
}: WorksheetHeaderProps) {
    const studentNameLabel = language === "cn" ? "学生姓名" : "Student name";
    const dateLabel = language === "cn" ? "日期" : "Date";

    return (
        <View style={pdfStyles.header}>
            <Text style={pdfStyles.eyebrow}>
                Coding Club / Lesson {lessonNumber.toString().padStart(2, "0")} {activityLabel}
            </Text>
            <Text style={pdfStyles.title}>{title}</Text>
            <Text style={pdfStyles.subtitle}>{subtitle}</Text>
            <View style={pdfStyles.studentRow}>
                <StudentField label={studentNameLabel} lineCount={40} />
                <StudentField label={dateLabel} lineCount={40} />
            </View>
        </View>
    );
}
