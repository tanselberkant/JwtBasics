require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require('./db/connect');
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');


const app = express();

// Middlewares
app.use(express.static("./public"));
app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error);
  }
};
start();