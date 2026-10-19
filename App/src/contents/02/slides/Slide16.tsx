import InlineCode from "@/components/slides/InlineCode";
import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";
import { Stack } from "@revealjs/react";

export default function Slide16() {
    return (
        <Stack>
            <Slide>
                <Kicker>PROJECT CHECKLIST (1/2)</Kicker>
                <h2>
                    Does your dashboard <br /> use every tool?
                </h2>
                <p>
                    □ Two <InlineCode>input()</InlineCode> values
                </p>
                <p>
                    □ <InlineCode>int()</InlineCode> and <InlineCode>float()</InlineCode>
                </p>
                <p>
                    □ <InlineCode>str</InlineCode>, <InlineCode>int</InlineCode>, <InlineCode>float</InlineCode>
                </p>
                <p>
                    □ <InlineCode>list</InlineCode> & <InlineCode>.append()</InlineCode>
                </p>
            </Slide>
            <Slide>
                <Kicker>PROJECT CHECKLIST (2/2)</Kicker>
                <h2>Does your dashboard use every tool?</h2>
                <p>
                    □ <InlineCode>dict</InlineCode> plus a key lookup
                </p>
                <p>
                    □ <InlineCode>tuple</InlineCode> with two values
                </p>
                <p>□ One number calculation</p>
                <p>□ Four clear output lines</p>
            </Slide>
        </Stack>
    );
}
