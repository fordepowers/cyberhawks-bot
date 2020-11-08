const Discord = require('discord.js')
require('dotenv').config()
const bot = new Discord.Client()
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.login(process.env.BOT_TOKEN);

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

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();

  if (!bot.commands.has(command)) return;

  executeCommand(command, msg, args);
});

function executeCommand(command, msg, args) {
  try {
    console.info(`Called command: ${command}`);
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
}

bot.on('guildMemberAdd', member => {
  console.log(member)
  member.guild.channels.get('266435313356767232').send({
    embed: {
      color: 3447003,
      title: "**Cyberhawks** Welcome Bot!",
      url: "https://cbc-cyberhawks.herokuapp.com",
      description: "Welcome *" + member + "* to the **Cyberhawks** Discord server!",
      fields: [{
        name: "Information",
        value: "Some info on the server"
      }],
      timestamp: new Date(),
      footer: {
        icon_url: bot.user.avatarURL,
        text: "© Cyberhawks 2020"
      },
    }
  })
});
