import Kicker from "@/components/slides/Kicker";
import Slide from "@/components/slides/Slide";

export default function Slide16() {
    return (
        <Slide>
            <Kicker>PROJECT CHECKLIST</Kicker>
            <h2>Does your dashboard use every tool?</h2>
            <div className="split">
                <div className="repair-rules">
                    <p>□ Two `input()` values</p>
                    <p>□ `int()` and `float()`</p>
                    <p>□ `str`, `int`, `float`</p>
                    <p>□ `list` plus `.append()`</p>
                </div>
                <div className="repair-rules">
                    <p>□ `dict` plus a key lookup</p>
                    <p>□ `tuple` with two values</p>
                    <p>□ One number calculation</p>
                    <p>□ Four clear output lines</p>
                </div>
            </div>
            <p className="tip">Run from the beginning with valid answers before you submit.</p>
        </Slide>
    );
}
