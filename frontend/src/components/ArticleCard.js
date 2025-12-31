import { useState } from "react";

function ArticleCard({ article }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card">
      <h2>{article.title}</h2>

      {/* Original Article */}
      <div className="section">
        <h4>Original Article</h4>
        <p className="text">
          {expanded
            ? article.originalContent
            : article.originalContent?.slice(0, 400) + "..."}
        </p>
      </div>

      {/* Updated Article */}
      {article.isUpdated && article.updatedContent && (
        <div className="section">
          <h4>Updated Article</h4>
          <p className="text">
            {expanded
              ? article.updatedContent
              : article.updatedContent.slice(0, 400) + "..."}
          </p>
        </div>
      )}

      {/* Button */}
      <button className="read-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show less" : "Read more"}
      </button>

      {/* References */}
      {expanded && article.references?.length > 0 && (
        <div className="section">
          <h4>References</h4>
          <ul>
            {article.references.map((ref, i) => (
              <li key={i}>
                <a href={ref} target="_blank" rel="noreferrer">
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
