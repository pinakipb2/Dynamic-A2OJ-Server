const express = require("express")
const createError = require("http-errors")
require("dotenv").config()
var cors = require("cors")
const fs = require("fs")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
  res.json({ status: 200, message: "Welcome to Dynamic-A2OJ API!" })
})

app.get("/ladders-one", async (req, res) => {
  try {
    if (fs.existsSync(`./ladders/ladder_one/ladders_one.json`)) {
      var obj = fs.readFileSync(`./ladders/ladder_one/ladders_one.json`)
      obj = JSON.parse(obj)
      res.json(obj)
    } else {
      var err = new createError.NotFound()
      res.status(404).json({
        status: err.status || 404,
        message: err.message,
      })
      return
    }
  } catch (err) {
    console.error(err)
  }
})

app.get("/ladders-two", async (req, res) => {
  try {
    if (fs.existsSync(`./ladders/ladder_two/ladders_two.json`)) {
      var obj = fs.readFileSync(`./ladders/ladder_two/ladders_two.json`)
      obj = JSON.parse(obj)
      res.json(obj)
    } else {
      var err = new createError.NotFound()
      res.status(404).json({
        status: err.status || 404,
        message: err.message,
      })
      return
    }
  } catch (err) {
    console.error(err)
  }
})

app.get("/ladder-one/:id", async (req, res) => {
  const id = req.params.id
  try {
    if (fs.existsSync(`./ladders/ladder_one/ladders_one_${id}.json`)) {
      var obj = fs.readFileSync(`./ladders/ladder_one/ladders_one_${id}.json`)
      obj = JSON.parse(obj)
      res.json(obj)
    } else {
      var err = new createError.NotFound()
      res.status(404).json({
        status: err.status || 404,
        message: err.message,
      })
      return
    }
  } catch (err) {
    console.error(err)
  }
})

app.get("/ladder-two/:id", async (req, res) => {
  const id = req.params.id
  try {
    if (fs.existsSync(`./ladders/ladder_two/ladders_two_${id}.json`)) {
      var obj = fs.readFileSync(`./ladders/ladder_two/ladders_two_${id}.json`)
      obj = JSON.parse(obj)
      res.json(obj)
    } else {
      var err = new createError.NotFound()
      res.status(404).json({
        status: err.status || 404,
        message: err.message,
      })
      return
    }
  } catch (err) {
    console.error(err)
  }
})

app.use((req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 404)
  res.send({
    status: err.status || 404,
    message: err.message,
  })
})

app.listen(process.env.PORT, () => {
  console.log(`🚀 @ PORT ${process.env.PORT}`)
})
