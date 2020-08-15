import React from "react";

export const Navigate = ({ articleId, setArticleId }) => {
    return (
        <div className="navigate">
            <button
                className="button"
                onClick={() => (articleId === 0 ? setArticleId(0) : setArticleId(articleId - 1))}
            >
                prev
            </button>
            <button className="button" onClick={() => setArticleId(articleId + 1)}>
                next
            </button>
        </div>
    );
};
