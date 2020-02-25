const { Sticker } = require('../models')

module.exports = app => {
  // GET all stickers
  app.get('/stickerdata', (req, res) => {
    Sticker.find({})
      .then(data=> res.json(data))
      .catch(e=>console.error(e))
  })

  //POST one sticker
  app.post('/stickerdata', (req, res)=>{
    const {animal, positionX, positionY} = req.body
    Sticker.create({animal, positionX, positionY})
      .then(()=>res.sendStatus(200))
      .catch(e=>console.error(e))
  })
}