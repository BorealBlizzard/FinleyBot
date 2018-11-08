exports.run = async (client, message, args) => {
  message.channel.send("invite me to your server: https://discordapp.com/oauth2/authorize?client_id=489436805414912010&scope=bot").catch(console.error);
}