module.exports = {
  name: '!log',
  description: 'Logs information',
  execute(msg, args) {
    const date = msg.createdAt;
    const options1 = { year: 'numeric', month: 'long', day: 'numeric', timeZone: "America/Los_Angeles" };
    const options2 = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: "America/Los_Angeles" };
    let log = msg.content.slice(5);
    var arrStr = log.split(/[-]/);
    let display = ``;
    for (var i = 0; i < arrStr.length; i++) {
      display = display + ` - ${arrStr[i]}
      `
    }
    msg.channel.send(
      `${date.toLocaleDateString("en-US", options1)}, ${date.toLocaleString('en-US', options2)}: 
      ${display}`
    )
    if (msg.deletable) {
      msg.delete()
    }
  }
}
