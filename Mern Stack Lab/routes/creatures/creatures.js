const express = require('express');
const router = express.Router();
const creatureCtrl = require('../controllers/creatureController');
router.get('/', creatureCtrl.getCreatures);
module.exports = router;

router.post('/', creatureCtrl.addCreature);
router.delete('/:id', creatureCtrl.deleteCreature);