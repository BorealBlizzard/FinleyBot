const botconfig = require('../botconfig.json');
const prefix = (botconfig.prefix)

exports.run = async (client, message, args) => {
  message.channel.send(prefix);
}