const router = require('express').Router();
const autoresRoute = require('./autores');


router.use('/autores', autoresRoute);

router.route('/suma').post((req, res) => {
    const {nums} = req.body;
    res.send({respuesta:  nums.reduce((acc, val) => acc + Number(val), 0) });
} )

router.route('/resta').post((req, res) => {
    const {numToSubs, nums} = req.body;

    res.send({respuesta:  nums.reduce((acc, val) => acc - Number(val), Number(numToSubs)) });
} )

router.route('/multiplica').post((req, res) => {
    const {nums} = req.body;

    res.send({respuesta:  nums.reduce((acc, val) => acc * Number(val), 1) });
} )

router.route('/divide').post((req, res) => {
    const {numToDiv, nums} = req.body;

    res.send({respuesta:  nums.reduce((acc, val) => acc / Number(val), Number(numToDiv)) });
} )

router.route('/free').post((req, res) => {
    const {operation} = req.body;

    try {
        let resultado = eval(operation);
        res.send({respuesta: resultado});

    } catch (error) {
        res.send({respuesta: "Al chile no se pudo wey"});

    }
} )



module.exports = router;