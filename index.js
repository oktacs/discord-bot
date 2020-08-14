// importing necessary packages
const Discord = require('discord.js');
const Equation = require('equations').default;
// connect bot with bot token and login to discord
const client = new Discord.Client();
client.login("NzQzODA3NDU5NzUxMTAwNDI2.XzaCrQ.8WN2LHqc09vb6CKLAtJph_ExKxc");
// check if bot is logged in
client.on('ready', async () => {
    console.log(`Logged in successfully as bot!`);
});
// listen for a message and respond
client.on('message', (msg) => {
	msg.content = msg.content.trim(); // remove extra whitespace
	const flag = '!solve ';
	if (msg.content.startsWith(flag)) {
		const toSolve = msg.content.slice(flag.length, msg.content.length);
		try {
			const solved = Equation.solve(toSolve);
			msg.reply(`${toSolve} = ${solved}`); // backtick for embed variables in strings like `${var}`
		}
		catch (err) {
			msg.reply(`Could not solve the equation '${toSolve}'.`);
		}
	}
});