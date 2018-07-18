const express = require('express')

const Router = express.Router()

Router.get("/showMoviesList", (req,res) => {
  res.send("Liste des films")
})

module.exports = Router