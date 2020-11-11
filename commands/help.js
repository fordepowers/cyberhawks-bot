module.exports = {
  name: '!help',
  description: 'Display help command',
  execute(msg, args) {
    let message =
      `>>> **Commands**
\`!help\` - Displays this help screen.
\`!log [1] [-2] [-3]\` - Formats a logbook message. Every bulletpoint is separated by a \`-\`.
\`!ping\` - Replies 'pong'. Used for testing.
\`!notes\` - Shows the last meeting notes.
\`!greet @user\` - Sends the greeting message to a specific user.
`;
    msg.channel.send(message);
  },
};
