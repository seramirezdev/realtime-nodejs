const express = require('express');
const router = express.Router();

const team_controller = require('../controllers/team');


router.get('/test', team_controller.test);

router.post('/create', team_controller.team_create);

router.get('/:id', team_controller.team_details);

router.put('/:id/update', team_controller.team_update);

router.delete('/:id/delete', team_controller.team_delete);


module.exports = router;
