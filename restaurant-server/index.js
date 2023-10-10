// import json-server

const jsonserver=require('json-server')

// create a server application using jsonserver

const server=jsonserver.create()

// set up path for db.json file

const router=jsonserver.router('db.json')

// return a middleware used by jsonserver

const middleware=jsonserver.defaults()

// setup a port number

const port=process.env.PORT || 3001

// use in server

server.use(middleware)
server.use(router)

// To run the port

server.listen(port,()=>{
    console.log('listening on port '+port);
})