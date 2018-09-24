{
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const botconfig = require("./botconfig.json");
const prefix = (botconfig.prefix);

//  Confirms the bot is online
client.on("ready", async () => {
  console.log(`Meowzers, ${client.user.username} is ready to go! Connected to ${client.guilds.size} servers, for ${client.users.size} users.`);

  client.user.setActivity("with someones toes",{type: "PLAYING"})
});


client.on("message", (message) => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();


//  >ping
  if (command === 'ping') {
    message.reply('Pong!');
  } else

//  >hello
  if (command === `hello`) {
    message.channel.send(`owo, hello ${message.author}`);
  } else

//  >panzer vor
  if (command === `panzer vor`) {
    message.channel.send("Jawohl, Start Panzerkampfwagen VI Tiger Ausf. E ", {files: ["./images/TigerIKat.png"] });
  } else

//  >private
  if (command === `private`) {
    message.author.send("meow");
  } else

//  >woahmama
  if (command === `private`) {
    message.channel.send({files: ["./images/WoahMama.png"] });

  }
})

client.login(botconfig.token);
}
