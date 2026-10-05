import { pdfStyles } from "@/lib/config";
import { View, Text } from "@react-pdf/renderer";

interface VariableMapProps {
    variableRows: number;
}

export function VariableMap({ variableRows }: VariableMapProps) {
    return (
        <View style={pdfStyles.table}>
            <View style={[pdfStyles.tableRow, pdfStyles.tableHeader]}>
                <Text style={[pdfStyles.variableCell, pdfStyles.tableHead]}>Variable name</Text>
                <Text style={[pdfStyles.tableCell, pdfStyles.tableHead]}>Value</Text>
                <Text style={[pdfStyles.tableCell, pdfStyles.tableHead, { width: 139 }]}>What it stores</Text>
            </View>
            {Array.from({ length: variableRows }, (_, index) => (
                <View style={pdfStyles.tableRow} key={index}>
                    <View style={pdfStyles.variableCell} />
                    <View style={pdfStyles.tableCell} />
                    <View style={[pdfStyles.tableCell, { borderRight: 0 }, { width: 120 }]} />
                </View>
            ))}
        </View>
    );
}
