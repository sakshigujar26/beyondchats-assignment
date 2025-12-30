const axios = require("axios");
const cheerio = require("cheerio");
const Article = require("../models/Article");

const BASE_URL = "https://beyondchats.com";
const OLDEST_PAGE = 14; // verified last page

const scrapeBeyondChats = async () => {
  try {
    console.log("Starting BeyondChats scraping...");
    console.log(`Scraping oldest blogs from page ${OLDEST_PAGE}`);

    const pageUrl = `${BASE_URL}/blogs/page/${OLDEST_PAGE}/`;
    const pageRes = await axios.get(pageUrl);
    const $ = cheerio.load(pageRes.data);

    const articles = [];

    // WordPress standard selector (works on page 14)
    $("h2.entry-title a").each((_, el) => {
      if (articles.length >= 5) return;

      const title = $(el).text().trim();
      const url = $(el).attr("href");

      if (title && url) {
        articles.push({ title, url });
      }
    });

    console.log(`Found ${articles.length} articles`);

    for (const art of articles) {
      const exists = await Article.findOne({ sourceUrl: art.url });
      if (exists) {
        console.log("Already exists, skipping:", art.title);
        continue;
      }

      const articleRes = await axios.get(art.url);
      const $$ = cheerio.load(articleRes.data);

     let content = "";

if ($$(".entry-content").length) {
  content = $$(".entry-content").text();
} else if ($$(".post-content").length) {
  content = $$(".post-content").text();
} else {
  content = $$("article").text();
}

content = content.replace(/\s+/g, " ").trim();

if (!content) {
  console.log("No content found, skipping:", art.title);
  continue;
}


      await Article.create({
        title: art.title,
        originalContent: content,
        sourceUrl: art.url,
      });

      console.log("Saved:", art.title);
    }

    console.log("Scraping completed successfully");
  } catch (error) {
    console.error("Scraping error:", error.message);
  }
};

module.exports = scrapeBeyondChats;
