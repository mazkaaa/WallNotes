const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.json({
		"title": "Back-end API"
	});
});

module.exports = router;