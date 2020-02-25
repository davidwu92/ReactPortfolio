const { model, Schema } = require('mongoose')

const WebApp = require('./WebApp.js')(model, Schema)
const Sticker = require('./Sticker.js')(model, Schema)

module.exports = {WebApp, Sticker}