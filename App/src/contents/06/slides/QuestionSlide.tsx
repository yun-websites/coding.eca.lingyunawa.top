import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

interface QuestionSlideProps {
    number: number;
    title: string;
    code: string;
    output: string;
    explanation: string;
    rule: string;
}

export default function QuestionSlide({ number, title, code, output, explanation, rule }: QuestionSlideProps) {
    return (
        <Slide>
            <Kicker>LESSON 06 · QUESTION {String(number).padStart(2, "0")}</Kicker>
            <h2>{title}</h2>
            <CodeBlock>{code}</CodeBlock>
            <p className="mt-6 text-left text-[0.55em] font-semibold tracking-widest text-zinc-500">OUTPUT</p>
            <CodeBlock language="text">{output}</CodeBlock>
            <p className="mt-6 text-left text-[0.65em] leading-relaxed">{explanation}</p>
            <p className="mt-6 border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-left text-[0.58em] leading-relaxed text-zinc-800">
                {rule}
            </p>
        </Slide>
    );
}
