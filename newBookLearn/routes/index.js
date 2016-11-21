var express = require('express');
var router = express.Router();
var api = require('../api/api');

router.get('/helloworld', api.hellworld);
router.post('/testpost', api.postthis);
router.put('/testpost/:id', api.putthis);
module.exports = router;