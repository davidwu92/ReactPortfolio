const { Sticker } = require('../models')

module.exports = app => {
  
  // GET all stickers
  app.get('/stickers', (req, res) => {
    stickers.find({})
      .then((data)=>{res.json(data)})
      .catch(e=>console.error(e))
  })
}