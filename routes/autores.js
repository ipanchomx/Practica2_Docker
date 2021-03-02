const router = require('express').Router();

router.route('/').get((req, res) => {
    res.json({ autor1: "E. F. M. R.", autor2: "M. D. P." });
});

module.exports = router