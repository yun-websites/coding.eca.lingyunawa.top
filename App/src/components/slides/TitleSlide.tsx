import Slide from "./Slide";

export default function TitleSlide({ closing = false }) {
    return (
        <Slide className={`title-slide${closing ? "closing-slide" : ""}`} backgroundColor="#10141f">
            <div className="eyebrow">{closing ? "LESSON 01 COMPLETE" : "ECA CODING CLUB · LESSON 01"}</div>
            <h1>
                Python
                <br />
                <span>Speaks</span>
            </h1>
            <p className="subtitle">{closing ? "Predict · Run · Check · Share" : "Output, Strings & Variables"}</p>
            <div className="title-meta">
                <span>{closing ? "KEEP BUILDING" : "60 MIN"}</span>
                <span>{closing ? "SEE YOU NEXT TIME" : "NO PRIOR EXPERIENCE"}</span>
            </div>
            {!closing && (
                <aside className="notes">
                    Welcome everyone. Today we will start with one line of code and learn how to make a computer display exactly
                    what we mean.
                </aside>
            )}
        </Slide>
    );
}
