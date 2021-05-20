'use strict';
const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String },
});
const ClothesModel = mongoose.model('clothes', clothesSchema);

module.exports = ClothesModel;
