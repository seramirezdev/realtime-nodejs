const express = require('express');
const router = express.Router();

const player_controller = require('../controllers/player');


router.get('/test', player_controller.test);

router.post('/create', player_controller.createPlayer);

router.get('/get', player_controller.get);

router.get('/getByTeam/:id', player_controller.getByTeam);

router.get('/:id', player_controller.player_details);

router.put('/:id/update', player_controller.player_update);

router.delete('/:id/delete', player_controller.player_delete);


module.exports = router;
