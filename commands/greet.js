module.exports = {
  name: '!greet',
  description: 'Greet newcomers',
  execute(msg, args) {
    let newcomer = msg.mentions.users.first();
    let author = args;
    if (newcomer === undefined && author === undefined) return;
    let greeting =
      `>>> **Hello ${newcomer ? newcomer.toString() : author}, welcome to the Cyberhawks.**
Please change your nickname to __whatever you go by in real life,__ this helps us manage the Discord.
If there's any specific questions you have, feel free to mention any member with an <@&431514789836095489> role.`;
    msg.channel.send(greeting);
  },
};
