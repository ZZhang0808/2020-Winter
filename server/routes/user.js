const express = require('express');
const router = express.Router();
let User = require('../model/user');

router.get('/list', async(req, res) => {
    try {
        User.readAll().then((user) => res.status(200).json(user));
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});

router.get('/:key', async(req, res) => {
    try {
        User.read(req.params.key).then((user) => res.status(200).json(user));
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});

module.exports = router;