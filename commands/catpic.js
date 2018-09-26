const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
  
  let {body} = await superagent
  .get (`http://aws.random.cat/meow`)
  
  let catembed = new Discord.RichEmbed()
  .setColor("#42f4c5")
  .setTitle("Cat  :cat:")
  .setImage(body.file);
  
  message.channel.send(catembed);
  
}