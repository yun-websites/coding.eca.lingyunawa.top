import { pdfStyles } from "@/lib/config";
import { View } from "@react-pdf/renderer";

interface CodeLinesProps {
    style: typeof pdfStyles.answerArea;
    length: number;
}

export function CodeLines({ style, length }: CodeLinesProps) {
    return (
        <View style={style}>
            {Array.from({ length }, (_, index) => (
                <View key={index} style={pdfStyles.codeLine} />
            ))}
        </View>
    );
}
