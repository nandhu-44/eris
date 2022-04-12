const { client } = require("../index");

client.on("messageCreate", async (message) => {
    if(message.author.bot) return;
    if (!message.content.toLowerCase().startsWith(config.prefix)) return;

    const [cmd, ...args] = message.content
        .slice(config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return console.log('Invalid command' + message.content);
    await command.run(client, message, args);
});
