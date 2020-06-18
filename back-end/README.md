BackEnd built using Node.js, express, and knex.js.

## Endpoints

**** All endpoints start with:  heroku deploy ****

    - Initialize the counter:
        POST to '/initialize'
            - takes a count. Ex: { count: 0 }
    
    - Update the count:
        PUT to '/update/:id'
            - takes a new count. Ex: { count: 5 }

    - Get the current count:
        GET to '/:id'
            - returns current count object