const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, {polling: true});
const logger = require('./utils/logger');

bot.on('message', (msg) => {
    // Handle each message
    logger.info('Message received: ' + msg);
});