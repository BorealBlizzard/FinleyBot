const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
  
  let {body} = await superagent
  .get (`https://random.dog/woof.json`);
  
  let dogembed = new Discord.RichEmbed()
  .setColor("#42f4c5")
  .setTitle("Dog  :dog:")
  .setImage(body.url);
  
  message.channel.send(dogembed);
  
}