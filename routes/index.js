module.exports = app => {
  require('./webAppRoutes.js')(app)
  require('./stickerRoutes.js')(app)
}