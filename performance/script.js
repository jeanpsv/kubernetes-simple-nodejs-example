import { check } from "k6"
import http from "k6/http"

const host = "http://35.192.183.117"

export const options = {
  stages: [
    { duration: "1m", target: 200 },
    { duration: "1m", target: 400 },
    { duration: "1m", target: 800 },
    { duration: "1m", target: 1000 },
    { duration: "1m", target: 1200 },
    { duration: "1m", target: 1400 },
    { duration: "1m", target: 1600 },
    { duration: "1m", target: 1800 },
    { duration: "1m", target: 2000 },
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
