const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "6499529702:AAG25wImHqYIPkOXyiamLWFrDNtB887latI";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  console.log(msg);
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Tổ sư nhà mày");
});
