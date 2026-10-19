import { Document, Page, Text } from "@react-pdf/renderer";
import { AnswerLines } from "@/components/worksheets/AnswerLines";
import { CodeBlock } from "@/components/worksheets/CodeBlock";
import { CodeLines } from "@/components/worksheets/CodeLines";
import { Footer as WsFooter } from "@/components/worksheets/Footer";
import { TaskCard } from "@/components/worksheets/TaskCard";
import { WorksheetHeader } from "@/components/worksheets/WorksheetHeader";
import { pdfStyles } from "@/lib/config";

const title = "Conditions and Loops Class Check";
const summary = "Lesson 03 · conditions, for, and while";

const compactWorksheetStyles = {
    code: { ...pdfStyles.code, fontSize: 8.2, lineHeight: 1.25, padding: 7, marginTop: 3 },
    taskBody: { ...pdfStyles.taskBody, lineHeight: 1.2 },
    prompt: { ...pdfStyles.prompt, fontSize: 8, lineHeight: 1.2, marginTop: 4 },
};

function Footer({ page }: { page: number }) {
    return <WsFooter worksheetSummary={summary} worksheetTitle={title} currentPage={page} totalPage={2} />;
}

export function ConditionsLoopsDocument() {
    return (
        <Document title="Conditions and Loops Class Check - Lesson 03" author="Coding Club">
            <Page size="A4" style={pdfStyles.page}>
                <WorksheetHeader
                    title={title}
                    subtitle="Complete this in class. Predict first, then run your code."
                    lessonNumber={3}
                    activityLabel="Class Check"
                />
                <TaskCard number="1" title="Predict the condition">
                    <Text style={pdfStyles.taskBody}>Work out which value will be stored without running the code.</Text>
                    <CodeBlock
                        code={
                            'score = 7\n\nif score >= 10:\n    result = "Gold"\nelif score >= 5:\n    result = "Silver"\nelse:\n    result = "Try again"'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>Result: ____________________</Text>
                    <Text style={compactWorksheetStyles.prompt}>Why is that branch used?</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="2" title="Complete the branches">
                    <Text style={compactWorksheetStyles.taskBody}>
                        Below 8 is Beginner, below 13 is Explorer, and all other ages are Advanced.
                    </Text>
                    <CodeBlock
                        code={
                            'age = int(input("Age: "))\n\nif ____________________:\n    print("Beginner")\nelif ____________________:\n    print("Explorer")\nelse:\n    print("Advanced")'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>
                        Test inputs 6, 10, and 14. What output should each produce?
                    </Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <Footer page={1} />
            </Page>
            <Page size="A4" style={pdfStyles.page}>
                <TaskCard number="3" title="Trace and fix a loop">
                    <Text style={compactWorksheetStyles.taskBody}>How many lines will print? Then add the missing update.</Text>
                    <CodeBlock
                        code={
                            'for round_number in range(1, 4):\n    print("Round", round_number)\n\ncount = 1\nwhile count <= 3:\n    print(count)\n    ____________________'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>Number of for-loop lines: __________</Text>
                    <Text style={compactWorksheetStyles.prompt}>Missing line: __________________________________________</Text>
                </TaskCard>
                <TaskCard number="4" title="Build a challenge program">
                    <Text style={compactWorksheetStyles.taskBody}>
                        Use the starter lines, then add conditions and loops. Change the words and values to make it your own.
                    </Text>
                    <CodeBlock
                        code={
                            'name = input("Name: ")\ntarget = int(input("Target: "))\n\nif target >= 8:\n    level = "advanced"\nelif target >= 4:\n    level = "explorer"\nelse:\n    level = "beginner"\n\nfor round_number in range(1, 4):\n    print("Round", round_number)\n\nattempts = 0\nanswer = 0\nwhile answer != target and attempts < 3:\n    answer = int(input("Guess: "))\n    attempts = attempts + 1'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>
                        Add a final if/else result, then write your final code below.
                    </Text>
                    <CodeLines style={{ ...pdfStyles.answerArea, minHeight: 120 }} length={10} />
                </TaskCard>
                <Footer page={2} />
            </Page>
        </Document>
    );
}
