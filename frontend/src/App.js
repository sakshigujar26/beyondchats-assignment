import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./components/ArticleCard";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    axios
      .get("/api/articles")
      .then(res => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch(() => {
        setApiError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading articles...</h2>;
  }

  if (apiError) {
    return (
      <div className="container">
        <h1>BeyondChats Blog Articles</h1>
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          Backend API is not deployed.
          <br />
          Please run the backend locally to view articles.
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>BeyondChats Blog Articles</h1>

      {articles.length === 0 && <p>No articles found.</p>}

      {articles.map(article => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </div>
  );
}

export default App;
