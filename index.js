const express = require('express')
const cors=require('cors')
require('./db/mongoose')
const classRouter = require('./router/class')
const userRouter = require('./router/user')
const postRouter=require('./router/post')

const app= express()
const port=process.env.PORT || 3000
app.use(express.json())
app.use(cors())

app.use(classRouter)
app.use(userRouter)
app.use(postRouter)
app.listen(port,()=> console.log(`Server is listening on ${port}`))