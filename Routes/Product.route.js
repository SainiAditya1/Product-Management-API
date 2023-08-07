const express = require('express');
const router = express.Router();

const Product = require('../Models/Product.model')

router.get('/',async(req,res,next) => {
    // next(new Error("cannot get a list of all products"))
    // res.send('getting a list of all products..');
    try {
        const results = await Product.find({}, {__v: 0});
        // second curly brace is projection you can mention things as 1 which you want to get oterwise 0
        // const results = await Product.find({}, { name: 1,price: 1, _id: 0});
        // to get all products of 699
        // const results = await Product.find({price: 699},{});
        res.send(results)

    } catch (error) {
       console.log(errror.message); 

    }

});

// async and await method , This method is more cleaner then the promise method
router.post('/', async(req,res,next) => {

    try {
    const product = new Product(req.body);
    const result = await product.save()
    res.send(result)

    } catch (error) {
        console.log(error.message);
    }

  

    
    
    
    
    
    
    
    
    
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
});

router.get('/:id', async(req,res,next) =>{
    // res.send('getting a single product')
    const id = req.params.id
    // console.log(id);
    // res.send(id)
    try {
        // const product = await Product.findById(id)
        const product = await Product.findOne({_id: id });
        res.send(product)

    } catch (error) {
        console.log(error.message);
    }

});

router.patch('/:id', (req,res,next) =>{
    res.send('Updating a single product')
    
});

router.delete('/:id', (req,res,next) =>{
    res.send('deleting a single product')
    
});



module.exports = router;