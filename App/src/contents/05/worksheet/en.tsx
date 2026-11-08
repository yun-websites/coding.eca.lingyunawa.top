import { Document, Page, Text } from "@react-pdf/renderer";
import { AnswerLines } from "@/components/worksheets/AnswerLines";
import { CodeBlock } from "@/components/worksheets/CodeBlock";
import { CodeLines } from "@/components/worksheets/CodeLines";
import { Footer as WsFooter } from "@/components/worksheets/Footer";
import { TaskCard } from "@/components/worksheets/TaskCard";
import { WorksheetHeader } from "@/components/worksheets/WorksheetHeader";
import { pdfStyles } from "@/lib/config";

const title = "Modules and Libraries Worksheet";
const summary = "Lesson 05 · import and call Python tools";
const compact = {
    code: { ...pdfStyles.code, fontSize: 8.2, lineHeight: 1.25, padding: 7, marginTop: 3 },
    taskBody: { ...pdfStyles.taskBody, lineHeight: 1.2 },
    prompt: { ...pdfStyles.prompt, fontSize: 8, lineHeight: 1.2, marginTop: 4 },
};

function Footer({ page }: { page: number }) {
    return <WsFooter worksheetSummary={summary} worksheetTitle={title} currentPage={page} totalPage={2} />;
}

export function LibrariesDocument() {
    return (
        <Document title="Modules and Libraries Class Check - Lesson 05" author="Coding Club">
            <Page size="A4" style={pdfStyles.page}>
                <WorksheetHeader
                    title={title}
                    subtitle="Complete this in class. Predict first, then run your code."
                    lessonNumber={5}
                    activityLabel="Class Check"
                />
                <TaskCard number="1" title="Predict a module call">
                    <Text style={pdfStyles.taskBody}>Work out the output and identify the module and function.</Text>
                    <CodeBlock code={"import math\n\nnumber = math.sqrt(36)\nprint(number)"} />
                    <Text style={compact.prompt}>Output: __________　Module: __________　Function: __________</Text>
                    <Text style={compact.prompt}>What does the dot between `math` and `sqrt` do?</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="2" title="Complete the module prefix">
                    <Text style={compact.taskBody}>The import is already written. Add the missing module name.</Text>
                    <CodeBlock code={"import random\n\nnumber = ____________________.randint(1, 6)\nprint(number)"} />
                    <Text style={compact.prompt}>Run it twice. What do you notice?</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <Footer page={1} />
            </Page>
            <Page size="A4" style={pdfStyles.page}>
                <TaskCard number="3" title="Compare two import styles">
                    <Text style={compact.taskBody}>
                        Complete the code and explain how this call differs from `random.randint()`.
                    </Text>
                    <CodeBlock code={"from random import randint\n\nnumber = ____________________(1, 10)\nprint(number)"} />
                    <Text style={compact.prompt}>Why is there no `random.` prefix here?</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="4" title="Build a random challenge">
                    <Text style={compact.taskBody}>
                        Use an imported random tool and your own function to build a challenge with up to three guesses.
                    </Text>
                    <CodeBlock
                        code={
                            'import random\n\ndef give_hint(guess, target):\n    if guess == target:\n        return "Correct!"\n    elif guess < target:\n        return "Too low."\n    return "Too high."\n\ntarget = random.randint(1, 10)'
                        }
                    />
                    <Text style={compact.prompt}>
                        Continue with input, a loop, hints, and a final result. You may use `break` when the player wins.
                    </Text>
                    <CodeLines style={{ ...pdfStyles.answerArea, minHeight: 112 }} length={9} />
                </TaskCard>
                <Footer page={2} />
            </Page>
        </Document>
    );
}
