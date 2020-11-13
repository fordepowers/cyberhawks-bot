module.exports = {
  name: '!introduction',
  description: 'Introduce yourself',
  execute(msg, args) {
    let channel = msg;
    if (msg === null || msg === undefined) return;
    if (msg.channel !== null && msg.channel !== undefined) { channel = msg.channel }
    channel.send({
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
          text: "Cyberhawks Bot Version 0.1"
        },
      }
    })
  },
};
