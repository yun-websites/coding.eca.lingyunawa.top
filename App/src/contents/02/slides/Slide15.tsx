import CodeBlock from "@/components/slides/CodeBlock";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide15() {
    return (
        <Slide>
            <Kicker>STARTER CODE</Kicker>
            <h2>Make the minimum version run first.</h2>
            <CodeBlock>
                {
                    'name = input("Name: ")\nage = int(input("Age: "))\nheight = float(input("Height in metres: "))\ncity = input("City: ")\n\nhobbies = ["coding", "music"]\nhobbies.append("drawing")\nprofile = {"name": name, "city": city, "age": age}\nlocation = (31.2, 120.6)'
                }
            </CodeBlock>
        </Slide>
    );
}
