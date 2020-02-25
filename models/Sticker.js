module.exports = (model, Schema) =>{
  const Sticker = new Schema({
    animal: String,
    clientX: Number,
    clientY: Number,
  })

  return model('Sticker', Sticker)
}