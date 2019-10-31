const express = require('express');
const router = express.Router();

const detail_match_controller = require('../controllers/detail_match');


router.get('/test', detail_match_controller.test);

router.get('/get', detail_match_controller.get);

router.post('/create', detail_match_controller.createDetailMatch);

router.get('/:id', detail_match_controller.detail_match_details);

router.put('/:id/update', detail_match_controller.detail_match_update);

router.delete('/:id/delete', detail_match_controller.detail_match_delete);

router.get('/', function(req, res){
  res.render('detailMatchs/index', { title: 'Detail Matchs' });
});

module.exports = router;
