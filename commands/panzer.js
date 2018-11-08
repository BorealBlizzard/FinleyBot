exports.run = async (client, message, args) => {

  if (!args[0]){
    message.channel.send("WO IST DER PANZER?!?!?").catch(console.error);
  } else
  
  if (args[0] === "vor"){
    message.channel.send("Jawohl, Start Panzerkampfwagen VI Tiger Ausf. E ", {files: ["https://i.imgur.com/hrzi1UQ.png"] }).catch(console.error);
  } else
  
  if (args[0] === "katze"){
     message.channel.send("Hallo, ich bin es Katze", {files: ["https://puu.sh/BCo1h/523b576cd1.png"] }).catch(console.error);
  }
  
  if (args[0] === "flammenwerfer"){
     message.channel.send("HANS!!!", {files: ["https://puu.sh/BUvzE/d275418d62.jpg"] }).catch(console.error);
  }
  
  if (args[0] === "verlust"){
     message.channel.send("VOR!!!!", {files: ["https://puu.sh/BUvIt/fe82a98cec.png"] }).catch(console.error);
  }
  
}
