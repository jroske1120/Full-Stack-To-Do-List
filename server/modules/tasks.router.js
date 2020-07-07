const express = require('express');
const taskRouter = express.Router();

// DB CONNECTION
const pool = require('./pool');

//GET
taskRouter.get('/', (req, res) => {
    console.log('/tasks GET');
    /// - query: SELECT * FROM "tasks" - ///
    let queryString = `SELECT * FROM todo ORDER BY "id";`;
    pool.query(queryString).then((result) => {
        // success, show updated table
        res.send(result.rows);
    }).catch((err) => {
        // error
        res.sendStatus(500);
    })
})

//POST
taskRouter.post('/', (req, res) => {
    console.log('in /tasks POST:', req.body);
    let queryString = `INSERT INTO "todo" ( "task", "date_completed" ) 
        VALUES ( $1, current_timestamp )`; //task entered will be automatically considered incomplete
    pool.query(queryString,
        [req.body.task ]).then((result) => {
            res.send(result.rows);
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
        }) //end query
})

//PUT
taskRouter.put('/:id', (req, res) => {
    console.log('/tasks PUT:', req.params.id);
    let queryString = `UPDATE todo SET complete = true, date_completed = CURRENT_TIMESTAMP WHERE id = $1;`;
    //sets boolean to complete and updates date, both will render
    pool.query(queryString, [req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

//DELETE
taskRouter.delete('/:id', (req, res) => {
    console.log('/tasks DELETE hit:', req.params.id);
    //have pool run a delete to match clicked id
    let queryString = `DELETE FROM "todo" WHERE "id"=$1;`;
    pool.query(queryString, [req.params.id]).then((results) => {
        res.sendStatus( 201 );
    }).catch((err) => {
        res.sendStatus(500)
        console.log('problem in delete');
    })
})//end delete request

module.exports = taskRouter;