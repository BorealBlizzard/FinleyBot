const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  let bicon = client.user.displayAvatarURL;
  const cmdembed = new Discord.RichEmbed()
  .setColor("#FF2D00")
  .setThumbnail(bicon)
  .setTitle("Commands")
  .addField("catpic", "random cat picture")
  .addField("dogpic", "random dog picture")
  .addField("hello", "say hello to Finley")
  .addField("whoamama", "Whoa Mama")
  .addField("incredible", "yes")
  .addField("illegal", "hey dats illegal")
  .addField("detroit", "become human")
  .addField("meow", "meow")
  .addField("owo", "owo")
  .addField("panzervor", "VOR!!!!")
  .addField("ping", "basic ping")
  .addField("private", "basic dm message")
  .addField("commands", "Lists all available commands")
  .addField("cleverbot", "Info for Cleverbot integration")
  .addField("help", "help")
  .setFooter("Finley Command list");
  return message.channel.send(cmdembed);
  
}