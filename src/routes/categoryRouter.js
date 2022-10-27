const express = require('express');

const verifyCategorySchema = require('../middlewares/verifyCategorySchema');
const authMiddleware = require('../middlewares/authMiddleware');
const { categoryController } = require('../controllers');

const router = express.Router();

router.use(authMiddleware);

router.post('/', verifyCategorySchema, categoryController.insertCategory);

router.get('/', categoryController.getCategories);

module.exports = router;