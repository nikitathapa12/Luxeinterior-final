const express = require('express');
const router = express.Router();

const authMiddleware = require('../Middleware/authMiddleware');
const authorizeRole = require('../Middleware/authorizationMiddleware');
const { productImage } = require('../Middleware/uploadMiddleware');
const {
  productFiltersController,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProducts,
  getRecommendedProducts,
  braintreeTokenController,
  brainTreePaymentController

} = require('../Controllers/ProductController');

/**
 * @description Create a new product
 * @route POST /api/products/create
 * @access Private/Admin
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the created product
 */
router.post('/create', authMiddleware, authorizeRole('admin'), productImage.single('productImage'), createProduct);

/**
 * @description Update an existing product
 * @route PATCH /api/products/update/:id
 * @access Private/Admin
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the updated product
 */
router.patch('/update/:id', authMiddleware, authorizeRole('admin'), productImage.single('productImage'), updateProduct);

/**
 * @description Delete a product
 * @route DELETE /api/products/delete/:id
 * @access Private/Admin
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object confirming deletion
 */
router.delete('/delete/:id', authMiddleware, authorizeRole('admin'), deleteProduct);

/**
 * @description Get a single product by ID
 * @route GET /api/products/:id
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the product data
 */
router.get('/:id', getProduct);

/**
 * @description Get all products or search for products by name
 * @route GET /api/products
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing an array of products
 */
router.get('/', getProducts);

/**
 * @description Filter products by categories and price
 * @route POST /api/products/product-filters
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing filtered products
 */
router.post('/product-filters', productFiltersController);


/**
 * @description Get recommended products based on category
 * @route GET /api/products/recommended
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing recommended products
 */
router.get('/recommended', getRecommendedProducts);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", authMiddleware, brainTreePaymentController);

module.exports = router;
