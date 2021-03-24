const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    message.delete(message);
    return message.channel.send(`:wave: J'ai un temp de latence de ${Math.round(client.ws.ping)}ms`);
}

exports.help = {
    name: "ping",
    description: "Montrer la lantence du Robot",
 }
