{
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = (botconfig.prefix)

//Confirms the bot is online
client.on("ready", () => {
  console.log("Meowzers, I'm ready to go!");
});

//basic Ping/Pong command
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.reply("pong!");
  }
});

//basic reply command with user mention
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "hello")) {
    message.channel.send("owo, hello ${sent.author.username}");
  }
});

//panzer vor meme
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "panzer vor")) {
    message.channel.send("Jawohl, Start Panzerkampfwagen VI Tiger Ausf. E ", {files: ["./images/TigerIKat.png"] });
 }
});

client.login(botconfig.token);
}
