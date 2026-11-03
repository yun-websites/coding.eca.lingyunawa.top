import { Document, Page, Text } from "@react-pdf/renderer";
import { AnswerLines } from "@/components/worksheets/AnswerLines";
import { CodeBlock } from "@/components/worksheets/CodeBlock";
import { CodeLines } from "@/components/worksheets/CodeLines";
import { Footer as WsFooter } from "@/components/worksheets/Footer";
import { TaskCard } from "@/components/worksheets/TaskCard";
import { WorksheetHeader } from "@/components/worksheets/WorksheetHeader";
import { pdfStyles } from "@/lib/config";

const title = "Python 函数 Worksheet";
const summary = "第 04 章 · 定义、调用和复用函数";
const compactWorksheetStyles = {
    taskBody: { ...pdfStyles.taskBody, lineHeight: 1.2 },
    prompt: { ...pdfStyles.prompt, fontSize: 8, lineHeight: 1.2, marginTop: 4 },
};

function Footer({ page }: { page: number }) {
    return <WsFooter worksheetSummary={summary} worksheetTitle={title} currentPage={page} totalPage={2} />;
}

export function FunctionsDocument() {
    return (
        <Document title="函数课堂检查 - 第 04 章" author="Coding Club">
            <Page size="A4" style={pdfStyles.cjkPage}>
                <WorksheetHeader title={title} subtitle="先预测，再运行代码。" lessonNumber={4} activityLabel="课堂检查" />
                <TaskCard number="1" title="预测函数调用">
                    <Text style={pdfStyles.taskBody}>不运行代码，先判断会输出几行。</Text>
                    <CodeBlock
                        code={
                            'def show_message():\n    print("Start")\n    print("Keep coding")\n\nshow_message()\nshow_message()'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>输出行数：__________</Text>
                    <Text style={compactWorksheetStyles.prompt}>为什么信息会出现两次？</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="2" title="补上函数调用">
                    <Text style={compactWorksheetStyles.taskBody}>函数已经定义，但程序没有显示内容。补上缺少的调用代码。</Text>
                    <CodeBlock
                        code={'def show_rule():\n    print("Test your code before you submit it.")\n\n____________________'}
                    />
                    <Text style={compactWorksheetStyles.prompt}>定义函数和调用函数分别做什么？</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <Footer page={1} />
            </Page>
            <Page size="A4" style={pdfStyles.cjkPage}>
                <TaskCard number="3" title="使用参数并返回结果">
                    <Text style={compactWorksheetStyles.taskBody}>补全两个函数，然后预测最后的输出。</Text>
                    <CodeBlock
                        code={
                            'def greet(name):\n    print("Hello,", ____________________)\n\ndef add_bonus(score):\n    return ____________________\n\ngreet("Mina")\nfinal_score = add_bonus(7)\nprint(final_score)'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>哪个是参数？`return` 把什么交回给程序？</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="4" title="制作函数挑战程序">
                    <Text style={compactWorksheetStyles.taskBody}>使用起始函数，也可以修改文字和值，制作自己的挑战程序。</Text>
                    <CodeBlock
                        code={
                            'def show_welcome(name):\n    print("Welcome,", name)\n\ndef get_level(score):\n    if score >= 8:\n        return "advanced"\n    elif score >= 4:\n        return "explorer"\n    else:\n        return "beginner"\n\ndef calculate_total(score, bonus):\n    return score + bonus'
                        }
                    />
                    <Text style={compactWorksheetStyles.prompt}>
                        增加一个包含循环的函数，调用所有函数，然后在下面写出完整代码。
                    </Text>
                    <CodeLines style={{ ...pdfStyles.answerArea, minHeight: 120 }} length={10} />
                </TaskCard>
                <Footer page={2} />
            </Page>
        </Document>
    );
}
