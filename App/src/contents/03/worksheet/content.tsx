import { Document, Page, Text } from "@react-pdf/renderer";
import { AnswerLines } from "@/components/worksheets/AnswerLines";
import { CodeLines } from "@/components/worksheets/CodeLines";
import { Footer as WsFooter } from "@/components/worksheets/Footer";
import { TaskCard } from "@/components/worksheets/TaskCard";
import { WorksheetHeader } from "@/components/worksheets/WorksheetHeader";
import { pdfStyles } from "@/lib/config";

const title = "Conditions and Loops Class Check";
const summary = "Lesson 03 · conditions, for, and while";

function Footer({ page }: { page: number }) {
    return <WsFooter worksheetSummary={summary} worksheetTitle={title} currentPage={page} totalPage={2} />;
}

export function ConditionsLoopsDocument() {
    return (
        <Document title="Conditions and Loops Class Check - Lesson 03" author="Coding Club">
            <Page size="A4" style={pdfStyles.page}>
                <WorksheetHeader title={title} subtitle="Complete this in class. Predict first, then run your code." lessonNumber={3} activityLabel="Class Check" />
                <TaskCard number="1" title="Predict the condition">
                    <Text style={pdfStyles.taskBody}>Work out which value will be stored without running the code.</Text>
                    <Text style={pdfStyles.code}>{'score = 7\n\nif score >= 10:\n    result = "Gold"\nelif score >= 5:\n    result = "Silver"\nelse:\n    result = "Try again"'}</Text>
                    <Text style={pdfStyles.prompt}>Result: ____________________</Text>
                    <Text style={pdfStyles.prompt}>Why is that branch used?</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="2" title="Complete the branches">
                    <Text style={pdfStyles.taskBody}>Below 8 is Beginner, below 13 is Explorer, and all other ages are Advanced.</Text>
                    <Text style={pdfStyles.code}>{'age = int(input("Age: "))\n\nif ____________________:\n    print("Beginner")\nelif ____________________:\n    print("Explorer")\nelse:\n    print("Advanced")'}</Text>
                    <Text style={pdfStyles.prompt}>Test inputs 6, 10, and 14. What output should each produce?</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="3" title="Trace and fix a loop">
                    <Text style={pdfStyles.taskBody}>How many lines will print? Then add the missing update.</Text>
                    <Text style={pdfStyles.code}>{'for round_number in range(1, 4):\n    print("Round", round_number)\n\ncount = 1\nwhile count <= 3:\n    print(count)\n    ____________________'}</Text>
                    <Text style={pdfStyles.prompt}>Number of for-loop lines: __________</Text>
                    <Text style={pdfStyles.prompt}>Missing line: __________________________________________</Text>
                </TaskCard>
                <Footer page={1} />
            </Page>
            <Page size="A4" style={pdfStyles.page}>
                <TaskCard number="4" title="Build a challenge program">
                    <Text style={pdfStyles.taskBody}>Use the starter lines, then add conditions and loops. Change the words and values to make it your own.</Text>
                    <Text style={pdfStyles.code}>{'name = input("Name: ")\ntarget = int(input("Target: "))\n\nif target >= 8:\n    level = "advanced"\nelif target >= 4:\n    level = "explorer"\nelse:\n    level = "beginner"\n\nfor round_number in range(1, 4):\n    print("Round", round_number)\n\nattempts = 0\nanswer = 0\nwhile answer != target and attempts < 3:\n    answer = int(input("Guess: "))\n    attempts = attempts + 1'}</Text>
                    <Text style={pdfStyles.prompt}>Add a final if/else result, then write your final code below.</Text>
                    <CodeLines style={{ ...pdfStyles.answerArea, minHeight: 166 }} length={12} />
                </TaskCard>
                <TaskCard number="5" title="Explain your logic">
                    <Text style={pdfStyles.prompt}>What does your if/elif/else decide?</Text>
                    <AnswerLines count={1} short />
                    <Text style={pdfStyles.prompt}>What does your for loop repeat?</Text>
                    <AnswerLines count={1} short />
                    <Text style={pdfStyles.prompt}>What changes so your while loop can end?</Text>
                    <AnswerLines count={1} short />
                    <Text style={pdfStyles.prompt}>Teacher initials after a successful run: ____________________</Text>
                </TaskCard>
                <TaskCard number="6" title="Exit ticket">
                    <Text style={pdfStyles.prompt}>1. What is the difference between = and ==?</Text>
                    <AnswerLines count={1} short />
                    <Text style={pdfStyles.prompt}>2. Complete range to print 1, 2, 3: range(____, ____)</Text>
                    <AnswerLines count={1} short />
                    <Text style={pdfStyles.prompt}>3. Why must a while condition eventually become False?</Text>
                    <AnswerLines count={1} short />
                </TaskCard>
                <Footer page={2} />
            </Page>
        </Document>
    );
}
