import { pdfStyles } from "@/lib/config";
import { View, Text } from "@react-pdf/renderer";

interface StudentFieldProps {
    label: string;
    width?: number;
    lineCount?: number;
    extraStyle?: typeof pdfStyles.studentField;
}

export function StudentField({ label, width, lineCount, extraStyle }: StudentFieldProps) {
    return (
        <View style={[pdfStyles.studentField, width ? { width } : undefined, extraStyle]}>
            <Text style={pdfStyles.studentLabel}>{label}</Text>
            <Text style={pdfStyles.blank}>{Array.from({ length: lineCount ?? 35 }, () => "_")}</Text>
        </View>
    );
}
