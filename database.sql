-- db name tasks ---

CREATE TABLE "to-doList"(
    "id" serial primary key,
    "task" varchar(150),
    "complete" BOOLEAN DEFAULT FALSE 
);

INSERT INTO "to-doList" ( task ) VAlUES ();
SELECT * from "to-doList";