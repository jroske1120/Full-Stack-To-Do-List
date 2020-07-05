-- Database instructions
-- for initial table set up in database
CREATE TABLE todo (
    "id" serial PRIMARY KEY, 
    "complete" boolean NOT NULL DEFAULT false,
    "task" varchar(250) NOT NULL,
    "date_completed" TIMESTAMP NOT NULL);

-- Queries
-- GET request query:
SELECT * FROM todo ORDER BY "id";
-- This selects all tasks and sorts them into their respective tables

-- POST request query:
INSERT INTO "todo" ( "task", "date_completed" ) 
        VALUES ( $1, current_timestamp )
-- This inserts whatever description the user enters. It
-- also changes the date_completed to the current_timestamp to avoid non null values.
-- The timestamp does not display until it is further modified in the PUT request.

-- PUT request query:
UPDATE todo SET complete = true, date_completed = CURRENT_TIMESTAMP WHERE id = $1;
-- This is the user completing the task, the boolean converts to true, 
-- which displays the currenttimestamp of when the user clicked the complete button

-- DELETE request query:
DELETE FROM "todo" WHERE "id"=$1;
-- This is the user deleting the task, which can be done whether it's completed or not
    