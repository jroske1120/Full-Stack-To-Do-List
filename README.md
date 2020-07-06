# PROJECT NAME
SQL To-do List

## Description

_Duration: 2 Day Sprint_

This is Joel Roske's full stack To Do List App.

## Screen Shot

![image](/Styles/Screenshot.jpg)

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)

## Installation

How do you get your application up and running? This is a step by step list for how another developer could get this project up and running. The good target audience in terms of knowledge, would be a fellow Primer from another cohort being able to spin up this project. Note that you do not need a paragraph here to intro Installation. It should be step-by-step.

If your application has secret keys (for example --  Twilio), make sure you tell them how to set that up, both in getting the key and then what to call it in the `.env` file.

1. Create a database named `weekend-to-do-app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal*
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. On loading the page, the user will see two blank tables, My Tasks and Completed Tasks. The Task Description input allows a user to add a task to the list.
2. Clicking "Add Task" adds what was typed into the database and appears in the My Tasks table, along with two buttons, Complete and Delete.
3. Clicking the Complete button moves the task to the Completed Tasks table. It also replaced the Complete button with a checkmark of the same color, followed by the date the task was completed.
4. Clicking the Delete button in either table removes the clicked task from the page and the database.
5. The user can now add tasks to their list, and the page (and database) records when those tasks are completed.

## Built With

The full stack! Javascript, jQuery, HTML, CSS, AJAX, Node, Express, and Postgres with SQL.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality, well as the members of my cohort, Paxos.

## Support
If you have suggestions or issues, please email me at [joel.j.roske@gmail.com](www.google.com)
