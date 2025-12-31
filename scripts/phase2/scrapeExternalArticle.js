const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeExternalArticle(url) {
  const res = await axios.get(url, {
    timeout: 15000,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120",
    },
  });

  const $ = cheerio.load(res.data);

  let content = "";

  if ($("article").length) {
    content = $("article").text();
  } else {
    content = $("p").text();
  }

  return content.replace(/\s+/g, " ").trim();
}

module.exports = scrapeExternalArticle;
