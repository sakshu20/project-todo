const express = require("express")
require("dotenv").config({path:"./config/.env"})
const db = require("./config/db")
const cors = require("cors")
db()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/task", require("./routes/taskRoutes"))
const PORT = process.env.PORT || 5000
app.listen(PORT,
     console.log(`SERVER RUNING http://localhost:${PORT}`)) 