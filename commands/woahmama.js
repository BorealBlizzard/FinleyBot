exports.run = (client, message, args) => {
  message.channel.send({files: ["./images/WoahMama.png"] }).catch(console.error);
}
