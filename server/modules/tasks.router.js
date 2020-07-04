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

taskRouter.post('/', (req, res) => {
    console.log('in /tasks POST:', req.body);
    let queryString = `INSERT INTO "todo" ( "task" ) 
        VALUES ( $1 )`;
    pool.query(queryString,
        [req.body.task ]).then((result) => {
        res.sendStatus( 201 );
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        }) //end query
})
//PUT

//DELETE
taskRouter.delete('/:id', (req, res) => {
    console.log('/tasks DELETE hit:', req.params.id);
    //have pool run a delete
    let queryString = `DELETE FROM "todo" WHERE "id"=${req.params.id};`;
    pool.query(queryString).then((results) => {
        res.sendStatus( 201 );
    }).catch((err) => {
        console.log('problem');
    })
})//end delete request





module.exports = taskRouter;