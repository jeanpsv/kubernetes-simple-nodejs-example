const express = require("express")

const app = express()

app.get("/", (request, response, next) => {
  response.status(200).send("Hello")
})

app.listen(8080)
