const express = require('express');
const app = express()

app.get('/api', (req, res) => {
    res.json({"users": ["userone", "user2"]})
})

app.listen(3000, ()=> {
    console.log("server is running on port 3000")
})