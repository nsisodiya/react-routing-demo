var express = require('express');
var router = express.Router();

router.get("*", function(req, res, next) {
	console.log("req Generic");
	console.log(req.baseUrl);
	res.render('index', { title: 'Express' });
});

module.exports = router;