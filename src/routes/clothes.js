'use strict';
const express = require('express');
const DataMngr = require('../models/dataMngr');
const ClothesModel = require('../models/clothes');
const dataMngr = new DataMngr(ClothesModel);
let router = express.Router();

router.post('/', createclothes);
router.get('/', readclothes);
router.get('/:id', readSpecificclothes);
router.put('/:id', updateclothes);
router.delete('/:id', deletclothes);

//functions
async function createclothes(req, res, next) {
  try {
    let clothesObject = req.body;
    console.log(req.body);
    let resObject = await dataMngr.create(clothesObject);
    res.status(201).json(resObject);
  } catch (error) {
    next(error);
  }
}
async function readclothes(req, res, next) {
  try {
    const resObject = await dataMngr.read();
    res.json(resObject);
  } catch (error) {
    next(error);
  }
}
async function readSpecificclothes(req, res, next) {
  try {
    let id = req.params.id;
    let resObject = await dataMngr.read(id);
    res.json(resObject);
  } catch (error) {
    next(error);
  }
}
async function updateclothes(req, res, next) {
  try {
    let clothesObj = req.body;
    let id = req.params.id;
    let resObject = await dataMngr.update(id, clothesObj);
    res.json(resObject);
  } catch (error) {
    next(error);
  }
}
async function deletclothes(req, res, next) {
  try {
    let id = req.params.id;
    let resObject = await dataMngr.delete(id);
    res.json(resObject);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
