const Discord = require("discord.js");

exports.run = async (client, message, args) => {

// List of quotes   
  let quote = [
    "**Hang in there.** *-Cat Poster*",
    "**We must study the future as to not repeat the past.** *-Ken M*",
    "**Patrolling the mojave almost makes you wish for a nuclear winter.** *-NCR Soldiers*",
    "**This is so sad, Alexa play despacito.** *-Nasa*",
    "**DEMOCRACY IS NON-NEGOTIABLE** *-Liberty Prime*",
    "**MISSION: THE DESTRUCTION OF ANY AND ALL RED CHINESE COMMUNISTS!** *-Liberty Prime*",
    "**Embrace democracy, or you will be eradicated.** *-Liberty Prime*",
    "**I'M HERE TO CHEW ASS AND KICK BUBBLEGUM!** *-Kick Dickem*",
    "**Blood for the Blood god! Skulls for the skulls throne! MILK FOR THE KHORNE FLAKES!** *-Khorne Worshippers*",
    "**Easier than the Kessel Run.** *-Han Solo*",
    "**Why is pizza a circle when the box is a square and the slices are triangles?** *-Benito Mussolini*",
    "**You wanna know how i got these scars? well, i cut myself but then i got help at 1-800-273-8255** *-The Joker*",
  ];
  
// Picks a random quote
  let result = Math.floor((Math.random()*quote.length));
  
// Sends the quote  
  message.channel.send(quote[result])             
  
}              