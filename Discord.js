const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  // Split the message into individual words
  const words = message.content.split(' ');

  // Check if any of the words are curse words
  const isSwearWord = words.some(word => swearWords.includes(word));

  if (isSwearWord) {
    // Delete the message if it contains a curse word
    message.delete();
  }
});

client.login('MTA1OTk1Mjk0MTQ5NjI4NzM0NQ.Gk4X5T.JB_0rG_ciXAobZ7WY9oW0E6xquukXtA7KAdnok');