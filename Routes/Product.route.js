const express = require('express');
const router = express.Router();


// const Product = require('../Models/Product.model');
const ProductController = require('../Controllers/Product.Controller');

router.get('/', ProductController.getAllProducts);

// async and await method , This method is more cleaner then the promise method
// create a new product
router.post('/', ProductController.createNewProduct); 
    // Promise method
    
    
    
    
    // router.post('/', (req,res,next) => {
    // console.log(req.body);
    // Promise method 
    // const product = new Product({
    //     name: req.body.name,
    //     price: req.body.price
    // });
    // product.save()
    //   .then(result => {
    //     console.log(result);
    //     res.send(result);

    //   })
    //   .catch(err => {
    //     console.log(err.message);

    //   })
    // res.send('product created');


// get a product by id
router.get('/:id',ProductController.findProductById);

// updating a product by id

router.patch('/:id',ProductController.updateAProduct );

// delete a product by id

router.delete('/:id',ProductController.deleteAProduct );



module.exports = router;


// 5.33