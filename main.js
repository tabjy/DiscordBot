const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';


client.once('ready', () => {
    console.log('Ma chan is online');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === '色图'){
        message.channel.send('没有色图!');
    }
});


client.login('ODU2OTk1MzIwNjM0NjcxMTE0.YNJJFg.kf1C1MOzk5X792snom9SfcVlX5M');