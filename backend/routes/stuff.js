const express = require('express');
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');


const router = express.Router();

router.get('/', auth, stuffCtrl.getAllStuff);
router.post('/', auth, stuffCtrl.createStuff);
router.get('/:id', auth, stuffCtrl.getOneStuff);
router.put('/:id', auth, stuffCtrl.modifyStuff);
router.delete('/:id', auth, stuffCtrl.deleteStuff);

module.exports = router;