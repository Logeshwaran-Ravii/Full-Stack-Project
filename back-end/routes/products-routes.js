const express = require('express')
const router = express.Router()
const {getProducts, createProduct, updateProduct, deleteProduct, getSingleProduct} = require('../controller/products-contoller')
const { isAuthenticatedUser } = require('../middleware/isAuthenticated')


router.route('/products').get(getProducts)
router.route('/product/:id').get(getSingleProduct)
router.route('/product/new').post(createProduct)
router.route('/product/:id').post(updateProduct)
router.route('product/:id').post(deleteProduct)

module.exports = router