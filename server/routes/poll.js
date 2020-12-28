const express = require('express');
const router = express.Router();
let Poll = require('../model/poll');

router.get('/list', async(req, res) => {
    try {
        Poll.readAll().then((user) => {res.status(200).json(user)});
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
        let key = Poll.create(req.body);
        res.status(200).json({key: key});
        console.log(data); 
        return data;
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

router.get('/read/:key', async(req, res) => {
    try {
        Poll.read(req.params.key).then((user) => {console.log(user);res.status(200).json(user)});
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});

router.post('/update/:key', async(req, res) => {
    try {
        Poll.update(req.params.key, req.body.data);
        res.status(200);
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }

});

router.delete('/delete/:key', async(req, res) => {
    try {
        Poll.delete(req.params.key);
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