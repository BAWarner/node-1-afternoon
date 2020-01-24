const products = require('../products');

var getAll = (req, res) => {
    res
    .status(200)
    .send(products);
}
module.exports = {
    getAll
}