const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    // test
    app.get("/api/test", ProductController.testApi)

    // Create one
    app.post("/api/product", ProductController.addProduct)

    // // Display all
    app.get("/api/products", ProductController.allProducts)

    // // Display one
    app.get("/api/product/:id", ProductController.oneProduct)

    // // Update one
    app.put("/api/product/:id", ProductController.updateProduct)

    // // Delete
    app.delete("/api/product/:id", ProductController.deleteProduct)
}