

const createError = require('http-errors');
const mongoose = require('mongoose');
const Product = require('../Models/Product.model');


module.exports = {
   getAllProducts : async(req,res,next) => {
    // next(new Error("cannot get a list of all products"))
    // res.send('getting a list of all products..');
    try {
        const results = await Product.find({}, {__v: 0});
        // second curly brace is projection you can mention things as 1 which you want to get oterwise 0
        // const results = await Product.find({}, { name: 1,price: 1, _id: 0});
        // to get all products of 699
        // const results = await Product.find({price: 699},{});
        res.send(results);

    } catch (error) {
       console.log(error.message); 

    }
  },
  findProductById: async(req,res,next) =>{
    // res.send('getting a single product')
    const id = req.params.id
    // console.log(id);
    // res.send(id)
    try {
        const product = await Product.findById(id);
        // Product.findById(id) is the best method as compare to Product.findOne
        // const product = await Product.findOne({_id: id });
        if (!product) {
            throw createError(404, 'Product does not exist.');
        }
        // console.log(product);
        res.send(product);

    } catch (error) {
        console.log(error.message);
        if(error instanceof mongoose.CastError) {
            next(createError(400, "Invalid Product id"))
            return;
        }

        next(error);
    }

},
  createNewProduct:async(req,res,next) => {

    try {
    const product = new Product(req.body);
    const result = await product.save()
    res.send(result)

    } catch (error) {
        console.log(error.message);
        if(error.name === 'ValidationError') {
            next(createError(422, error.message));
            return;
        }
        next(error);
    }
  },

  updateAProduct:async(req,res,next) =>{

   
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = {new: true };

        const result = await Product.findByIdAndUpdate(id,updates,options);
        if(!result) {
            throw createError(404, "Product does not exist");
        }
        res.send(result);


    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Product Id")
        )
      }
      next(error)
    }

 // res.send('Updating a single product')
    
},
deleteAProduct: async(req,res,next) =>{

    const id = req.params.id;
    try {
        const result = await Product.findByIdAndDelete(id);
        console.log(result);
        if (!result) {
            throw createError(404, 'Product does not exist.');
        }

        res.send(result);
    } catch (error) {
        console.log(error.message);
        if(error instanceof mongoose.CastError) {
            next(createError(400, "Invalid Product id"))
            return;
        }

        next(error);
    }
    // res.send('deleting a single product')
    
}

};