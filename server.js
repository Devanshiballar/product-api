const express = require('express');
const PORT = 5000
const app = express();
require('./config/db')
const productRoute=require("./routes/productRoutes")
const userRoute = require("./routes/userRoutes")
const categoryRoute = require("./routes/categoryRoutes")
const finalorderRoute = require("./routes/finalorderRoutes")


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/product",productRoute)
app.use("/api/user",userRoute)
app.use('/api/category',categoryRoute)
app.use("/api/order",finalorderRoute)

app.listen(PORT,()=>{
    console.log(`listening on port = ${PORT}`);
});