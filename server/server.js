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

app.get('/api/v1/pets', (req, res) => {
  pool.query("SELECT * FROM pet_types") 
    .then(result => {
      const animal = result.rows
      res.json(animal)
    })  
})

app.get('/api/v1/pets/:type', (req, res) => {
  const petTypeSearch = req.params.type
  pool.query('SELECT * FROM pet_types WHERE type = $1', [petTypeSearch], (error, results) => {
    if (error) {
      throw error
    } else {
      const petTypeResults = results.rows[0].id
      pool.query('SELECT * from adoptable_pets WHERE type_id = $1', [petTypeResults], (error, results) => {
        if (error) {
          throw error
        } else {
          res.json(results.rows)
        }
      })
    }
  })
})

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

app.get('/api/v1/surrenderedpets', (req, res) => {
  pool.query('SELECT * FROM pet_surrender_applications', (error, result) => {
    if (error) {
      throw error
    } else {
      res.json(result.rows)
    }
  })
})

app.post('/api/v1/surrenderedpets', (req, res) => {
  const {name, phone_number, email, pet_name, pet_age, pet_type_id, pet_image_url, vaccination_status, application_status} = req.body
  pool.query(
    'INSERT INTO pet_surrender_applications (name, phone_number, email, pet_name, pet_age, pet_type_id, pet_image_url, vaccination_status, application_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [
      name,
      phone_number,
      email,
      pet_name,
      pet_age,
      pet_type_id,
      pet_image_url,
      vaccination_status,
      application_status
  ])
    .catch(error => {
      res.sendStatus(500)
    })
  })

app.post('/api/v1/pets/:animalType/:id', (req, res) => {
  const adoptionEntry = req.body
  const petId = req.body.petType
  const selectQuery = `SELECT id FROM pet_types WHERE type = '${petId}'`
  
  const insertQuery = "INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id) VALUES ($1, $2, $3, $4, $5, $6)"
    pool.query(selectQuery) 
      .then((result) => {
        const id = result.rows[0].id
        return pool.query(insertQuery, [
          adoptionEntry.name,
          adoptionEntry.phoneNumber,
          adoptionEntry.email,
          adoptionEntry.homeStatus,
          adoptionEntry.applicationStatus,
          id
      ])
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(500)
      })
})

// Express routes
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