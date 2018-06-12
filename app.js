const express = require("express")

const app = express()

app.get("/health", (request, response, next) => {
  response.status(200)
})

app.get("/slow", (request, response, next) => {
  setTimeout(() => {
    response.status(200).send("Slow!!!\n")
  }, 1000)
})

app.get("/fast", (request, response, next) => {
  setTimeout(() => {
    response.status(200).send("Fast!!!\n")
  }, 200)
})

app.listen(8080)
