module.exports = {
  name: '!help',
  description: 'Display help command',
  execute(msg, args) {
    let message =
      `>>> **Commands**
\`!help\` - Displays this help screen.
\`!log [1] [-2] [-3]\` - Formats a logbook message. Every bulletpoint is separated by a \`-\`.
\`!greet @user\` - Sends the greeting message to a specific user.
\`!introduction\` - Have Cyberhawks Bot introduce itself.
\`!ping\` - Replies 'pong'. Used for testing.
`;
    msg.channel.send(message);
  },
};
