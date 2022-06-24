const Discord = require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({intents});
const axios = require('axios').default;


//client.channel.send;

client.on('messageCreate', async (message)=>{
    if(message.content==='!cod'){
//            message.channel.send(`Hola <@511008856206213121>`); andres
//jovas 291376040574582784
//richi 759862571577638943
//isaac 688156007972601971
//raul 688595797281079392
//kecha <@635634211134504981>

    let urlGatito = await getGatitos();
    const embedDatos = new Discord.MessageEmbed() 
        .setTitle("Es hora del cod !")
        .setColor(0x00AE86)
        .setDescription("Vamos ! <@511008856206213121> <@291376040574582784> <@759862571577638943> <@688156007972601971> <@688595797281079392>")
        .setFooter("Un michi random")
        .setImage(urlGatito)
        message.channel.send({embeds: [embedDatos]});
    }
});

async function getGatitos(){
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    const data = await response.data; 

    return data[0].url;
}

const CronJob = require('cron').CronJob;
const cronExpr = '0 0 2 * * *';
let job = new CronJob(cronExpr, function() {
  console.log('Mensaje mandado cada día a las 2am');
}, 'Europe/Madrid');
job.start();



client.login("ODkwNDIxMzcxNTM5MTg1NzA1.GNzVb2.0_54CzSvIU8XpHVguAV6twUciZfBRaaKApP4Fs");