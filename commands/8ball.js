const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if (!args[2]) return message.reply("Please ask a full question.")
  let replies = ["Yes.", "No.", "I don't know.", "Why are you asking me?", "Probably.", "Probably not.", "Maybe.", "Maybe not.", "Ask again later." ]
  
  let result = Math.floor((Math.random()*replies.length));
  let question = args.slice().join(" ");
  
  
  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setThumbnail('https://puu.sh/BBirz/b998914b1f.png')
  .setColor("#000000")
  .addField("Question", question)
  .addField("Answer", replies[result]);
  
  message.channel.send(ballembed)
  
}