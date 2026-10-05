import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

const goals = [
    ["01", "Run", "Run a Python file and distinguish the editor from the output."],
    ["02", "Display", "Use print() to display text, numbers, and variables."],
    ["03", "Understand", "Understand common SyntaxError and NameError messages."],
    ["04", "Naming", "Create variables and check that their names are legal and clear."],
] as const;

type Goal = (typeof goals)[number];

function GoalCards({ items }: { items: readonly Goal[] }) {
    return (
        <div className="goal-grid">
            {items.map(([number, title, text]) => (
                <div className="goal" key={number}>
                    <span>{number}</span> <strong>{title}</strong>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    );
}

export default function Slide03() {
    return (
        <section>
            <Slide>
                <Kicker>LEARNING TARGETS</Kicker>
                <h2>
                    By the end of the lesson, <br />
                    you can:
                </h2>
                <aside className="notes">(Action: Key ↓ to show the details)</aside>
            </Slide>
            <Slide>
                <Kicker>LEARNING TARGETS</Kicker>
                <h2>Run and display</h2>
                <GoalCards items={goals.slice(0, 2)} />
            </Slide>
            <Slide>
                <Kicker>LEARNING TARGETS</Kicker>
                <h2>Understand and name</h2>
                <GoalCards items={goals.slice(2)} />
            </Slide>
            <Slide>
                <Kicker>LEARNING TARGETS</Kicker>
                <h2>Remember these four moves</h2>
                <div className="timeline">
                    {goals.map(([number, title]) => (
                        <div key={number}>
                            <b>{number}</b> <span>{title}</span>
                        </div>
                    ))}
                </div>
                <p className="tip">Start with one line of code and finish a personal welcome card you can share.</p>
            </Slide>
        </section>
    );
}
