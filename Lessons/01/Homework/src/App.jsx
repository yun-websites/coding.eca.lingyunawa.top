import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { worksheet } from "./data";

const pdfStyles = StyleSheet.create({
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

function StudentField({ label, width, lineCount, extraStyle = undefined }) {
    return (
        <View
            style={[
                pdfStyles.studentField,
                width ? { width } : null,
                extraStyle,
            ]}>
            <Text style={pdfStyles.studentLabel}>{label}</Text>
            <Text style={pdfStyles.blank}>
                {Array.from({ length: lineCount ?? 35 }, () => "_")}
            </Text>
        </View>
    );
}

function WorksheetHeader() {
    return (
        <View style={pdfStyles.header}>
            <Text style={pdfStyles.eyebrow}>
                Coding Club / Lesson 01 Homework
            </Text>
            <Text style={pdfStyles.title}>{worksheet.title}</Text>
            <Text style={{ ...pdfStyles.subtitle }}>{worksheet.subtitle}</Text>
            <View style={pdfStyles.studentRow}>
                <StudentField label="Student name" lineCount={40} />
                {/* <StudentField label="Class" width={115} lineCount={15} /> */}
                <StudentField label="Date" lineCount={40} />
            </View>
        </View>
    );
}

function TaskCard({ number, title, children }) {
    return (
        <View style={pdfStyles.taskCard} wrap={false}>
            <Text style={pdfStyles.taskLabel}>Task {number}</Text>
            <Text style={pdfStyles.taskTitle}>{title}</Text>
            {children}
        </View>
    );
}

function AnswerLines({ count = 2, short = false }) {
    return (
        <View>
            {Array.from({ length: count }, (_, index) => (
                <View
                    key={index}
                    style={
                        short ? pdfStyles.answerLineShort : pdfStyles.answerLine
                    }
                />
            ))}
        </View>
    );
}

function VariableMap() {
    return (
        <View style={pdfStyles.table}>
            <View style={[pdfStyles.tableRow, pdfStyles.tableHeader]}>
                <Text style={[pdfStyles.variableCell, pdfStyles.tableHead]}>
                    Variable name
                </Text>
                <Text style={[pdfStyles.tableCell, pdfStyles.tableHead]}>
                    Value
                </Text>
                <Text
                    style={[
                        pdfStyles.tableCell,
                        pdfStyles.tableHead,
                        { width: 139 },
                    ]}>
                    What it stores
                </Text>
            </View>
            {Array.from({ length: worksheet.variableRows }, (_, index) => (
                <View style={pdfStyles.tableRow} key={index}>
                    <View style={pdfStyles.variableCell} />
                    <View style={pdfStyles.tableCell} />
                    <View
                        style={[
                            pdfStyles.tableCell,
                            { borderRight: 0 },
                            { width: 120 },
                        ]}
                    />
                </View>
            ))}
        </View>
    );
}

function CodeLines({ style }) {
    return (
        <View style={style}>
            {Array.from({ length: 10 }, (_, index) => (
                <View key={index} style={pdfStyles.codeLine} />
            ))}
        </View>
    );
}

function Footer({ page }) {
    return (
        <View style={pdfStyles.footer} fixed>
            <Text>Lesson 01 · print(), strings, variables</Text>
            <Text>Python Welcome Card Worksheet · {page} / 2</Text>
        </View>
    );
}

export function WelcomeCardDocument() {
    return (
        <Document
            title="Python Welcome Card Worksheet - Lesson 01"
            author="Coding Club">
            <Page size="A4" style={pdfStyles.page}>
                <WorksheetHeader />
                <View style={{ ...pdfStyles.section, marginBottom: -4 }}>
                    <Text style={pdfStyles.sectionTitle}>
                        Complete the tasks in order
                    </Text>
                    <Text style={pdfStyles.sectionIntro}>
                        Write your answers before testing your code. Use clear
                        handwriting if you print this sheet.
                    </Text>
                </View>
                <TaskCard number="1" title="Fix the errors">
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>
                        For each line, write a corrected version of the code.
                    </Text>
                    {worksheet.errorExamples.map((item) => (
                        <View key={item.code}>
                            <Text style={pdfStyles.code}>{item.code}</Text>
                            <Text style={pdfStyles.prompt}>{item.hint}</Text>
                            <AnswerLines count={1} short />
                        </View>
                    ))}
                </TaskCard>
                <TaskCard number="2" title="Plan your variables">
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>
                        Choose at least two pieces of information about
                        yourself. Use legal names: no spaces, hyphens, or
                        starting numbers.
                    </Text>
                    <VariableMap />
                </TaskCard>
                <TaskCard number="3" title="Plan your program">
                    {worksheet.programPrompt.map((item) => (
                        <Text
                            style={{ ...pdfStyles.taskBody, marginBottom: -12 }}
                            key={item}>
                            · {item}
                        </Text>
                    ))}
                    <Text style={pdfStyles.prompt}>
                        What welcome message will your program print?
                    </Text>
                    <AnswerLines count={1} short />
                    <AnswerLines count={1} short />
                    <AnswerLines count={1} short />
                    <AnswerLines count={1} short />
                </TaskCard>
                <Footer page="1" />
            </Page>

            <Page size="A4" style={pdfStyles.page}>
                <TaskCard number="4" title="Write your Python program">
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>
                        Write the final version of your program. Remember:
                        variables store values; print() displays them.
                    </Text>
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>
                        You can do this on your computer, or write it on the paper.
                    </Text>
                    <CodeLines style={pdfStyles.answerArea} />
                </TaskCard>
                <View style={pdfStyles.columns}>
                    <View style={pdfStyles.column}>
                        <TaskCard number="5" title="Predict the output">
                            <Text
                                style={{
                                    ...pdfStyles.taskBody,
                                    marginBottom: -12,
                                }}>
                                Before running your code,
                            </Text>
                            <Text
                                style={{
                                    ...pdfStyles.taskBody,
                                    marginBottom: -12,
                                }}>
                                write exactly what you expect Python to display.
                            </Text>
                            <View style={pdfStyles.outputArea}>
                                {Array.from({ length: 6 }, (_, index) => (
                                    <View
                                        key={index}
                                        style={pdfStyles.outputLine}
                                    />
                                ))}
                            </View>
                        </TaskCard>
                    </View>
                    <View style={pdfStyles.column}>
                        <TaskCard number="6" title="Explain the difference">
                            <Text style={pdfStyles.code}>
                                {'print(city)\nprint("city")'}
                            </Text>
                            <Text style={pdfStyles.prompt}>
                                Why can these two lines display different
                                results?
                            </Text>
                            <AnswerLines count={5} short />
                        </TaskCard>
                    </View>
                </View>
                <View style={{ ...pdfStyles.section, marginTop: 12 }}>
                    <Text style={pdfStyles.sectionTitle}>Final self-check</Text>
                    <View style={pdfStyles.checkGrid}>
                        {worksheet.selfCheck.map((item) => (
                            <Text style={pdfStyles.check} key={item}>
                                <Text style={pdfStyles.checkbox}>[ ] </Text>
                                {item}
                            </Text>
                        ))}
                    </View>
                </View>
                <View style={pdfStyles.callout}>
                    <Text>
                        Upload your Python file named welcome_card.py if applicable, after the holiday, give the completed worksheet to Jim.
                    </Text>
                    <Text>{" "}</Text>
                    <Text>
                        You may need a computer for using Python software, even through you can directly write codes with nodepad.
                    </Text>
                    <Text>
                        Email or send Teams messages to Jim if you need help with it.
                    </Text>
                    <Text>{" "}</Text>
                    <Text>
                        Online Submission:
                        https://link.lingyunawa.top/ssf/eca/coding-2627/students
                    </Text>
                    <Text>
                        Digital Materials (this one is Homework-22Sep2026.pdf):
                        https://link.lingyunawa.top/ssf/eca/coding-2627/materials
                    </Text>
                </View>
                <Footer page="2" />
            </Page>
        </Document>
    );
}

export default function App() {
    return <WelcomeCardDocument />;
}
