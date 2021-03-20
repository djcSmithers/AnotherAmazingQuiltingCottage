const express = require('express');
const router = express.Router();
const fs = require('fs');

const imageFolder = '../assets/quiltDesigns';

router.get('/', function(req, res, next) {
  let images = [];
  res.send(fs.readdirSync(imageFolder, (err, files) => {
    if (err){
        return console.log(err);
    }
    console.log(images);
    return files;
  }));
});

module.exports = router;