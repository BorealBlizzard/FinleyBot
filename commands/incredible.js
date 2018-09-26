exports.run = async (client, message, args) => {
  message.channel.send("haha *yes*", {files: ["https://i.imgur.com/drnaPzg.jpg"]}).catch(console.error);
}