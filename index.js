const Discord = require('discord.js');
const client = new Discord.Client();

const http = require('http');
const express = require('express');
const app = express();

const pandaFacts = require('panda-facts');

//const settings = require('./settings.json');

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
  //response.sendFile(__dirname + '/site/index.html');
  
  //app.use(morgan('combined'))
});

app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on('ready',() => {
  console.log('I\'m Online\nI\'m Online');
});

var request = require('request');

client.on('message', message => {
  
  if (message.content.includes(client.user)) {
    message.channel.send("Did you know? " + pandaFacts.random());
  }
});

client.login(process.env.TOKEN);