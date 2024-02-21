const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require("dotenv")
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
})

dotenv.config();

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));

const upload = multer({ storage });
const rootUrl = '/api'

app.get(rootUrl, (req, res) => {
    res.json({"users": ["userone", "user2"]})
});

app.post(rootUrl+'/uploadImage', upload.single('file') ,(req, res) => {
    try {
        res.json(req.file);
    } catch(err) {
        console.log()
        if (err) throw err;
        res.status(500).json('error')
    }

});

app.listen(3000, ()=> {
    console.log("server is running on port 3000")
});