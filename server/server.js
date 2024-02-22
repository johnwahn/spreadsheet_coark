    const express = require('express');
    const app = express();
    
    const cors = require('cors')
    const dotenv = require("dotenv")
    const multer = require('multer');
    const fs = require('fs');
    
    const AWS = require('aws-sdk');
    const s3 = new AWS.S3();


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
    
    // Serve static files from the 'uploads' directory
    app.use('/uploads', express.static('uploads'));

    const upload = multer({ storage });
    const rootUrl = '/api'

    app.get(rootUrl, (req, res) => {
        res.json({"users": ["userone", "user2"]})
    });

    app.post(rootUrl+'/uploadImage', upload.single('file') ,(req, res) => {
        try {
            console.log("file is ",req.file)
            const imageUrl = `${process.env.SERVER_URL}/uploads/${req.file.filename}`;
            res.json({ imageUrl }); // Send the URL of the saved image back to the client

        } catch(err) {
            console.log()
            if (err) throw err;
            res.status(500).json('error')
        }

    });

    app.listen(3000, ()=> {
        console.log("server is running on port 3000")
    });