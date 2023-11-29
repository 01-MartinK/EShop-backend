const ProductModel = require('../models/product');

const getById = async (id) => {
    return await ProductModel.findById(id);
}

const getProductList = async (amount) => {
    return await ProductModel.find().limit(amount);
}

const getAllProducts = async () => {
    return await ProductModel.find()
}

const addProduct = async (data) => {
    return await ProductModel.create(data);
}

const updateProduct = async (data) => {
    return await ProductModel.findByIdAndUpdate(data.id, data);
}

const deleteProduct = async (id) => {
    return await ProductModel.deleteOne({_id: id});
}

module.exports = {
    getAllProducts,
    getProductList,
    getById,
    addProduct,
    updateProduct,
    deleteProduct
}