module.exports = {
  name: '!help',
  description: 'Display help command',
  execute(msg, args) {
    let message =
      `>>> `;
    msg.channel.send(message);
  },
};
