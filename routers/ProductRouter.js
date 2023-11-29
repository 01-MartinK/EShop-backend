const express = require('express');

const productController = require('../controllers/ProductController');

const router = express.Router();

router.get('/:id', productController.getProductById);
router.get('/:amount', productController.getProductList);
router.get('/', productController.getAllProducts);

router.post('/add', productController.addProduct);
router.patch('/update', productController.updateProduct);
router.delete('/delete', productController.deleteProduct);

module.exports = router;