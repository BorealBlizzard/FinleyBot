exports.run = (client, message, args) => {
  message.channel.send(`owo, hello ${message.author}`).catch(console.error);
}
