const dotenv = require('dotenv');
const SlackBot = require('slackbots');
const axios = require('axios');

dotenv.config()

const bot = new SlackBot({
  token: process.env.BOT_TOKEN,
  name: 'chucknorris'
});

// start handler
bot.on('start', () => {
  const params = {
    icon_emoji: ':feelsgood:',
  };
  // TODO: add channel
  // bot.postMessageToChannel('', 'Hey I\'m Chuck Norris. Do you want to hear a joke?', params);
});

// error handler
bot.on('error', err => {
  console.log(err);
});

// message handler
bot.on('message', (data) => {
  if (data.type !== 'message') {
    return;
  }

  console.log(data);
});