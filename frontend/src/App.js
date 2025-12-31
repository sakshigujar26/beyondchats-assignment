import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "./components/ArticleCard";
import "./App.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/articles")
      .then(res => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading articles...</h2>;
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
