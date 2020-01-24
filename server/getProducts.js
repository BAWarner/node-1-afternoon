const products = require('../products');

var getProducts = (req, res) => {
    const {query} = req;
    if(query.price){
        let filteredProducts = products.filter( product => product.price >= +query.price);
        res
        .status(200)
        .send(filteredProducts)
    }else{
        res
        .status(200)
        .send(products);
    }
}
var getSingle = (req, res) => {
    const {params} = req;
    let productId = params.id;
    let singleProduct = products.filter( product => product.id == productId);
    console.log(req);
    if(singleProduct[0]){
        res
        .status(200)
        .send(
            singleProduct[0]  
        );
    }else{
        res
        .status(500)
        .send('<h1>Item Not On List</h1>');
    }
    
}


module.exports = {
    getProducts,
    getSingle
}