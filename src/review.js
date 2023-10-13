import React, { useState } from 'react';

function CommentForm() {
    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!submitted) {
            // Handle the submission of the comment, e.g., send it to a server or store it locally.
            // Can Also Clear the form field after submission.
            setSubmitted(true);
            setComment('');
        }
    };

    return (
        <div className="comment-form">
            <h3>Who was your favorite player?</h3>
            {submitted ? (
                <div className="endText">
                <p>Thanks!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <textarea
                        placeholder="Type a player name..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <button className="sButton" type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default CommentForm;