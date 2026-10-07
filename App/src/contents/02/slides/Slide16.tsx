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
                    □ Two <code>input()</code> values
                </p>
                <p>
                    □ <code>int()</code> and <code>float()</code>
                </p>
                <p>
                    □ <code>str</code>, <code>int</code>, <code>float</code>
                </p>
                <p>
                    □ <code>list</code> & <code>.append()</code>
                </p>
            </Slide>
            <Slide>
                <Kicker>PROJECT CHECKLIST (2/2)</Kicker>
                <h2>Does your dashboard use every tool?</h2>
                <p>
                    □ <code>dict</code> plus a key lookup
                </p>
                <p>
                    □ <code>tuple</code> with two values
                </p>
                <p>□ One number calculation</p>
                <p>□ Four clear output lines</p>
            </Slide>
        </Stack>
    );
}

