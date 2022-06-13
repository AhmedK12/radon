const express = require('express');
const router = express.Router();
const user = require('../controller/userController')
const middleware = require("../middleware/isFreeAppUserMiddleware")
const product = require("../controller/productController")
const productMiddleware = require("../middleware/productMiddleware")
const order = require("../controller/orderController")



router.post("/createUser",middleware.isFreeAppUser, user.createUser) //second api
router.post("/createOrder",middleware.isFreeAppUser, productMiddleware.validateProduct,productMiddleware.validateUser, order.createOrder)
router.post("/createProduct",product.createProduct)  // first api



module.exports = router;