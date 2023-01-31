const Product = require("../models/product.model")

// test
module.exports.testApi = (req, res) => {
    res.json({status: "Test API is successful"})
}

// create
module.exports.addProduct = (req, res) => {
    const newProduct = req.body
    Product.create(newProduct)
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err))
}

// read all
module.exports.allProducts = (req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
}

// read one
module.exports.oneProduct = (req, res) => {
    const idFromParams = req.params.id
    Product.findOne({_id: idFromParams})
    .then(oneproduct => res.json(oneproduct))
    .catch(err => res.json(err))
}

// update
module.exports.updateProduct = (req, res) => {
    const idFromParams = req.params.id
    const newValue = req.body
    Product.findOneAndUpdate({_id: idFromParams}, newValue, {new: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.json(err))
}

// delete
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}