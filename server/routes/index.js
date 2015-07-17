var express = require('express');
var router = express.Router();

router.get("*", function(req, res, next) {
	console.log("req Generic");
	console.log(req.baseUrl);
	res.render('index', { title: 'Express' });
//	var path = __dirname + '/../../client/index.html';
//	console.log(path);
//	res.sendfile(path);
});

module.exports = router;