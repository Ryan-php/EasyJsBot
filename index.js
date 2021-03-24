/* Déclaration des variables */
const Discord = require('discord.js');
exports.Client = new Discord.Client();

const Logger = require('./utils/Logger.js');
const Config = require('./utils/Config.json');
const fs = require('fs');

exports.Prefix = Config.prefix;

/* Commandes */
exports.Client.commands = new Discord.Collection();
exports.argv = process.argv;

loadCommand('./commands/');

function loadCommand(path)  {
	fs.readdir(path, (err, files) => {
		if (err) console.log(err);

		let jsfile = files.filter(f => f.split(".").pop() === "js")
		if (jsfile.length <= 0) {
			logger.error("Aucunes commandes trouvées dans " + path);
			return;
		}

		jsfile.forEach((f, i) => {
			let props = require(`${path}${f}`);
			Logger.SuccessLog(`Commande ${f} opérationel`);
			exports.Client.commands.set(props.help.name, props);
		});
	});
}

/* Événements */
require('./events/OnMessage.js');

/* Connexion */
Logger.SuccessLog("Prêt à écouter");
exports.Client.login(Config.token);
