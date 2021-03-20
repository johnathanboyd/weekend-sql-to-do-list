# Weekend To-Do List

## Step 1: setting up

- [X] npm init --y
- [X] npm install express
- [X] npm install pg
- [ ] set up folders:
    - [ ] /server
        - [X] /modules
            - [X] /routes
        - [X] /public
            - [X] /scripts
            - [X] /styles
            - [X] /vendors
- [X] move jQuery => /vendors
- [X] create index.html => /public
- [X] create client.js => /scripts
- [X] create server.js => /server

## Step 2: spin up server
*** in server.js ***

- [X] require express
- [X] create app
- [X] require body-parser 
- [X] app.use express.static on server/public
- [X] spin up server on poert 5000
- [X] add start script to package.json
    *** "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node server/server.js"
    }, ***

*** in pool.js ***
- [X] create pool connection
- [X] require 'pg'

*** in ...route.js ***
- [X] require express and create the router
- [X] require pool

## Step 3: spit the LOGIC
creating full stack communication communication
follow crud pls
CREATE:
    -[] create function in client w/ ajax POST method
    -[] in router, create router.post (skip server.js middle man, skip pool.js)
        - [] run query by using pool 

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
