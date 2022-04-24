const express = require('express')
const app = express()
const fs = require('fs')
const nl = require('neko-love')
const jsonfile = require('./url.json')
const cnl = new nl.Client();
const fetch = require('node-fetch');
const zlib = require('zlib')
var nsfwx = []
var portl = 8080
var list =  []

app.use(express.static(__dirname + '/public'))

app.listen(portl, function() {
    console.log(`Listening on ${portl}`)
});

app.get('/getlist', function(req,res) {
    async function A() {
        for (i = 0; i < 2;i++) {
            await cnl.kitsune().then((url) =>{
                list.push(url)
            })
            await cnl.neko().then((url) =>{
                list.push(url)
            })
        }
        res.json(list)
        res.end()
    }
    A();
})
app.get('/sendtext', function(req,res) {
    res.json(list);
    res.end();
});
app.get('/purgelist', function(req,res) {
    list = []
    nsfwx = []
    console.log("table: "+list.length+"- nsfw table: "+nsfwx.length)
    console.log("tables have been purged!")
    res.end()
})

app.get('/nsfw', function(req,res) {
    async function AXD() {
        console.log("A")
        for (let d = 0; d < 6; d++) {
            await fetch('https://nekobot.xyz/api/image?type=hneko')
            .then(res => res.json())
            .then(json => {
                nsfwx.push(json.message.toString())
                console.log("Loaded images so far: "+nsfwx.length)
            })
        }
        res.send("1")
        res.end();
    }
    AXD()
});
app.get('/nsfwsent', function(req,res) {
    res.json(nsfwx);
    res.end();
});