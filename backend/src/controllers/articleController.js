const Article = require("../models/Article");

// CREATE
exports.createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL — LIMITED TO 5 ✅
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find()
      .sort({ createdAt: -1 })
      .limit(5); // ✅ ONLY FIVE ARTICLES

    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateArticle = async (req, res) => {
  try {
    const { updatedContent, references, isUpdated } = req.body;

    const article = await Article.findByIdAndUpdate(
      req.params.id,
      { updatedContent, references, isUpdated },
      { new: true }
    );

    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: "Article deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
