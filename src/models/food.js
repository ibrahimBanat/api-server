'use strict';
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: String },
});
const FoodModel = mongoose.model('Food', foodSchema);

module.exports = FoodModel;
