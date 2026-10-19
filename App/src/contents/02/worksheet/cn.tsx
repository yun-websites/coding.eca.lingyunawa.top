import { Document, Page, Text } from "@react-pdf/renderer";
import { AnswerLines } from "@/components/worksheets/AnswerLines";
import { CodeLines } from "@/components/worksheets/CodeLines";
import { Footer as WsFooter } from "@/components/worksheets/Footer";
import { TaskCard } from "@/components/worksheets/TaskCard";
import { WorksheetHeader } from "@/components/worksheets/WorksheetHeader";
import { pdfStyles } from "@/lib/config";

const title = "变量工具箱课堂检查";
const summary = "第 02 章 · input()、类型和数据容器";

function Footer({ page }: { page: number }) {
    return <WsFooter worksheetSummary={summary} worksheetTitle={title} currentPage={page} totalPage={2} />;
}

export function VariableToolboxDocument() {
    return (
        <Document title="变量工具箱课堂检查 - 第 02 章" author="Coding Club">
            <Page size="A4" style={pdfStyles.cjkPage}>
                <WorksheetHeader title={title} subtitle="先预测，再运行代码。" lessonNumber={2} activityLabel="课堂检查" />
                <TaskCard number="1" title="写出数据类型">
                    <Text style={pdfStyles.taskBody}>为每个值写出最合适的类型。</Text>
                    <Text style={pdfStyles.code}>{'"blue"\n\n3.1\n["coding", "music"]\n{"name": "Mina"}\n(31.2, 120.6)'}</Text>
                    <Text style={pdfStyles.prompt}>写出这些类型：</Text>
                    <AnswerLines count={2} short />
                    <Text style={pdfStyles.prompt}>哪种类型适合可以增长的集合？为什么？</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <TaskCard number="2" title="修复输入代码">
                    <Text style={pdfStyles.taskBody}>让程序输出用户两年后的年龄。</Text>
                    <Text style={pdfStyles.code}>{'age = input("Age: ")\nprint(age + 2)'}</Text>
                    <Text style={pdfStyles.prompt}>正确代码：</Text>
                    <CodeLines style={pdfStyles.answerArea} length={4} />
                    <Text style={pdfStyles.prompt}>为什么需要 int()？</Text>
                    <AnswerLines count={2} short />
                    <Text style={{ ...pdfStyles.prompt, marginTop: 7 }}>输入 13 时，预计输出 __________</Text>
                </TaskCard>
                <Footer page={1} />
            </Page>
            <Page size="A4" style={pdfStyles.cjkPage}>
                <TaskCard number="3" title="迷你仪表板">
                    <Text style={pdfStyles.taskBody}>写出并运行一个小程序，可以使用下面的起始代码。</Text>
                    <Text style={pdfStyles.code}>
                        {
                            'name = input("Name: ")\nage = int(input("Age: "))\ncity = input("City: ")\nitems = ["coding", "music"]\nprofile = {"name": name, "city": city}\nlocation = (31.2, 120.6)'
                        }
                    </Text>
                    <Text style={{ ...pdfStyles.taskBody, marginTop: 7 }}>补充代码，完成以下事项：</Text>
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -9 }}>· 用 float() 处理一个测量值；</Text>
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -9 }}>· 使用 .append() 添加一个项目；</Text>
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -9 }}>· 从 profile 中读取一个值；</Text>
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -9 }}>· 输出下一年的年龄和至少两个其他结果。</Text>
                    <Text style={pdfStyles.prompt}>写出最终代码：</Text>
                    <CodeLines style={{ ...pdfStyles.answerArea, minHeight: 154 }} length={10} />
                </TaskCard>
                <TaskCard number="4" title="运行之后">
                    <Text style={pdfStyles.prompt}>为每种类型写出一个变量名和它保存的值。</Text>
                    {['"str"', '"int"', '"float"', '"list"', '"dict"', '"tuple"'].map((type) => (
                        <Text style={{ ...pdfStyles.taskBody, marginTop: -4 }} key={type}>
                            {type}: ____________________ = ____________________
                        </Text>
                    ))}
                    <Text style={pdfStyles.prompt}>关于我的程序，我能解释的一件事：</Text>
                    <AnswerLines count={2} short />
                </TaskCard>
                <Footer page={2} />
            </Page>
        </Document>
    );
}
