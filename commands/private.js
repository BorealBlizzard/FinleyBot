exports.run = async (client, message, args) => {
  message.author.send("meow").catch(console.error);
}
