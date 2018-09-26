const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  let bicon = client.user.displayAvatarURL;
  const cleverembed = new Discord.RichEmbed()
  .setColor("#FF2D00")
  .setThumbnail(bicon)
  .setTitle("Finley Cleverbot")
  .addField("How to use", "Just send a DM to Finley to start using the cleverbot system.")
  .addField("API", "For those who care its Cleverbot.io")
  .setFooter("Finley Cleverbot");
  return message.channel.send(cleverembed);
  
}