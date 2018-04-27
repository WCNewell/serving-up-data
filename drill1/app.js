// https://git.heroku.com/serene-scrubland-91543.git

const express = require("express");
const app = express() // does this need to be (module.exports = express()) ?
const cors = require("cors")

app.get("/", (request, response) => response.send("Hello World!"))

app.use(cors({ origin: true }))

app.listen(3000, () => console.log("Example app listening on port 3000!"))

