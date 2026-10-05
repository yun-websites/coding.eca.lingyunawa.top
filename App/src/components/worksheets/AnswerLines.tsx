import { pdfStyles } from "@/lib/config";
import { View } from "@react-pdf/renderer";

interface AnswerLinesProps {
    count?: number;
    short?: boolean;
}

export function AnswerLines({ count = 2, short = false }: AnswerLinesProps) {
    return (
        <View>
            {Array.from({ length: count }, (_, index) => (
                <View key={index} style={short ? pdfStyles.answerLineShort : pdfStyles.answerLine} />
            ))}
        </View>
    );
}
