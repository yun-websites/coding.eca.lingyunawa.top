import { Document, Page, Text } from "@react-pdf/renderer";
import { AnswerLines } from "@/components/worksheets/AnswerLines";
import { CodeBlock } from "@/components/worksheets/CodeBlock";
import { CodeLines } from "@/components/worksheets/CodeLines";
import { Footer as WsFooter } from "@/components/worksheets/Footer";
import { TaskCard } from "@/components/worksheets/TaskCard";
import { WorksheetHeader } from "@/components/worksheets/WorksheetHeader";
import { pdfStyles } from "@/lib/config";

const title = "Python 条件与循环 Worksheet";
const summary = "第 03 章 · 条件、for 和 while";
const compactWorksheetStyles = {
    taskBody: { ...pdfStyles.taskBody, lineHeight: 1.2 },
    prompt: { ...pdfStyles.prompt, fontSize: 8, lineHeight: 1.2, marginTop: 4 },
};
function Footer({ page }: { page: number }) {
    return <WsFooter worksheetSummary={summary} worksheetTitle={title} currentPage={page} totalPage={2} />;
}

export function ConditionsLoopsDocument() {
    return (
        <Document title="条件与循环课堂检查 - 第 03 章" author="Coding Club">
            <Page size="A4" style={pdfStyles.cjkPage}>
                <WorksheetHeader
                    title={title}
                    subtitle="先预测，再运行代码。"
                    lessonNumber={3}
                    activityLabel="课堂检查"
                    language="cn"
                />
                <TaskCard number="1" title="预测条件结果">
                    <Text style={pdfStyles.taskBody}>不运行代码，先判断变量中会保存什么值。</Text>
                    <CodeBlock
                        code={
                            'score = 7\n\nif score >= 10:\n    result = "Gold"\nelif score >= 5:\n    result = "Silver"\nelse:\n    result = "Try again"'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>结果：____________________</Text>
                    <Text style={compactWorksheetStyles.prompt}>为什么使用这个分支？</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="2" title="补全分支">
                    <Text style={compactWorksheetStyles.taskBody}>
                        年龄小于 8 岁是 Beginner，小于 13 岁是 Explorer，其他是 Advanced。
                    </Text>
                    <CodeBlock
                        code={
                            'age = int(input("Age: "))\n\nif ____________________:\n    print("Beginner")\nelif ____________________:\n    print("Explorer")\nelse:\n    print("Advanced")'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>测试 6、10、14，分别会输出什么？</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <Footer page={1} />
            </Page>
            <Page size="A4" style={pdfStyles.cjkPage}>
                <TaskCard number="3" title="跟踪并修复循环">
                    <Text style={compactWorksheetStyles.taskBody}>for 循环会打印几行？然后补上缺少的更新语句。</Text>
                    <CodeBlock
                        code={
                            'for round_number in range(1, 4):\n    print("Round", round_number)\n\ncount = 1\nwhile count <= 3:\n    print(count)\n    ____________________'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>for 循环行数：__________</Text>
                    <Text style={compactWorksheetStyles.prompt}>缺少的代码：__________________________________________</Text>
                </TaskCard>
                <TaskCard number="4" title="制作挑战程序">
                    <Text style={compactWorksheetStyles.taskBody}>使用起始代码加入条件和循环，也可以修改文字和值。</Text>
                    <CodeBlock
                        code={
                            'name = input("Name: ")\ntarget = int(input("Target: "))\n\nif target >= 8:\n    level = "advanced"\nelif target >= 4:\n    level = "explorer"\nelse:\n    level = "beginner"\n\nfor round_number in range(1, 4):\n    print("Round", round_number)\n\nattempts = 0\nanswer = 0\nwhile answer != target and attempts < 3:\n    answer = int(input("Guess: "))\n    attempts = attempts + 1'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>加入最后的 if/else 结果，然后在下面写出完整代码。</Text>
                    <CodeLines style={{ ...pdfStyles.answerArea, minHeight: 120 }} length={10} />
                </TaskCard>
                <Footer page={2} />
            </Page>
        </Document>
    );
}
