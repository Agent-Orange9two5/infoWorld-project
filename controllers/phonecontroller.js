const Phone = require('../models/phonemodel.js');
const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

const createPhone = async (req,res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }
    const createdPhone = new Phone({

        name: req.body.name,
        brand: req.body.brand,
        description: req.body.description,
        price: req.body.price,
        color: req.body.color,
        technology: req.body.technology

    });
    const result = await createdPhone.save();

    res.json(result); 
};

const getPhones = async (req,res,next) => {
    const name = req.query.name;
    const brand = req.query.brand;
    const price = req.query.price;
    const minprice = req.query.minprice;
    const maxprice = req.query.maxprice;
    const color = req.query.color;

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
    if(color){
        query = {...query, color}; 
    }


    const phones = await Phone.find(query).exec(); 

    res.json(phones); 
}


const getPhoneById = async (req,res,next) => {
    
    const phoneId = req.params.phoneId;  
    let phone;

   try{
     phone = await Phone.findById(phoneId);  
   } catch (err) {
    const error = new HttpError(
      'Something went wrong. Try again.',
      500
    );
    return next(error);
  }
  if (!phone) {
    const error = new HttpError(
      'Could not find phone for the provided ID.',
      404
    );
    return next(error);
  }

   res.json(phone); 

    
}

const deletePhone= async (req, res, next) => {
    const phoneId = req.params.phoneId;
  
    let phone;
    try {
      phone = await Phone.findById(phoneId);
    } catch (err) {
      const error = new HttpError(
        'Something went wrong. Try again.',
        500
      );
      return next(error);
    }
  
    try {
      await phone.remove();
    } catch (err) {
      const error = new HttpError(
        'Something went wrong. Could not delete phone.',
        500
      );
      return next(error);
    }
  
    res.json( {message: 'Deleted phone.' });
  };


  const updatePhone = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new HttpError('Invalid inputs passed, please check your data.', 422);
    }
  
    const name = req.body.name;
    const brand = req.body.brand;
    const description = req.body.description;    
    const price = req.body.price;
    const color = req.body.color;
    const technology = req.body.technology;

    const phoneId = req.params.phoneId;
  
    let phone;
    try {
      phone = await Phone.findById(phoneId);
    } catch (err) {
      const error = new HttpError(
        'Something went wrong. Could not update phone.',
        500
      );
      return next(error);
    }
  
    phone.name = name;
    phone.brand = brand; 
    phone.description = description; 
    phone.price = price;
    phone.color = color;
    phone.technology = technology;
  
    try {
      await phone.save();
    } catch (err) {
      const error = new HttpError(
        'Something went wrong. Could not update phone.',
        500
      );
      return next(error);
    }
  
    res.json(phone); 
  };


exports.createPhone = createPhone;
exports.getPhones = getPhones;
exports.getPhoneById = getPhoneById;
exports.deletePhone = deletePhone;
exports.updatePhone = updatePhone;
