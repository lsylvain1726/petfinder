const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
const hbsMiddleware = require("express-handlebars")
const fs = require("fs")
const _ = require("lodash")
const createError = require("http-errors")


const app = express()

app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)

app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const { Pool } = require("pg")

const pool = new Pool({
  connectionString: "postgres://postgres:password@127.0.0.1:5432/adopt_a_pet"
})

<<<<<<< HEAD
app.get('/api/v1/pets', (req, res) => {
  console.log("Hey")
  pool.query("SELECT * FROM pet_types") 
    .then(result => {
      const animal = result.rows
      res.json(animal)
    })
  
})

// Express routes
app.get('/', (req, res) => {
  res.redirect("/pets")
})
=======
app.get('/api/v1/pets/:animalType/:id', (req, res) => {
  let petId = req.params.id
  let animalType = req.params.animalType
  pool.connect().then(client => {
    client.query(`SELECT * FROM adoptable_pets JOIN pet_types ON pet_types.id = type_id WHERE adoptable_pets.id = ${petId} and pet_types.type = '${animalType}'`)
      .then(result => {
        const animal = result.rows
        client.release()
        if(animal.length > 0) {
          res.json(animal)
        } else {
          res.status(404).send("No animal exists")
        }
      })
  })
})

// Express routes

>>>>>>> d8fd7e2b5b56562f23f10803da501ae9fe1231f8
app.get('*', (req, res) => {
  res.render("home")
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

module.exports = app


