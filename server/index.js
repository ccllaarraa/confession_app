const express = require('express')
const { json } = require('body-parser') //DESTRUCTURING .JSON OFF OF BODY-PARSER
const app = express()
const axios = require('axios');


app.use(json())

//HERE IS WHERE YOUR INTERNAL API REQUESTS WOULD GO

const confession = [
    {confession:" honesty is the new irony "},
    {confession:" say what you mean, mean what you say "},
    {confession:" We used the garlic press as a common object, that can be manipulated, choreographed "},
    {confession:" A child bites into a peach experiencing a number of sensations including sweetness, juiciness, and a variety of textures, which together constitue what researchers call mouthfeel."},
    {confession:" Why do we talk about the weather? "},
    {confession:" I want to make something my mum would be proud of"},
    {confession:" #style #content "},
    {confession:" Cars that look like humans/expressions"},
    {confession:"Music for Deep Focus and Concentration with Binaural Beats, Brainwave Music for Studying"},
]


app.get("/api/readSecret", (req, res) => {
//here is the response you send back
    res.send(secret)
})

app.post("/api/addSecret", (req,res) => {
    const newConfession = {
        confession: req.body.confession
    }
    confession.push(newConfession)
    res.send(confession)
})

app.get("/api/getRandomSecret", (req,res) => {
      let randomConfession= confession[Math.floor(Math.random() * confession.length)] 
      res.send(randomConfession)
})





// // app.get('/api/confession', function(req, res) {
// //    // res.send({confession});
// //      res.send({confession});
// //   }); 



const port = 3333
app.listen(port, () => console.log(`magic is happening on ${port}`))

// Create - post
// Read - get
// Update - put
// Delete - delete

// REMEMBER YOU WILL START TWO SERVERS, ONE WITH NPM START ON THE FRONT END AND ONE WITH NODEMON PATH/TO/SERVER
