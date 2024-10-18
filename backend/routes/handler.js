const express = require('express'),
router= express.Router();

router.get('/Tweets', (req, res) => {
    const str= [{
        'name:': "Nate",
        "msg": "This is my first tweet",
        "username": "n8h"
    }];
    res.end(JSON.stringify(str))
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports=router;