const Discord = require('discord.js')
require('dotenv').config()
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

// Turn the exported commands into a command library for use
Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

// Upon logging in, set the status
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
  bot.user.setPresence({
    status: 'online',
    activity: {
      name: 'v0.1 | !help',
      type: 'WATCHING',
    }
  });
})

// Upon joining a new server, send an introduction message
bot.on('guildCreate', guild => {
  let channel = guild.channels.cache.filter(chx => chx.type === "text").find(x => x.position === 0);
  executeCommand('!introduction', channel, null);
});

// Upon a message being sent, evaluate it for a command
bot.on('message', msg => {
  if (msg.author.bot) return; // Don't evaluate bot messages
  
  if (msg.type === 'GUILD_MEMBER_JOIN') { // Greeting
    executeCommand('!greet', msg, msg.author)
  }
  
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  
  if (!bot.commands.has(command)) return;

  executeCommand(command, msg, args);
});

// Abstracted function for executing commands with arguments
function executeCommand(command, msg, args) {
  try {
    console.info(`Called command: ${command}`);
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
}

// Login using the Discord API
bot.login(process.env.BOT_TOKEN);