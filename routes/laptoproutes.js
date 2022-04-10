const express=require('express');
const { body } = require('express-validator');

const laptopController = require('../controllers/laptopcontroller');

const router = express.Router();


router.get('/laptops',laptopController.getLaptops);  


router.post(
  '/laptop',
  [
    body('name').trim().isLength({ min: 3 }),
    body('brand').trim().isLength({ min: 3 }),
    body('price').exists().isFloat({min:0})
  ],
  laptopController.createLaptop
); 

router.get('/laptop/:laptopId', laptopController.getLaptopById); 

 
router.put('/laptop/:laptopId', [
    body('name').trim().isLength({ min: 3 }),
    body('brand').trim().isLength({ min: 3 }),
    body('price').exists().isFloat({min:0})
  ], laptopController.updateLaptop);


router.delete('/laptop/:laptopId', laptopController.deleteLaptop);


module.exports = router;