import strapiService from "../services/strapiService.js";

export async function getImages(req, res) {
    try {
      const images = await strapiService.fetchImage();
      res.status(200).json(images);
    } catch (error) {
      console.error('Error fetching featured images:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  export async function findImage(req, res) {
    try {
      const { id } = req.params;
      
      if (!id) {
        return res.status(400).json({
          success: false,
          message: 'Image ID is required'
        });
      }
  
      const image = await strapiService.findImage(id);
      
      if (!image) {
        return res.status(404).json({
          success: false,
          message: 'Image not found'
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