import { Document, Page, Text } from "@react-pdf/renderer";
import { AnswerLines } from "@/components/worksheets/AnswerLines";
import { CodeBlock } from "@/components/worksheets/CodeBlock";
import { CodeLines } from "@/components/worksheets/CodeLines";
import { Footer as WsFooter } from "@/components/worksheets/Footer";
import { TaskCard } from "@/components/worksheets/TaskCard";
import { WorksheetHeader } from "@/components/worksheets/WorksheetHeader";
import { pdfStyles } from "@/lib/config";

const title = "Python 模块与库 Worksheet";
const summary = "第 05 章 · 导入并调用 Python 工具";
const compact = {
    taskBody: { ...pdfStyles.taskBody, lineHeight: 1.2 },
    prompt: { ...pdfStyles.prompt, fontSize: 8, lineHeight: 1.2, marginTop: 4 },
};

function Footer({ page }: { page: number }) {
    return <WsFooter worksheetSummary={summary} worksheetTitle={title} currentPage={page} totalPage={2} />;
}

export function LibrariesDocument() {
    return (
        <Document title="模块与库课堂检查 - 第 05 章" author="Coding Club">
            <Page size="A4" style={pdfStyles.cjkPage}>
                <WorksheetHeader title={title} subtitle="先预测，再运行代码。" lessonNumber={5} activityLabel="课堂检查" />
                <TaskCard number="1" title="预测模块调用">
                    <Text style={pdfStyles.taskBody}>不运行代码，先判断输出并指出模块和函数。</Text>
                    <CodeBlock code={"import math\n\nnumber = math.sqrt(36)\nprint(number)"} />
                    <Text style={compact.prompt}>输出：__________　模块：__________　函数：__________</Text>
                    <Text style={compact.prompt}>`math` 和 `sqrt` 之间的点号有什么作用？</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="2" title="补上模块名前缀">
                    <Text style={compact.taskBody}>导入语句已经写好。补上缺少的模块名。</Text>
                    <CodeBlock code={"import random\n\nnumber = ____________________.randint(1, 6)\nprint(number)"} />
                    <Text style={compact.prompt}>运行两次，观察结果。</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <Footer page={1} />
            </Page>
            <Page size="A4" style={pdfStyles.cjkPage}>
                <TaskCard number="3" title="比较两种导入方式">
                    <Text style={compact.taskBody}>完成代码，并写出两种调用方式的区别。</Text>
                    <CodeBlock code={"from random import randint\n\nnumber = ____________________(1, 10)\nprint(number)"} />
                    <Text style={compact.prompt}>为什么这里不写 `random.randint()`？</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="4" title="制作随机挑战程序">
                    <Text style={compact.taskBody}>使用导入的随机工具和自己定义的函数，制作一个最多猜三次的挑战程序。</Text>
                    <CodeBlock
                        code={
                            'import random\n\ndef give_hint(guess, target):\n    if guess == target:\n        return "Correct!"\n    elif guess < target:\n        return "Too low."\n    return "Too high."\n\ntarget = random.randint(1, 10)'
                        }
                    />
                    <Text style={compact.prompt}>继续写出输入、循环、提示和最终结果。</Text>
                    <CodeLines style={{ ...pdfStyles.answerArea, minHeight: 112 }} length={9} />
                </TaskCard>
                <Footer page={2} />
            </Page>
        </Document>
    );
}
