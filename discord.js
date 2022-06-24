const {Client, Intents, MessageEmbed} = require('discord.js');
const axios = require('axios').default;
require('dotenv').config();

//const prefix = "!";

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", (bot)=>{
    console.log("************************************************************");
    console.log(`              bot: ${bot.user.username}\n              Status: ${bot.presence.status}`);
    console.log("************************************************************");
});

client.on("messageCreate", async (msg)=>{
    //

    if(msg.content === "<@&970924361353682985>"){
        let urlGatito = await getGatitos();
        const embedDatos = new MessageEmbed()
        .setTitle("Es hora del cod !")
        .setColor(0x00AE86)
        .setDescription("Vamos ! <@511008856206213121> <@291376040574582784> <@759862571577638943> <@688156007972601971> <@688595797281079392> <@635634211134504981>")
        .setFooter(":)")
        .setImage(urlGatito);

        return msg.reply({
            embeds: [embedDatos]
        })
    }
    /*
        message.channel.send({embeds: [embedDatos]});    */
});

async function getGatitos(){
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    const data = await response.data; 

    return data[0].url;
}

client.login(process.env.token);