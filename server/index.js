/**************************************************************/

const express = require('express');
const app = express();
app.listen(5050, () => console.log('Party on, Wayne!'));

/**************************************************************/


const allProducts = require('./getProducts');
var {getProducts, getSingle} = allProducts;

app.get('/api/products', getProducts);
app.get('/api/products/:id', getSingle);