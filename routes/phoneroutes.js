const express=require('express');
const { body } = require('express-validator');

const phoneController = require('../controllers/phonecontroller');

const router = express.Router();


router.get('/phones',phoneController.getPhones);  


router.post(
  '/phone',
  [
    body('name').trim().isLength({ min: 3 }),
    body('brand').trim().isLength({ min: 3 }),
    body('price').exists().isFloat({min:0}),
    body('technology').exists().isAlphanumeric().isLength({ min: 2 }).isLength({ max: 2 })
  ],
  phoneController.createPhone
); 

router.get('/phone/:phoneId', phoneController.getPhoneById); 


 
router.put('/phone/:phoneId', [
    body('name').trim().isLength({ min: 3 }),
    body('brand').trim().isLength({ min: 3 }),
    body('price').exists().isFloat({min:0}),
    body('technology').exists().isAlphanumeric().isLength({ min: 2 }).isLength({ max: 2 })
  ], phoneController.updatePhone);


router.delete('/phone/:phoneId', phoneController.deletePhone);


module.exports = router;