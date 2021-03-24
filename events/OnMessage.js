const { Client, Prefix } = require('../index.js');
const Discord = require("discord.js");

Client.on("message", message => {
    if (message.author.bot) return;

    if (message.content.indexOf(Prefix) !== 0) return;

    const args = message.content.slice(Prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = Client.commands.get(command);
    if (!cmd) return;

    cmd.run(Client, message, args);
});
