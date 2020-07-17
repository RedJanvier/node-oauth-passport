const router = require('express').Router();
const passportConfig = require('../config/passport');

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/home', passportConfig.authenticate('google'), (req, res) => {
    res.render('home');
});
router.get('/google', passportConfig.authenticate('google', {
    scope: ['profile']
}));

module.exports = router;