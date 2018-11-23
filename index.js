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

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix} 도움`){
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("도움말")
        .setColor("#33cc33")
        .addFiled("나를 부르는 방법 : `감자야` \n지원 서버 : https://discord.gg/TBe9Zcx \n페이스북 : https://www.facebook.com/potato179 https://www.facebook.com/potato1798 \n\n<기본> \n`도움`, `안녕`, `잘 가`, `핑` \n*이 외에도 많은 명령어가 있습니다!!* \n\n<음악> \n`음악 (곡 명 또는 URL)` : 음악 플레이, `스킵` : 건너뛰기, `정지` : 일시정지, `목록` : 재생 목록 \n\n<관리(`관리자` 권한을 가진 사람부터 사용 가능) \n`경고 (@맨션) (이유)` : 유저 경고, `강퇴 (@맨션) (이유)` : 유저 강제 퇴장, `영정(@맨션) (이유)` : 유저 영구 정지");
        
        return message.channel.send(botembed);
    }
});

bot.on('guildMemberAdd', member => {
	let welcomechannel = member.guild.channels.find('name', '인사');
    let memberavatar = member.user.avatarURL
    if (!welcomechannel) return;
	
        let welcomembed = new Discord.RichEmbed()
        .setColor("#2E9AFE")
        .setThumbnail(memberavatar)
        .addField("", "**[" + `${member.id}` + "]** 왔으니 관심줌 줘라.")
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
        .addField("**[" + `${member.id}` + "]** 나감.")
		.setTimestamp()
			
        welcomechannel.sendEmbed(byembed);
		return;
});
