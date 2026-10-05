import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";
import { Stack } from "@revealjs/react";

export default function Slide22() {
    return (
        <Stack>
            <Slide className="exit-slide">
                <Kicker>EXIT TICKET · 4 MIN</Kicker>
                <h2>Before you leave, complete 3 questions independently</h2>
                <div className="exit-grid">
                    <div>
                        <span>01</span> <b>Predict the output</b>
                        <br />
                        <br />
                        <code>
                            city = "Suzhou"
                            <br />
                            print(city)
                            <br />
                            print("city")
                        </code>
                    </div>
                </div>
                <aside className="notes">
                    Complete independently. Q1: Suzhou / city; Q2: my_name / score2; Q3 example: food = "noodles" and
                    print(food).
                </aside>
            </Slide>
            <Slide className="exit-slide">
                <Kicker>EXIT TICKET · 4 MIN</Kicker>
                <h2>Before you leave, complete 3 questions independently</h2>
                <div className="exit-grid">
                    <div>
                        <span>02</span> <b>Choose legal variable names</b>
                        <br />
                        <br />
                        <code>
                            □ my_name
                            <br />
                            □ 3dogs
                            <br />
                            □ favorite-color
                            <br />□ score2
                        </code>
                    </div>
                </div>
                <aside className="notes">
                    Complete independently. Q1: Suzhou / city; Q2: my_name / score2; Q3 example: food = "noodles" and
                    print(food).
                </aside>
            </Slide>
            <Slide className="exit-slide">
                <Kicker>EXIT TICKET · 4 MIN</Kicker>
                <h2>Before you leave, complete 3 questions independently</h2>
                <div className="exit-grid">
                    <div>
                        <span>03</span> <b>Write one line of code</b>
                        <br />
                        <br />
                        <code>
                            food = "noodles"
                            <br />
                            print(food)
                        </code>
                    </div>
                </div>
                <aside className="notes">
                    Complete independently. Q1: Suzhou / city; Q2: my_name / score2; Q3 example: food = "noodles" and
                    print(food).
                </aside>
            </Slide>
        </Stack>
    );
}
