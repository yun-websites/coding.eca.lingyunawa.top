import { Document, Page, Text } from "@react-pdf/renderer";
import { AnswerLines } from "@/components/worksheets/AnswerLines";
import { CodeLines } from "@/components/worksheets/CodeLines";
import { Footer as WsFooter } from "@/components/worksheets/Footer";
import { TaskCard } from "@/components/worksheets/TaskCard";
import { WorksheetHeader } from "@/components/worksheets/WorksheetHeader";
import { pdfStyles } from "@/lib/config";

const title = "Variable Toolbox Class Check";
const summary = "Lesson 02 · input(), types, and data containers";

function Footer({ page }: { page: number }) {
    return <WsFooter worksheetSummary={summary} worksheetTitle={title} currentPage={page} totalPage={2} />;
}

export function VariableToolboxDocument() {
    return (
        <Document title="Variable Toolbox Class Check - Lesson 02" author="Coding Club">
            <Page size="A4" style={pdfStyles.page}>
                <WorksheetHeader
                    title={title}
                    subtitle="Complete this in class. Predict first, then run your code."
                    lessonNumber={2}
                    activityLabel="Class Check"
                />

                <TaskCard number="1" title="Name the types">
                    <Text style={pdfStyles.taskBody}>Write the most suitable type beside each value.</Text>
                    <Text style={pdfStyles.code}>{'"blue"\n\n3.1\n["coding", "music"]\n{"name": "Mina"}\n(31.2, 120.6)'}</Text>
                    <Text style={pdfStyles.prompt}>Write the types:</Text>
                    <AnswerLines count={2} short />
                    <Text style={pdfStyles.prompt}>Which type is suitable for a collection that can grow? Why?</Text>
                    <AnswerLines count={2} short />
                </TaskCard>

                <TaskCard number="2" title="Fix the input">
                    <Text style={pdfStyles.taskBody}>Make this program print the user&apos;s age two years from now.</Text>
                    <Text style={pdfStyles.code}>{'age = input("Age: ")\nprint(age + 2)'}</Text>
                    <Text style={pdfStyles.prompt}>Correct code:</Text>
                    <CodeLines style={pdfStyles.answerArea} length={4} />
                    <Text style={pdfStyles.prompt}>Why is int() needed?</Text>
                    <AnswerLines count={2} short />
                    <Text style={{ ...pdfStyles.prompt, marginTop: 7 }}>Test with 13: expected output __________</Text>
                </TaskCard>

                <Footer page={1} />
            </Page>

            <Page size="A4" style={pdfStyles.page}>
                <TaskCard number="3" title="Mini dashboard">
                    <Text style={pdfStyles.taskBody}>Write and run a small program. You may use the starter lines below.</Text>
                    <Text style={pdfStyles.code}>
                        {
                            'name = input("Name: ")\nage = int(input("Age: "))\ncity = input("City: ")\nitems = ["coding", "music"]\nprofile = {"name": name, "city": city}\nlocation = (31.2, 120.6)'
                        }
                    </Text>
                    <Text style={{ ...pdfStyles.taskBody, marginTop: 7 }}>Add enough code to:</Text>
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -9 }}>· use float() for one measurement;</Text>
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -9 }}>· add one item with ".append()";</Text>
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -9 }}>· read one value from "profile";</Text>
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -9 }}>
                        · print next year&apos;s age and at least two other results.
                    </Text>
                    <Text style={pdfStyles.prompt}>Write your final code:</Text>
                    <CodeLines style={{ ...pdfStyles.answerArea, minHeight: 154 }} length={10} />
                </TaskCard>

                <TaskCard number="4" title="After running">
                    <Text style={pdfStyles.prompt}>Write one variable name and the value it stores for each type.</Text>
                    <Text style={{ ...pdfStyles.taskBody, marginTop: 4 }}>
                        &quot;str&quot;: ____________________ = ____________________
                    </Text>
                    <Text style={{ ...pdfStyles.taskBody, marginTop: -4 }}>
                        &quot;int&quot;: ____________________ = ____________________
                    </Text>
                    <Text style={{ ...pdfStyles.taskBody, marginTop: -4 }}>
                        &quot;float&quot;: ____________________ = ____________________
                    </Text>
                    <Text style={{ ...pdfStyles.taskBody, marginTop: -4 }}>
                        &quot;list&quot;: ____________________ = ____________________
                    </Text>
                    <Text style={{ ...pdfStyles.taskBody, marginTop: -4 }}>
                        &quot;dict&quot;: ____________________ = ____________________
                    </Text>
                    <Text style={{ ...pdfStyles.taskBody, marginTop: -4 }}>
                        &quot;tuple&quot;: ____________________ = ____________________
                    </Text>
                    <Text style={pdfStyles.prompt}>One thing I can explain about my program:</Text>
                    <AnswerLines count={2} short />
                </TaskCard>

                <Footer page={2} />
            </Page>
        </Document>
    );
}
