import { pdfStyles } from "@/lib/config";
import { View, Text } from "@react-pdf/renderer";

interface FooterProps {
    worksheetSummary: string;
    worksheetTitle: string;
    currentPage: number;
    totalPage: number;
}

export function Footer({ worksheetSummary, worksheetTitle, currentPage, totalPage }: FooterProps) {
    return (
        <View style={pdfStyles.footer} fixed>
            <Text>{worksheetSummary}</Text>
            <Text>
                {worksheetTitle} · {currentPage} / {totalPage}
            </Text>
        </View>
    );
}
