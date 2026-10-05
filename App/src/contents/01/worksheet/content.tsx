import { Document, Page, Text, View } from "@react-pdf/renderer";
import { AnswerLines } from "@/components/worksheets/AnswerLines";
import { CodeLines } from "@/components/worksheets/CodeLines";
import { Footer as WsFooter } from "@/components/worksheets/Footer";
import { TaskCard } from "@/components/worksheets/TaskCard";
import { VariableMap } from "@/components/worksheets/VariableMap";
import { pdfStyles } from "@/lib/config";
import { WorksheetHeader } from "@/components/worksheets/WorksheetHeader";
import { worksheet } from "./data";

function Footer({ page }: { page: number }) {
    return (
        <WsFooter
            worksheetSummary="Lesson 01 · print(), strings, variables"
            worksheetTitle="Python Welcome Card Worksheet"
            currentPage={page}
            totalPage={2}
        />
    );
}

export function WelcomeCardDocument() {
    return (
        <Document title="Python Welcome Card Worksheet - Lesson 01" author="Coding Club">
            <Page size="A4" style={pdfStyles.page}>
                <WorksheetHeader title="Python Welcome Card Worksheet" subtitle="" lessonNumber={1} />
                <View style={{ ...pdfStyles.section, marginBottom: -4 }}>
                    <Text style={pdfStyles.sectionTitle}>Complete the tasks in order</Text>
                    <Text style={pdfStyles.sectionIntro}>
                        Write your answers before testing your code. Use clear handwriting if you print this sheet.
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
                        Choose at least two pieces of information about yourself. Use legal names: no spaces, hyphens, or
                        starting numbers.
                    </Text>
                    <VariableMap variableRows={2} />
                </TaskCard>
                <TaskCard number="3" title="Plan your program">
                    {worksheet.programPrompt.map((item) => (
                        <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }} key={item}>
                            · {item}
                        </Text>
                    ))}
                    <Text style={pdfStyles.prompt}>What welcome message will your program print?</Text>
                    <AnswerLines count={1} short />
                    <AnswerLines count={1} short />
                    <AnswerLines count={1} short />
                    <AnswerLines count={1} short />
                </TaskCard>
                <Footer page={1} />
            </Page>

            <Page size="A4" style={pdfStyles.page}>
                <TaskCard number="4" title="Write your Python program">
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>
                        Write the final version of your program. Remember: variables store values; print() displays them.
                    </Text>
                    <CodeLines style={pdfStyles.answerArea} length={10} />
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
                                    <View key={index} style={pdfStyles.outputLine} />
                                ))}
                            </View>
                        </TaskCard>
                    </View>
                    <View style={pdfStyles.column}>
                        <TaskCard number="6" title="Explain the difference">
                            <Text style={pdfStyles.code}>{'print(city)\nprint("city")'}</Text>
                            <Text style={pdfStyles.prompt}>Why can these two lines display different results?</Text>
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
                        Upload your Python file named welcome_card.py if applicable, after the holiday, give the completed
                        worksheet to Jim.
                    </Text>
                    <Text> </Text>
                    <Text>
                        You may need a computer for using Python software, even through you can directly write codes with
                        nodepad.
                    </Text>
                    <Text>Email or send Teams messages to Jim if you need help with it.</Text>
                    <Text> </Text>
                    <Text>Online Submission: https://link.lingyunawa.top/ssf/eca/coding-2627/students</Text>
                    <Text>
                        Digital Materials (this one is Homework-22Sep2026.pdf):
                        https://link.lingyunawa.top/ssf/eca/coding-2627/materials
                    </Text>
                </View>
                <Footer page={2} />
            </Page>
        </Document>
    );
}
