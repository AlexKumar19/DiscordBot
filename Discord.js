const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  // Split the message into individual words
  const words = message.content.split(' ');
  const swearWords = ['damn', 'crap', 'heck', 'darn','fuck', 'shit'];
  // Check if any of the words are curse words
  const isSwearWord = words.some(word => swearWords.includes(word));
  
  if (isSwearWord) {
    // Delete the message if it contains a curse word
    message.delete();
  }
});

client.login('MTA1OTk1Mjk0MTQ5NjI4NzM0NQ.G_zw-m.PWaWSVRPZ-AzOt60_GSMN6bHTRSMiV9d7v1uQc');