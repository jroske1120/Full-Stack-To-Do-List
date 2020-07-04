const express = require('express');
const taskRouter = express.Router();

// DB CONNECTION
const pool = require('./pool');

//GET
taskRouter.get('/', (req, res) => {
    console.log('/tasks GET');
    /// - query: SELECT * FROM "tasks" - ///
    let queryString = `SELECT * FROM todo`;
    pool.query(queryString).then((result) => {
        // success
        res.send(result.rows);
    }).catch((err) => {
        // error
        res.sendStatus(500);
    })
})

//POST

//PUT

//DELETE






module.exports = taskRouter;