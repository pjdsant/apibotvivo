const express = require('express');
const router = express.Router();
const controller = require('../controllers/messageController')

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/conversational/:id', controller.getByConversationalId);
router.post('/', controller.post);

module.exports = router;