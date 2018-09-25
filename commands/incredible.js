exports.run = (client, message, args) => {
  message.channel.send("haha *yes*", {files: ["https://imgur.com/Eka19KY"]}).catch(console.error);
}