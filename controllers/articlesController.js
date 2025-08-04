import strapiService from '../services/strapiService.js';

export async function getArticles(req, res) {
  try {
    const articles = await strapiService.fetchArticles();
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching featured articles:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function findArticle(req, res) {
    try {
      const { id } = req.params;
      
      if (!id) {
        return res.status(400).json({
          success: false,
          message: 'Article ID is required'
        });
      }
  
      const article = await strapiService.findArticle(id);
      
      if (!article) {
        return res.status(404).json({
          success: false,
          message: 'Article not found'
        });
      }
  
      res.status(200).json({
        success: true,
        data: article
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }