const express = require("express")
const os = require("os")
const axios = require("axios")


//create an express server app
const server = express()

//define our port 
const PORT = 4343

//define the routes
server.get("/", (request, response) => {

    const hostname = os.hostname()

    console.log(`Server is running inside: ${hostname}`)

    response.send(`WELCOME TO new version 4.0.0: ${hostname}`)

})


//reach out to nginx deployment..
server.get("/server", async (request, response) => {

    const feedback = await axios.get("http://nginx")

    response.send(feedback.data)


})

//listening
server.listen(PORT, () => console.log(`Server is running on ${PORT}`));