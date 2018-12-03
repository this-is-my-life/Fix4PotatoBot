const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const ytdl = require("ytdl-core");
const request = require("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");

var config = require("./settings.json");

const yt_api_key = config.yt_api_key;
const bot_controller = config.bot_controller;
const prefix = config.prefix;
const discord_token = config.discord_token;

var guilds = {};

bot.login(discord_token);

bot.on("ready", async() => {
    console.log(`작동 성공!!!`);
    bot.user.setActivity("감자야 도움 ㄱㄱㄱ", {type: "WATCHING"})
});

bot.on("message", async message => {
    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(message.content.startsWith(`${prefix}` + "도움")){
        let botembed = new Discord.RichEmbed()
        .setDescription("도움말")
        .setColor("#33cc33")
        .addField("나를 부르는 방법 : `감자야` \n지원 서버 : https://discord.gg/TBe9Zcx \n페이스북 : https://www.facebook.com/potato1798 ");
        
        return message.channel.send(botembed);
    }

}); 

bot.on('guildMemberAdd', member => {
	let welcomechannel = member.guild.channels.find('name', '신입');
    let memberavatar = member.user.avatarURL
    if (!welcomechannel) return;
	
        let welcomembed = new Discord.RichEmbed()
        .setColor("#2E9AFE")
        .setThumbnail(memberavatar)
        .addField("", "**[" + `${member.id}` + "]** 님이 서버를 입장했습니다. 환영합니다!")
		.setTimestamp();	
		
        welcomechannel.sendEmbed(welcomembed);
		return;
});

bot.on('guildMemberRemove', member => {
	let welcomechannel = member.guild.channels.find('name', '신입');
    let memberavatar = member.user.avatarURL
    if (!welcomechannel) return;
	
        let byembed = new Discord.RichEmbed()
        .setColor("#2E9AFE")
        .addField("**[" + `${member.id}` + "]** 님이 서버를 나갔습니다.")
		.setTimestamp()
			
        welcomechannel.sendEmbed(byembed);
		return;
});
