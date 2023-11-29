const ProductModel = require('../models/product');

exports.getById = async (id) => {
    return await ProductModel.findById(id);
}

exports.getProductList = async (amount) => {
    return await ProductModel.findAll().limit(amount);
}

exports.getAllProducts = async () => {
    return await ProductModel.findAll()
}

exports.addProduct = async (data) => {
    return await ProductModel.create(data);
}

exports.updateProduct = async (data) => {
    return await ProductModel.findByIdAndUpdate(data.id, data.model);
}

exports.deleteProduct = async (id) => {
    return await ProductModel.deleteOne({_id: id});
}
