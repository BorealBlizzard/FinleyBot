{
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = (botconfig.prefix);

//creating "command" variuble to simplify commands
//const args = message.content.slice(prefix.length).trim().split(/ +/g);
//const command = args.shift().toLowerCase();


//Confirms the bot is online
client.on("ready", async () => {
  console.log(`Meowzers, ${client.user.username} is ready to go! Connected to ${client.guilds.size} servers, for ${client.users.size} users.`);

  client.user.setActivity("with a ball of yarn",{type: "PLAYING"})
});


client.on("message", (message) => {
if (!message.content.startsWith(prefix) || message.author.bot) return;

//basic Ping/Pong command
  if (message.content.startsWith(`${prefix}ping`)) {
    message.reply("pong!");

} else

//basic reply command with user mention
  if (message.content.startsWith(`${prefix}hello`)) {
    message.channel.send(`owo, hello ${message.author}`);

  } else

//panzer vor meme
  if (message.content.startsWith(prefix + "panzer vor") ){
    message.channel.send("Jawohl, Start Panzerkampfwagen VI Tiger Ausf. E ", {files: ["./images/TigerIKat.png"] });

  } else

//DM command
  if (message.content.startsWith(prefix + "private")) {
    message.author.send("meow");

  }
})

client.login(botconfig.token);
}
