{
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const botconfig = require("./botconfig.json");
const prefix = (botconfig.prefix);

//  Confirms the bot is online
client.on("ready", async () => {
  console.log(`Meowzers, ${client.user.username} is ready to go! Connected to ${client.guilds.size} servers, for ${client.users.size} users.`);

//  Sets the activity of the bot
  client.user.setActivity("with someones toes",{type: "PLAYING"})
});

//

client.on("message", (message) => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
      console.error(err) }
});


client.login(botconfig.token);
}
