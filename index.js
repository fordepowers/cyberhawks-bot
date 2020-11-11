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

bot.on('message', msg => {
  if (msg.type === 'GUILD_MEMBER_JOIN') {
    executeCommand('!greet', msg, msg.author)
  }
})

bot.on('guildCreate', guild => {
  guild.channels.cache.get('627663150509981727').send({
    embed: {
      color: '#2e57a1',
      title: "**Cyberhawks** Management Bot",
      url: "https://github.com/fordepowers/cyberhawks-bot",
      description: `Hello, I am a Discord Bot created by \`Asynchronous#7049\` to help manage the **Cyberhawks** Discord server.
I have several features unique to the Cyberhawks.`,
      thumbnail: {
        url: 'https://i.imgur.com/vQFxThk.jpeg',
      },
      fields: [
        {
          name: 'Commands',
          value: `Type \`!help\` for a list of commands.`
        },
        {
          name: 'Cyberhawks Website',
          value: 'https://cbc-cyberhawks.herokuapp.com'
        },
        {
          name: 'CBC Website',
          value: 'https://columbiabasin.edu'
        },
        {
          name: 'Source Code',
          value: 'https://github.com/fordepowers/cyberhawks-bot'
        },
      ],
      timestamp: new Date(),
      footer: {
        icon: bot.user.defaultAvatarURL,
        text: "Cyberhawks Bot Version 0.1"
      },
    }
  })
});
