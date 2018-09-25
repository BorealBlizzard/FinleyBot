exports.run = (client, message, args) => {
  message.channel.send({files: ["https://i.imgur.com/lPyjEO4.png"] }).catch(console.error);
}
