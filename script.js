const { appendFile } = require('fs');
const TelegramBot = require('node-telegram-bot-api');


const token = '6747894459:AAFb1a3QBO7of3_73DEjgAdydGYA2aosYAA';


const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, msg.text);


});


