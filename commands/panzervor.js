exports.run = (client, message, args) => {
  message.channel.send("Jawohl, Start Panzerkampfwagen VI Tiger Ausf. E ", {files: ["./images/TigerIKat.png"] }).catch(console.error);
}
