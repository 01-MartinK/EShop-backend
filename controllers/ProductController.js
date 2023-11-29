const productService = require('../services/ProductService');

const getAllProducts = async (req, res) => {
    try {
        const product = await productService.getAllProducts();
        res.status(200).json({ data: product });
    } catch(err) {
        res.status(500).json({ error: "A server side error has occured"});
        console.warn(err.message);
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await productService.getById(req.params.id);
        res.status(200).json({ data: product });
    } catch(err) {
        res.status(404).json({ error: "No product by that id"});
        console.warn(err.message);
    }
}

const getProductList = async (req, res) => {
    try {
        const product = await productService.getProductList(req.params.amount);
        res.status(200).json({ data: product });
    } catch(err) {
        res.status(500).json({ error: "A server side error has occured"});
        console.warn(err.message);
    }
}

const addProduct = async (req, res) => {
    try {
        const product = await productService.addProduct(req.body);
        res.status(200).json({ data: product });
    } catch(err) {
        res.status(500).json({ error: "A server side error has occured"});
        console.warn(err.message);
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await productService.updateProduct(req.body);
        res.status(200).json({ data: product });
    } catch(err) {
        res.status(500).json({ error: "A server side error has occured"});
        console.warn(err.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id);
        res.status(200).json({ data: product });
    } catch(err) {
        res.status(500).json({ error: "A server side error has occured"});
        console.warn(err.message);
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductList,
    addProduct,
    updateProduct,
    deleteProduct
}