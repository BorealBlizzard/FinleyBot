{
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "f!"

client.on("ready", () => {
  console.log("Meowzers, I'm ready to go!");
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.reply("pong!");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "hello")) {
    message.channel.send("owo, hello" + message.author.username);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "panzer vor")) {
    message.channel.send("Jawohl, Start Panzerkampfwagen VI Tiger Ausf. E ", {files: ["./images/TigerI.png"] });
 }
});

client.login(botconfig.token);
}
