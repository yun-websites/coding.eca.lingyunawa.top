import { StyleSheet } from "@react-pdf/renderer";

export const pdfStyles = StyleSheet.create({
    page: {
        backgroundColor: "#fafafa",
        color: "#27272a",
        fontFamily: "Helvetica",
        padding: 34,
        fontSize: 9.5,
    },
    header: {
        backgroundColor: "#a584d9",
        borderRadius: 8,
        color: "#f5f3ff",
        padding: 18,
        marginBottom: 14,
    },
    eyebrow: {
        color: "#ddd6fe",
        fontSize: 8,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1.1,
        marginBottom: 6,
    },
    title: { fontSize: 24, fontWeight: 700, marginBottom: 6 },
    subtitle: { color: "#ede9fe", fontSize: 10, lineHeight: 1.4 },
    studentRow: { flexDirection: "row", gap: 10, marginTop: 14 },
    studentField: { flexGrow: 1, borderTop: "1 solid #a78bfa", paddingTop: 5 },
    studentLabel: {
        color: "#ddd6fe",
        fontSize: 7,
        fontWeight: 700,
        textTransform: "uppercase",
        marginBottom: 5,
    },
    blank: { color: "#f5f3ff", fontSize: 10 },
    section: { marginBottom: 12 },
    sectionTitle: {
        color: "#18181b",
        fontSize: 13,
        fontWeight: 700,
        marginBottom: 5,
    },
    sectionIntro: { color: "#71717a", lineHeight: 1.35, marginBottom: 7 },
    taskCard: {
        backgroundColor: "#ffffff",
        border: "1 solid #e4e4e7",
        borderRadius: 6,
        padding: 10,
        marginBottom: 8,
    },
    taskLabel: {
        color: "#6d28d9",
        fontSize: 8,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 0.7,
        marginBottom: 4,
    },
    taskTitle: {
        color: "#18181b",
        fontSize: 11,
        fontWeight: 700,
        marginBottom: 4,
    },
    taskBody: { color: "#52525b", lineHeight: 1.35 },
    code: {
        backgroundColor: "#27272a",
        borderRadius: 4,
        color: "#f4f4f5",
        fontFamily: "Courier",
        fontSize: 9,
        lineHeight: 1.5,
        padding: 9,
        marginTop: 7,
    },
    prompt: { color: "#71717a", fontSize: 8.5, lineHeight: 1.35, marginTop: 6 },
    answerLine: { borderBottom: "1 solid #a1a1aa", height: 15, marginTop: 4 },
    answerLineShort: {
        borderBottom: "1 solid #a1a1aa",
        height: 13,
        marginTop: 3,
    },
    table: { border: "1 solid #e4e4e7", borderRadius: 4, marginTop: 7 },
    tableRow: {
        flexDirection: "row",
        borderBottom: "1 solid #e4e4e7",
        minHeight: 28,
    },
    tableHeader: { backgroundColor: "#f4f4f5", minHeight: 22 },
    tableHead: { color: "#3f3f46", fontSize: 8, fontWeight: 700, padding: 5 },
    tableCell: { borderRight: "1 solid #e4e4e7", flexGrow: 1, padding: 5 },
    variableCell: { borderRight: "1 solid #e4e4e7", width: 115, padding: 5 },
    columns: { flexDirection: "row", gap: 10 },
    column: { flexGrow: 1, flexBasis: 0 },
    answerArea: {
        backgroundColor: "#ffffff",
        border: "1 solid #e4e4e7",
        borderRadius: 4,
        minHeight: 92,
        marginTop: 7,
        padding: 8,
    },
    codeLine: { borderBottom: "1 solid #d4d4d8", height: 14, marginBottom: 3 },
    outputArea: {
        backgroundColor: "#f4f4f5",
        borderRadius: 4,
        minHeight: 92,
        marginTop: 7,
        padding: 8,
    },
    outputLine: {
        borderBottom: "1 solid #a1a1aa",
        height: 14,
        marginBottom: 3,
    },
    callout: {
        backgroundColor: "#eff6ff",
        border: "1 solid #bfdbfe",
        borderLeft: "4 solid #2563eb",
        borderRadius: 4,
        color: "#1e3a8a",
        padding: 9,
    },
    checkGrid: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 7 },
    check: {
        backgroundColor: "#ffffff",
        border: "1 solid #e4e4e7",
        borderRadius: 4,
        color: "#52525b",
        padding: 6,
        width: "48%",
    },
    checkbox: { color: "#71717a", fontSize: 10 },
    footer: {
        borderTop: "1 solid #e4e4e7",
        color: "#71717a",
        flexDirection: "row",
        fontSize: 8,
        justifyContent: "space-between",
        marginTop: "auto",
        paddingTop: 7,
    },
});

export interface Worksheet {
    title: string;
    subtitle: string;
    errorExamples: Array<{
        code: string;
        hint: string;
    }>;
    variableRows: number;
    programPrompt: string[];
    selfCheck: string[];
}
