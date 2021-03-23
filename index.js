# Déclaration des variables
const Discord = require('discord.js');
const Client = new Discord.Client();
const Logger = require('./utils/Logger.js');
const Config = require('./utils/Config.json');

Client.connect(Config.token);
