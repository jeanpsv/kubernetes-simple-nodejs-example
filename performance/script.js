import { check } from "k6"
import http from "k6/http"

export const options = {
  stages: [
    { duration: "1m", target: 200 },
    { duration: "1m", target: 400 },
    { duration: "1m", target: 600 },
    { duration: "1m", target: 800 },
    { duration: "1m", target: 1000 },
  ]
}

export default function () {
  check(
    http.get(`${process.env.SERVICE_HOST}/fast`), {
      "http 200": (res) => res.status === 200
    }
  )
}
