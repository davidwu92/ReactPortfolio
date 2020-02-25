import axios from 'axios'

const StickerAPI  = {

  getStickers: () => axios.get('/stickerdata'),

  postSticker: (sticker)=> axios.post('/stickerdata', sticker)
}

export default StickerAPI