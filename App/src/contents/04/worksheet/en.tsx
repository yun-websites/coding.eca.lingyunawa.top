import { Document, Page, Text } from "@react-pdf/renderer";
import { AnswerLines } from "@/components/worksheets/AnswerLines";
import { CodeBlock } from "@/components/worksheets/CodeBlock";
import { CodeLines } from "@/components/worksheets/CodeLines";
import { Footer as WsFooter } from "@/components/worksheets/Footer";
import { TaskCard } from "@/components/worksheets/TaskCard";
import { WorksheetHeader } from "@/components/worksheets/WorksheetHeader";
import { pdfStyles } from "@/lib/config";

const title = "Functions Class Check";
const summary = "Lesson 04 · define, call, and reuse functions";

const compactWorksheetStyles = {
    code: { ...pdfStyles.code, fontSize: 8.2, lineHeight: 1.25, padding: 7, marginTop: 3 },
    taskBody: { ...pdfStyles.taskBody, lineHeight: 1.2 },
    prompt: { ...pdfStyles.prompt, fontSize: 8, lineHeight: 1.2, marginTop: 4 },
};

function Footer({ page }: { page: number }) {
    return <WsFooter worksheetSummary={summary} worksheetTitle={title} currentPage={page} totalPage={2} />;
}

export function FunctionsDocument() {
    return (
        <Document title="Functions Class Check - Lesson 04" author="Coding Club">
            <Page size="A4" style={pdfStyles.page}>
                <WorksheetHeader
                    title={title}
                    subtitle="Complete this in class. Predict first, then run your code."
                    lessonNumber={4}
                    activityLabel="Class Check"
                />
                <TaskCard number="1" title="Predict the function calls">
                    <Text style={pdfStyles.taskBody}>Work out the output without running the code.</Text>
                    <CodeBlock
                        code={
                            'def show_message():\n    print("Start")\n    print("Keep coding")\n\nshow_message()\nshow_message()'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>Number of output lines: __________</Text>
                    <Text style={compactWorksheetStyles.prompt}>Why does the message appear twice?</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="2" title="Complete the call">
                    <Text style={compactWorksheetStyles.taskBody}>
                        The function is defined, but the program does not show anything. Add the missing function call.
                    </Text>
                    <CodeBlock
                        code={'def show_rule():\n    print("Test your code before you submit it.")\n\n____________________'}
                    />
                    <Text style={compactWorksheetStyles.prompt}>
                        What does defining a function do? What does calling it do?
                    </Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <Footer page={1} />
            </Page>
            <Page size="A4" style={pdfStyles.page}>
                <TaskCard number="3" title="Use a parameter and return a result">
                    <Text style={compactWorksheetStyles.taskBody}>Complete both functions, then predict the final output.</Text>
                    <CodeBlock
                        code={
                            'def greet(name):\n    print("Hello,", ____________________)\n\ndef add_bonus(score):\n    return ____________________\n\ngreet("Mina")\nfinal_score = add_bonus(7)\nprint(final_score)'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>What is the parameter? What does `return` send back?</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="4" title="Build a function challenge">
                    <Text style={compactWorksheetStyles.taskBody}>
                        Use the starter functions, then change the words and values to make the program your own.
                    </Text>
                    <CodeBlock
                        code={
                            'def show_welcome(name):\n    print("Welcome,", name)\n\ndef get_level(score):\n    if score >= 8:\n        return "advanced"\n    elif score >= 4:\n        return "explorer"\n    else:\n        return "beginner"\n\ndef calculate_total(score, bonus):\n    return score + bonus'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>
                        Add a function with a loop, call all your functions, and write the final code below.
                    </Text>
                    <CodeLines style={{ ...pdfStyles.answerArea, minHeight: 120 }} length={10} />
                </TaskCard>
                <Footer page={2} />
            </Page>
        </Document>
    );
}
