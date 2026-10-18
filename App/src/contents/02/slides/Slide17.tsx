import InlineCode from "@/components/slides/InlineCode";
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
                            What type does <InlineCode>input()</InlineCode> return?
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
                            Read <InlineCode>city</InlineCode> from <InlineCode>person</InlineCode>.
                        </p>
                    </div>
                    <div>
                        <b>04</b>
                        <p>
                            What does <InlineCode>items[0]</InlineCode> mean?
                        </p>
                    </div>
                </div>
            </Slide>
        </Stack>
    );
}
