import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { pdfStyles } from "@/lib/config";

const INDENT_WIDTH = 4.8;

const codeLineStyles = StyleSheet.create({
    line: {
        flexDirection: "row",
        minHeight: 13.5,
    },
    indent: {
        width: INDENT_WIDTH,
    },
});

interface CodeBlockProps {
    code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
    return (
        <View style={pdfStyles.code}>
            {code.split("\n").map((line, index) => {
                const indentation = line.match(/^ */)?.[0].length ?? 0;
                const content = line.slice(indentation);

                return (
                    <View key={`${index}-${line}`} style={codeLineStyles.line}>
                        {indentation > 0 ? (
                            <View style={{ ...codeLineStyles.indent, width: indentation * INDENT_WIDTH }} />
                        ) : null}
                        <Text>{content || " "}</Text>
                    </View>
                );
            })}
        </View>
    );
}
