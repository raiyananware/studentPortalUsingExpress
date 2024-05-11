const express =require('express')
const static= require('./static/static.json')
const userRoutes= require('./routes/user.js')
const dbRoutes= require('./routes/db.js')
const app= express()


// app.get('/cerateTables',createTables)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/db', dbRoutes)
app.use('/users', userRoutes)

app.listen(static.PORT,()=>{
    console.log(`App is Running on PORT ${static.PORT}`)
})

