const express = require("express");
const app = express();
const cors = require("cors")

const dotenv = require("dotenv").config();

const errorHandler = require("./middleware/ErrorHandler.js");
const dbConnect = require("./config/MongoDbConnection.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

dbConnect();

const userRoute = require("./routes/UserRoute.js")
const DataRoute = require("./routes/DataRoute.js")



app.use("/api/user", userRoute);
app.use("/api/data", DataRoute);

app.use(errorHandler)

const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log(`server listening to the ports ${PORT}`);
})