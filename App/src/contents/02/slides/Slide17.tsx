import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";
import { Stack } from "@revealjs/react";

export default function Slide17() {
    return (
        <Stack>
            <Slide>
                <Kicker>EXIT TICKET · 4 MIN</Kicker>
                <h2>Check your understanding independently.</h2>
                <div className="exit-grid">
                    <div>
                        <b>01</b>
                        <p>
                            What type does <code>input()</code> return?
                        </p>
                    </div>
                    <div>
                        <b>02</b>
                        <p>Ask user to input age then store it.</p>
                    </div>
                </div>
            </Slide>
            <Slide>
                <Kicker>EXIT TICKET · 4 MIN</Kicker>
                <h2>Check your understanding independently.</h2>
                <div className="exit-grid">
                    <div>
                        <b>03</b>
                        <p>
                            Read <code>city</code> from <code>person</code>.
                        </p>
                    </div>
                    <div>
                        <b>04</b>
                        <p>
                            What does <code>items[0]</code> mean?
                        </p>
                    </div>
                </div>
            </Slide>
        </Stack>
    );
}
