import { Document, Page, Text, View } from "@react-pdf/renderer";
import { AnswerLines } from "@/components/worksheets/AnswerLines";
import { CodeLines } from "@/components/worksheets/CodeLines";
import { Footer as WsFooter } from "@/components/worksheets/Footer";
import { TaskCard } from "@/components/worksheets/TaskCard";
import { VariableMap } from "@/components/worksheets/VariableMap";
import { pdfStyles } from "@/lib/config";
import { WorksheetHeader } from "@/components/worksheets/WorksheetHeader";

function Footer({ page }: { page: number }) {
    return (
        <WsFooter
            worksheetSummary="第 01 章 · print()、字符串和变量"
            worksheetTitle="Python 欢迎卡 Worksheet"
            currentPage={page}
            totalPage={2}
        />
    );
}

export function WelcomeCardDocument() {
    return (
        <Document title="Python 欢迎卡 Worksheet - 第 01 章" author="Coding Club">
            <Page size="A4" style={pdfStyles.cjkPage}>
                <WorksheetHeader title="Python 欢迎卡 Worksheet" subtitle="" lessonNumber={1} />
                <View style={{ ...pdfStyles.section, marginBottom: -4 }}>
                    <Text style={pdfStyles.sectionTitle}>按顺序完成任务</Text>
                    <Text style={pdfStyles.sectionIntro}>测试代码前先写下答案。打印后请使用清晰易读的字迹。</Text>
                </View>
                <TaskCard number="1" title="修复错误">
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>为每一行代码写出正确版本。</Text>
                    <View>
                        <Text style={pdfStyles.code}>print(Hello)</Text>
                        <Text style={pdfStyles.prompt}>引号中应该写什么？</Text>
                        <AnswerLines count={1} short />
                    </View>
                    <View>
                        <Text style={pdfStyles.code}>{'print("My first program)'}</Text>
                        <Text style={pdfStyles.prompt}>缺少什么标点符号？</Text>
                        <AnswerLines count={1} short />
                    </View>
                </TaskCard>
                <TaskCard number="2" title="规划变量">
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>
                        选择至少两项关于自己的信息。变量名不能包含空格、连字符，也不能以数字开头。
                    </Text>
                    <VariableMap variableRows={2} labels={{ variableName: "变量名", value: "值", stores: "保存的内容" }} />
                </TaskCard>
                <TaskCard number="3" title="规划程序">
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>· 创建至少两个关于自己的变量。</Text>
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>· 至少使用三次 print()。</Text>
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>
                        · 加入一条欢迎信息，并打印至少一个变量的值。
                    </Text>
                    <Text style={pdfStyles.prompt}>你的程序会打印什么欢迎信息？</Text>
                    <AnswerLines count={1} short />
                    <AnswerLines count={1} short />
                    <AnswerLines count={1} short />
                    <AnswerLines count={1} short />
                </TaskCard>
                <Footer page={1} />
            </Page>
            <Page size="A4" style={pdfStyles.cjkPage}>
                <TaskCard number="4" title="写出 Python 程序">
                    <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>
                        写出程序的最终版本。记住：变量保存值，print() 显示值。
                    </Text>
                    <CodeLines style={pdfStyles.answerArea} length={10} />
                </TaskCard>
                <View style={pdfStyles.columns}>
                    <View style={pdfStyles.column}>
                        <TaskCard number="5" title="预测输出">
                            <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>运行代码前，</Text>
                            <Text style={{ ...pdfStyles.taskBody, marginBottom: -12 }}>
                                准确写下你预计 Python 会显示的内容。
                            </Text>
                            <View style={pdfStyles.outputArea}>
                                {Array.from({ length: 6 }, (_, index) => (
                                    <View key={index} style={pdfStyles.outputLine} />
                                ))}
                            </View>
                        </TaskCard>
                    </View>
                    <View style={pdfStyles.column}>
                        <TaskCard number="6" title="解释区别">
                            <Text style={pdfStyles.code}>{'print(city)\nprint("city")'}</Text>
                            <Text style={pdfStyles.prompt}>为什么这两行可能显示不同结果？</Text>
                            <AnswerLines count={5} short />
                        </TaskCard>
                    </View>
                </View>
                <View style={{ ...pdfStyles.section, marginTop: 12 }}>
                    <Text style={pdfStyles.sectionTitle}>最终自检</Text>
                    <View style={pdfStyles.checkGrid}>
                        {[
                            "我的变量名合法且有意义。",
                            "每个字符串都使用了成对的英文引号。",
                            "我在运行程序前预测了输出。",
                            "我的最终代码运行时没有错误。",
                        ].map((item) => (
                            <Text style={pdfStyles.check} key={item}>
                                <Text style={pdfStyles.checkbox}>[ ] </Text>
                                {item}
                            </Text>
                        ))}
                    </View>
                </View>
                <Footer page={2} />
            </Page>
        </Document>
    );
}
