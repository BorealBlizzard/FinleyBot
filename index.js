{
const botconfig = require("./botconfig.json");
const Discord = requite("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready",async () => {
  console.log(`${bot.user.username} is online!`);
});

bot.login(botconfig.token);
}
