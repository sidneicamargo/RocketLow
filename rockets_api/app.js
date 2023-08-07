const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

//wD9ynMXFk416pA0L

//db con
const conn = require("./db/conn");
conn();

// rotas
const routes = require('../rockets_api/routes/routes')
app.use('/api', routes)

app.listen(3000, () => {console.log('listening')})

