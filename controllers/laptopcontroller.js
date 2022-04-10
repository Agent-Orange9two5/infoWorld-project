const Laptop = require('../models/laptopmodel.js');
const HttpError = require('../models/http-error.js');
const { validationResult } = require('express-validator');

const createLaptop = async (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }
    const createdLaptop = new Laptop({

        name: req.body.name,
        brand: req.body.brand,
        description: req.body.description,
        price: req.body.price,
        specification: req.body.specification

    });
    const result = await createdLaptop.save();
    
    res.json(result); 
};
// name, brand, price, minprice, maxprice


const getLaptops = async (req,res,next) => {
    
    const name = req.query.name;
    const brand = req.query.brand;
    const price = req.query.price;
    const minprice = req.query.minprice;
    const maxprice = req.query.maxprice;

    let query={};

    if(name){
        query = {...query, name}; 
    }
    if(brand){
        query = {...query, brand}; 
    }
    if(price){
        query = {...query, price}; 
    }
    if(minprice){
        query = {...query, price: {$gte:minprice} }; 
    }
    if(maxprice){
        query = {...query, price: {$lte:maxprice} }; 
    }

   // console.log(query);
    
    const laptops = await Laptop.find(query).exec();  
    res.json(laptops); 
}


const getLaptopById = async (req,res,next) => {
    
    const laptopId = req.params.laptopId;  
    let laptop;

   try{
     laptop = await Laptop.findById(laptopId);  
   } catch (err) {
    const error = new HttpError(
      'Something went wrong. Try again.',
      500
    );
    return next(error);
  }
  if (!laptop) {
    const error = new HttpError(
      'Could not find laptop for the provided ID.',
      404
    );
    return next(error);
  }

   res.json(laptop); 

    
}

const deleteLaptop= async (req, res, next) => {
    const laptopId = req.params.laptopId;
  
    let laptop;
    try {
      laptop = await Laptop.findById(laptopId);
    } catch (err) {
      const error = new HttpError(
        'Something went wrong. Try again.',
        500
      );
      return next(error);
    }
  
    try {
      await laptop.remove();
    } catch (err) {
      const error = new HttpError(
        'Something went wrong. Could not delete laptop.',
        500
      );
      return next(error);
    }
  
    res.json( {message: 'Deleted laptop.' });
  };


  const updateLaptop = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpError('Invalid inputs passed, please check your data.', 422);
    }
  
    const name = req.body.name;
    const brand = req.body.brand;
    const description = req.body.description;    
    const price = req.body.price;
    const specification = req.body.specification;


    const laptopId = req.params.laptopId;
  
    let laptop;
    try {
      laptop = await Laptop.findById(laptopId);
    } catch (err) {
      const error = new HttpError(
        'Something went wrong. Could not update laptop.',
        500
      );
      return next(error);
    }
  
    laptop.name = name;
    laptop.brand = brand; 
    laptop.description = description; 
    laptop.price = price;
    laptop.specification = specification;

  
    try {
      await laptop.save();
    } catch (err) {
      const error = new HttpError(
        'Something went wrong. Could not update laptop.',
        500
      );
      return next(error);
    }
  
    res.json(laptop); 
  };


exports.createLaptop = createLaptop;
exports.getLaptops = getLaptops;
exports.getLaptopById = getLaptopById;
exports.deleteLaptop = deleteLaptop;
exports.updateLaptop = updateLaptop;