// without express
// const http = require('http')

// const server = http.createServer((req,res) => {
//     if(req.url === '/') {
//         if(req.method === "GET") {
//             console.log("Its a GET method")
//         }
//         res.write('I am listening on home page');
//         res.end();
//     }
//     else if(req.url === '/another') {
//         res.write('I am listening on / another');
//         res.end();

//     }
//     else
//     {
//     res.write("I am listening ");
//     res.end();
//     }

// });


// server.listen(3000, () => {
//     console.log('server started on port 3000...')
// });


const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const dotenv = require('dotenv');
require('dotenv').config();

// mongodb+srv://sainiaditya1:<password>@cluster0.r0rcu1h.mongodb.net/?retryWrites=true&w=majority


const app = express();
// RESTAPI is the database name
// mongoose.connect("mongodb://localhost:27017/RESTAPI", { useNewUrlParser: true, useUnifiedTopology: true } );// Adding this option is recommended for removing deprecation warning.
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// ?retryWrites=true&w=majority
mongoose
  .connect(process.env.MONGO_URI, {
    // dbName: process.env.DB_NAME,
    // user: process.env.DB_USER,
    // pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });








// to connect locally
// mongoose
//     .connect("mongodb://localhost:27017/RESTAPI",{useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => {
//         // const app = express()

//         // app.listen(3000,() => {
//             console.log('mongodb connected')
//         // })

//     })




// app.all('/test/:id/:name', (req,res) => {
    // console.log(req.query);
    // console.log(req.query.name);
    // res.send(req.query);

    // console.log(req.params);
    // res.send(req.params);

app.all('/test', (req,res) => {

    console.log(req.body);
    res.send(req.body);

});








const ProductRoute = require('./Routes/Product.route');

app.use('/products',ProductRoute);
// 404 handler ans pass to error handler
app.use((req,res,next) =>{
    
    // const arr = new Error("Not found")
    // err.status = 404
    // next(err);
    next(createError(404, 'Not found'));

});

// error handler
// 500 for internal server error

app.use((err,req,res,next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message

            }
        })
    })











// app.get('/products',(req,res,next) => {

// })

// app.get('/',(req,res,next) => {
//     console.log(req.url)
//     console.log(req.method)
//     res.send("I am the home route")
// });

// app.post('/',(req,res,next) =>{


// })

// app.delete('/',(req,res,next) => {

// })


app.listen(3000, () => {
    console.log('Server started on port 3000...');
});





// jooH0pRtBixP1iBK
// 9.46