{
const Discord = require("discord.js");
const client = new Discord.Client();
const botconfig = require("./botconfig.json");
const prefix = (botconfig.prefix);  
const superagent = require("superagent");
const fs = require("fs");
const cleverbot = require("cleverbot.io"),
clbot = new cleverbot(process.env.CLEVERUSER, process.env.CLEVERKEY);       

  
//  confirms the bot is online
client.on("ready", async () => {
  console.log(`Meowzers, ${client.user.username} is ready to go! Connected to ${client.guilds.size} servers, for ${client.users.size} users.`);

//  changes the activity of the bot every 60 seconds (60000 miliseconds)
  setInterval(function() {
    let statuses = ["with someones toes","with some fluff","with a ball o' yarn","with my tail","in my dreams"]
    let randomstatus = statuses[Math.floor(Math.random()*statuses.length)];
    
    client.user.setActivity(randomstatus,{type: "PLAYING"})
    
  }, 60000)   
});

client.on("message", (message) => {
  
  
// Cleverbot Integration with Cleverbot.io
  if (message.channel.type === "dm") {
    clbot.setNick("session");
    clbot.create(function (err, session) {
      clbot.ask(message.content, function (err, response) {
      message.author.send(response);
      });
    });
  }
  
//  simplifies the commands and makes it case insensitive  
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

// looks at "commands" folder for commands 
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
      message.channel.send(":no_entry: command not found :no_entry:")}
});
  
client.login(process.env.TOKEN);
}
