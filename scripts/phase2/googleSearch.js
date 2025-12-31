require("dotenv").config();
const axios = require("axios");

const SERPER_API_KEY = process.env.SERPER_API_KEY;

async function searchGoogle(query) {
  if (!SERPER_API_KEY) {
    throw new Error("SERPER_API_KEY is missing in .env");
  }

  const res = await axios.post(
    "https://google.serper.dev/search",
    { q: query, num: 10 },
    {
      headers: {
        "X-API-KEY": SERPER_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data.organic
    .filter(r => r.link && !r.link.includes("beyondchats.com"))
    .slice(0, 2)
    .map(r => ({ title: r.title, link: r.link }));
}

module.exports = searchGoogle;
