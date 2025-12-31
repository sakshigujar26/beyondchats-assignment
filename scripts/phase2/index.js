require("dotenv").config();
const axios = require("axios");
const searchGoogle = require("./googleSearch");
const scrapeExternalArticle = require("./scrapeExternalArticle");
const rewriteWithLLM = require("./rewriteWithLLM");

const API_BASE = "http://localhost:5000/api/articles";

async function getPendingArticles() {
  const res = await axios.get(API_BASE);
  return res.data.filter(a => !a.isUpdated);
}

async function processArticle(article) {
  console.log("Processing:", article.title);

  const results = await searchGoogle(article.title);
  if (results.length < 2) {
    console.log("Not enough references, skipping");
    return;
  }

  const ref1 = await scrapeExternalArticle(results[0].link);
  const ref2 = await scrapeExternalArticle(results[1].link);

  const updatedContent = await rewriteWithLLM(
    article.originalContent,
    ref1,
    ref2
  );

  await axios.put(`${API_BASE}/${article._id}`, {
    updatedContent,
    references: results.map(r => r.link),
    isUpdated: true,
  });

  console.log("Updated:", article.title);
}

async function run() {
  const articles = await getPendingArticles();
  console.log(`Found ${articles.length} articles to update`);

  for (const article of articles) {
    await processArticle(article);
  }

  console.log("Phase 2 completed");
}

run();
