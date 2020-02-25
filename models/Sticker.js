module.exports = (model, Schema) =>{
  const Sticker = new Schema({
    animal: String,
    positionX: Number,
    positionY: Number,
  })

  return model('Sticker', Sticker)
}