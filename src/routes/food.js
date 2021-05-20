'use strict';
const express = require('express');
const DataMngr = require('../models/dataMngr');
const FoodModel = require('../models/food');
const dataMngr = new DataMngr(FoodModel);
let router = express.Router();

router.post('/', createFood);
router.get('/', readFood);
router.get('/:id', readSpecificFood);
router.put('/:id', updateFood);
router.delete('/:id', deletFood);

//functions
async function createFood(req, res, next) {
  try {
    let foodObject = req.body;
    console.log(req.body);
    let resObject = await dataMngr.create(foodObject);
    res.status(201).json(resObject);
  } catch (error) {
    next(error);
  }
}
async function readFood(req, res, next) {
  try {
    const resObject = await dataMngr.read();
    res.json(resObject);
  } catch (error) {
    next(error);
  }
}
async function readSpecificFood(req, res, next) {
  try {
    let id = req.params.id;
    let resObject = await dataMngr.read(id);
    res.json(resObject);
  } catch (error) {
    next(error);
  }
}
async function updateFood(req, res, next) {
  try {
    let foodObj = req.body;
    let id = req.params.id;
    let resObject = await dataMngr.update(id, foodObj);
    res.json(resObject);
  } catch (error) {
    next(error);
  }
}
async function deletFood(req, res, next) {
  try {
    let id = req.params.id;
    let resObject = await dataMngr.delete(id);
    res.json(resObject);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
