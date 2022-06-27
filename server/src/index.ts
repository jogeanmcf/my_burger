import express from "express"

const app = express();

app.get('/' , (req, res)=> {
    res.send('Olá mundo!')
})

app.listen('8080',() => {
    console.log("Server runing at port 8080")
})
