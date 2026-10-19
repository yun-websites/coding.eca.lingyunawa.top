import { pdfStyles } from "@/lib/config";
import { View, Text } from "@react-pdf/renderer";

interface VariableMapProps {
    variableRows: number;
    labels?: {
        variableName: string;
        value: string;
        stores: string;
    };
}

export function VariableMap({
    variableRows,
    labels = { variableName: "Variable name", value: "Value", stores: "What it stores" },
}: VariableMapProps) {
    return (
        <View style={pdfStyles.table}>
            <View style={[pdfStyles.tableRow, pdfStyles.tableHeader]}>
                <Text style={[pdfStyles.variableCell, pdfStyles.tableHead]}>{labels.variableName}</Text>
                <Text style={[pdfStyles.tableCell, pdfStyles.tableHead]}>{labels.value}</Text>
                <Text style={[pdfStyles.tableCell, pdfStyles.tableHead, { width: 139 }]}>{labels.stores}</Text>
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
