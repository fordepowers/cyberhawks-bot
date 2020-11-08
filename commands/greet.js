module.exports = {
  name: '!greet',
  description: 'Greet newcomers',
  execute(msg, args) {
    let newcomer = msg.mentions.users.first();
    if (newcomer === undefined) return;
    let greeting =
      `>>> **Hello ${newcomer.toString()}, welcome to the Cyberhawks.**
Please change your nickname to __whatever you go by in real life,__ this helps us manage the Discord.
If there's any specific questions you have, feel free to mention any member with an <@&431514789836095489> role.`;
    // msg.channel.send(greeting);
    msg.channel.send({
      embed: {
        color: '#2e57a1',
        title: "**Cyberhawks** Welcome Bot!",
        url: "https://cbc-cyberhawks.herokuapp.com",
        description: `Welcome ${newcomer} to the **Cyberhawks** Discord server!`,
        thumbnail: {
          url: 'https://i.imgur.com/vQFxThk.jpeg',
        },
        fields: [{
          name: "Information",
          value: "Some info on the server"
        }],
        timestamp: new Date(),
        footer: {
          text: "© Cyberhawks 2020"
        },
      }
    })
  },
};
