const express = require("express")

const app = express()

app.get("/health", (request, response, next) => {
  response.status(200)
})

app.get("/heavy", (request, response, next) => {
  setTimeout(() => {
    response.status(200).send("Heavy!!!\n")
  }, 1000)
})

app.get("/light", (request, response, next) => {
  setTimeout(() => {
    response.status(200).send("Light!!!\n")
  }, 200)
})

app.listen(8080)
