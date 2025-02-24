import React from "react";

const WritingTask = (props) => {
    return (
        <article>
            <div className="question-block">
                <p><pre className="formatted-text">{props.question}</pre></p>
            </div>
            <textarea
                placeholder="Start typing here..."
                value={props.text}
                onChange={props.handleChange}
                disabled={props.timeLeft === 0}
            ></textarea>

            <div className="info-container">
                <p>Words: <span>{props.wordCount}</span></p>
                <p>Time Left: <span className={`timer ${props.timeLeft <= 10 ? "warning" : ""}`}>{props.timeLeft}m</span></p>
            </div>
            {props.timeLeft === 0 && <p className="times-up">Time's up! You wrote {props.wordCount} words.</p>}
        </article>
    );
};

export default WritingTask;