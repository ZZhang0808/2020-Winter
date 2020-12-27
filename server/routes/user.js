const express = require('express');
const router = express.Router();
let User = require('../model/user');

router.get('/list', async(req, res) => {
    try {
        User.readAll().then((user) => {console.log(user);res.status(200).json(user)});
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});

router.post('/create', async(req, res) => {
    console.log('create called')
    try {
        User.create(req.body).then((data) => {res.status(200).json({key: data}); console.log(data); return data;});
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Some error occured",
            data: req.body,
            err: { message: err.message, stack: err.stack }
        });
        console.log(err);
    }

});

router.get('/:key', async(req, res) => {
    try {
        User.read(req.params.key).then((user) => {console.log(user);res.status(200).json(user)});
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});

router.post('/:key', async(req, res) => {
    try {
        User.update(req.params.key, req.body.data);
        res.status(200);
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }

});

router.delete('/:key', async(req, res) => {
    try {
        User.delete(req.params.key);
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }

}); 

module.exports = router;