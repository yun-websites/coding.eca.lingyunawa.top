import Kicker from "../components/Kicker.jsx";
import Slide from "../components/Slide.jsx";

export default function Slide20() {
    return (
        <Slide className="extension-slide" backgroundColor="#e8e2d6">
            <Kicker dark>IF YOU FINISH EARLY</Kicker>
            <h2>Add your own design</h2>
            <ol className="extension-grid">
                {[
                    ["Add variables such as city and favorite_food."],
                    ["Use + to join strings and variables."],
                    ["Design clearer text borders and headings."],
                    ["Change name and predict which outputs will change."],
                ].map((item, index) => (
                    <li key={item}>
                        <span>{item[0]}</span>
                    </li>
                ))}
            </ol>
            <p className="warning">Extensions are for practice, not for typing answers for a classmate.</p>
        </Slide>
    );
}
