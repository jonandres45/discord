const Discord = require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({intents});

/*client.on("ready", ()=>{
    console.log("Estoy listo");
});*/

client.on('messageCreate', async (message)=>{
    console.log(message.author.username);
});

client.login("");