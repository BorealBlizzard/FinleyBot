const Discord = require("discord.js");
const botconfig = require('../botconfig.json');
const prefix = (botconfig.prefix)


exports.run = async (client, message, args) => {

let bicon = client.user.displayAvatarURL;  
  
  if (!args[0]){
    
    const helpembed = new Discord.RichEmbed()
      .setColor("#FF2D00")
      .setThumbnail(bicon)
      .setTitle("HELP")
      .addField(prefix + "help fun", "fun memery commands")
      .addField(prefix + "help cleverbot", "cleverbot integration information ")
      .addField(prefix + "help test", "test commands.")
      .setFooter("Finley Help");
    
    return message.channel.send(helpembed);  
  } else
  
// fun commands  
  if (args[0] === "fun"){ 
    
    const funcmdembed = new Discord.RichEmbed()
      .setColor("#FF2D00")
      .setThumbnail(bicon)
      .setTitle("Fun Commands")
      .addField(prefix + "catpic", "random cat picture")
      .addField(prefix + "dogpic", "random dog picture")
      .addField(prefix + "bro", "cat and man being bros")
      .addField(prefix + "whoamama", "Whoa Mama")
      .addField(prefix + "incredible", "yes")
      .addField(prefix + "illegal", "hey dats illegal")
      .addField(prefix + "detroit", "become human")
      .addField(prefix + "8ball", "a digital magic 8ball")
      .addField(prefix + "meow", "meow")
      .addField(prefix + "owo", "owo")
      .addField(prefix + "panzer [vor, katze, flammenwerfer, verlust]", "VOR!!!!")
      .addField(prefix + "motivation", "Motivate ya self")
      .setFooter("Fun Commands list");
  
    return message.channel.send(funcmdembed); 
  }else   
   
// test commands  
  if (args[0] === "test"){
    
    const testcmdembed = new Discord.RichEmbed()
      .setColor("#FF2D00")
      .setThumbnail(bicon)
      .setTitle(prefix + "Test Commands")
      .addField(prefix + "hello", "say hello to Finley")
      .addField(prefix + "ping", "basic ping")
      .addField(prefix + "private", "basic dm message")
      .addField(prefix + "prefix", "shows the prefix")
      .setFooter("Test Command list");
  
    return message.channel.send(testcmdembed);  
  } else
  
// cleverbot info 
  if (args[0] === "cleverbot"){
    
    const cleverembed = new Discord.RichEmbed()
      .setColor("#FF2D00")
      .setThumbnail(bicon)
      .setTitle("Finley Cleverbot")
      .addField("How to use", "Just send a DM to Finley to start using the cleverbot system.")
      .addField("API", "For those who care its Cleverbot.io")
      .setFooter("Finley Cleverbot info");
    
    return message.channel.send(cleverembed);  
  }
  
}