exports.run = async (client, message, args) => {
  message.channel.send({files: ["https://i.imgur.com/KK5ZLSw.jpg"]}).catch(console.error);
}