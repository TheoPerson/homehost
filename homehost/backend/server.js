const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const moviesDirectory = path.join(__dirname, 'movies');

app.use(express.static(moviesDirectory));

app.get('/movies', (req, res) => {
    fs.readdir(moviesDirectory, (err, files) => {
        if (err) {
            res.status(500).send('Unable to scan directory');
        } else {
            res.json(files);
        }
    });
});

app.get('/movies/:movieName', (req, res) => {
    const movieName = req.params.movieName;
    res.sendFile(path.join(moviesDirectory, movieName));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
