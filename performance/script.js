import { check } from "k6"
import http from "k6/http"

const host = "http://"

export const options = {
  stages: [
    { duration: "1m", target: 100 },
    { duration: "1m", target: 200 },
    { duration: "1m", target: 300 },
    { duration: "1m", target: 400 },
    { duration: "1m", target: 500 },
    { duration: "1m", target: 600 },
    { duration: "1m", target: 700 },
    { duration: "1m", target: 800 },
    { duration: "1m", target: 900 },
    { duration: "1m", target: 1000 },
  ]
}

export default function () {
  check(
    http.get(`${host}/fast`), {
      "http 200": (res) => res.status === 200
    }
  )

  check(
    http.get(`${host}/slow`), {
      "http 200": (res) => res.status === 200
    }
  )
}
