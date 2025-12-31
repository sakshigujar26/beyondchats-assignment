const axios = require("axios");

async function rewriteWithLLM(original, ref1, ref2) {
  const prompt = `
Rewrite the following article with better structure, clarity, and SEO.
Use the references only for style inspiration.
Do NOT copy text verbatim.

ORIGINAL:
${original}

REFERENCE 1:
${ref1}

REFERENCE 2:
${ref2}
`;

  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return res.data.choices[0].message.content;
}

module.exports = rewriteWithLLM;
