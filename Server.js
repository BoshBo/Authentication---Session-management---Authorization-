const express = require("express");
require("dotenv").config();
const { errorHandler } = require("./middleware/errorHandler");
const connectDB = require("./DBconnect");
connectDB();
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
app.use(errorHandler); 

app.use("/api/Tasks", require("./Routes/TasksRoutes")); 
app.use("/api/Emp", require("./Routes/EmployeeR"));
app.use("/api/admin", require("./Routes/AdminR"));


app.listen(8000) 
console.log('Server is Started');