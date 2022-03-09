import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import Product from '../models/productModel.js';

// @desc Fetch All Products
// @route GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // res.status(401);
    // throw new Error('Not Authorised');
    res.json(products);
  })
);

// @desc Fetch Single Products
// @route GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    // if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
    // } else {
    //   res.status(404).json({ message: 'Invalid Product Request' });
    // }
  })
);

export default router;
