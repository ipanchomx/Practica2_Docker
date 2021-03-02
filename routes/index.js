const router = require('express').Router();
const autoresRoute = require('./autores');


router.use('/autores', autoresRoute);

router.use('/', (req, res) => 
{ 
    res.json(
        { 
            version: "0.0.1",
            paths: [
                "/hello",
                "/home"
            ] 
        }
        ); 
}
)

module.exports = router;