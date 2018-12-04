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
        .addField("나를 부르는 방법 : `감자야` \n지원 서버 : https://discord.gg/TBe9Zcx \n페이스북 : https://www.facebook.com/potato1798 \n`감자야 도움 (기본/지원/음악/관리)` 로 더 자세한 도움을 볼 수 있어.");
        
        return message.channel.send(botembed);
    }
    if(message.content.startsWith(`${prefix}` + "도움 기본")){
        let botembed = new Discord.RichEmbed()
        .setDescription("기본 채팅")
        .setColor("#33cc33")
        .addField("`감자야` 로 나를 부를 수 있어. 다양한 명령어가 있으니까 잘 놀아봐. ex) `감자야 안녕`, `감자야 잘가`, `감자야 심심해` 등등...");
        
        return message.channel.send(botembed);
    }
    if(message.content.startsWith(`${prefix}` + "도움 지원")){
        let botembed = new Discord.RichEmbed()
        .setDescription("지원 순간이동 링크!")
        .setColor("#33cc33")
        .addField("지원 서버 : https://discord.gg/TBe9Zcx \n페이스북 : https://www.facebook.com/potato1798");
        
        return message.channel.send(botembed);
    }
    if(message.content.startsWith(`${prefix}` + "도움 음악")){
        let botembed = new Discord.RichEmbed()
        .setDescription("음악 기능")
        .setColor("#33cc33")
        .addField("**이 기능은 잠시 중단되었습니다.**");
        
        return message.channel.send(botembed);
    }
    if(message.content.startsWith(`${prefix}` + "도움 관리")){
        let botembed = new Discord.RichEmbed()
        .setDescription("관리하기")
        .setColor("#33cc33")
        .addField("`감자야 경고 (@맨션) (사유)` : 유저 경고 \n`감자야 추방 (@맨션) (사유)` : 유저 추방 \n`감자야 차단 (@맨션) (사유)` : 유저 영구차단");
        
        return message.channel.send(botembed);
    }
    if (mess.startsWith(p`${prefix}` + "안녕")) {
        message.channel.send("왜? 쓸대없이 나 부르지 마샘.");
    }
    if (mess.startsWith(`${prefix}` + "ㅎㅇ")) {
        message.channel.send("왜? 쓸대없이 나 부르지 마샘.");
    }
    if (mess.startsWith(`${prefix}` + "ㅎㅇㄹ")) {
        message.channel.send("왜? 쓸대없이 나 부르지 마샘.");
    }
    if (mess.startsWith(`${prefix}` + "뭐해")) {
        message.channel.send("Zzz...Zzz...");
    }
    if (mess.startsWith(`${prefix}` + "어쪄")) {
        message.channel.send("저쪄라고");
    }
    if (mess.startsWith(`${prefix}` + "몇살")) {
        message.channel.send("1.2살");
    }
    if (mess.startsWith(`${prefix}` + "누구")) {
        message.channel.send("세상에서 가장 똑똑하고 멋진 봇. @감자봇#9138");
    }
    if (mess.startsWith(`${prefix}` + "그치")) {
        message.channel.send("ㅇㅇ");
    }
    if (mess.startsWith(`${prefix}` + "심심해")) {
        message.channel.send("내가 놀아주는 봇이냐?? 가서 겜이나 해라.");
    }
    if (mess.startsWith(`${prefix}` + "어디 살아")) {
        message.channel.send("`대한민국 경기도 고양시 덕양구 행신2동 용현로 **(무원마을 *단지 **아파트), 30*동 ***호에 있는 느감자님의 컴퓨터, C:\\User\\느감자\\documents\\dev\\discord\\potatobot` 에 살아. 그리고 내 뇌는 그 주소의 `settings.json`에 살고, 내 몸은 `index.js`에 있어.");
    }
    if (mess.startsWith(`${prefix}` + "꺼져")) {
        message.channel.send("시러. 니나 꺼져");
    }
    if (mess.startsWith(`${prefix}` + "죽어")) {
        message.channel.send("대한민국 형법 제250조 1항 : 사람을 살해한 자는 사형, 무기 또는 5년 이상의 징역에 처한다.");
    }
    if (mess.startsWith(`${prefix}` + "응 아니야")) {
        message.channel.send("응 맞아");
    }
    if (mess.startsWith(`${prefix}` + "응 맞아")) {
        message.channel.send("응 아니야");
    }
    if (mess.startsWith(`${prefix}` + "재미 없어")) {
        message.channel.send("ㅈㅅ. 근데 너보단 재미있음");
    }
    if (mess.startsWith(`${prefix}` + "배그")) {
        message.channel.send("지움");
    }
    if (mess.startsWith(`${prefix}` + "옵치")) {
        message.channel.send("귀찮음...");
    }
    if (mess.startsWith(`${prefix}` + "롤")) {
        message.channel.send("롤? 그게 뭐지?");
    }
    if (mess.startsWith(`${prefix}` + "마크")) {
        message.channel.send("복돌써서 안될껄?");
    }
    if (mess.startsWith(`${prefix}` + "피파")) {
        message.channel.send("나 축알못임.");
    }
    if (mess.startsWith(`${prefix}` + "감자")) {
        message.channel.send("https://namu.wiki/w/%EA%B0%90%EC%9E%90");
    }
    if (mess.startsWith(`${prefix}` + "비트박스")) {
        message.channel.send("나 비트박스 겁나 잘함. 북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기북치기박치기");
    }
    if (mess.startsWith(`${prefix}` + "먹자")) {
        message.channel.send("난 먹는 감자 아님. 맥도날드 가서 감자튀김이나 사먹으샘.");
    }
    if (mess.startsWith(`${prefix}` + "맥도날드")) {
        message.channel.send("나가라.");
    }
    if (mess.startsWith(`${prefix}` + "끝말잇기")) {
        message.channel.send("기쁨");
    }
    if (mess.startsWith(`${prefix}` + "사귀자")) {
        message.channel.send("나 너 싫어함. 꺼져");
    }
    if (mess.startsWith(`${prefix}` + "사랑")) {
        message.channel.send("진짜야?? \n\n사실 나 너 싫어함.");
    }
    if (mess.startsWith(`${prefix}` + "결혼")) {
        message.channel.send("진짜야?? \n\n사실 나 너 싫어함.");
    }
/*    if (mess.startsWith(prefix + "가위바위보")) {
        message.channel.send("가위바위... 감자야 가위 / 바위 / 보 로 내면 됨.");
        if (mess.startsWith(prefix + "가위")) {
            message.channel.send("나 바위. 내가 이김.");
        }
        if (mess.startsWith(prefix + "바위")) {
            message.channel.send("나 보. 내가 이김.");
        }
        if (mess.startsWith(prefix + "보")) {
            message.channel.send("나 가위. 내가 이김.");
        }
    } */
    if (mess.startsWith(`${prefix}` + "묵찌빠")) {
        message.channel.send("가위바위보시래기개미똥꾸멍멍이가노래를한다소풍을간다. 내가 이겼지?");
    }
    if (mess.startsWith(`${prefix}` + "돈")) {
        message.channel.send("돈 없음.");
    }
    if (mess.startsWith(`${prefix}` + "숙제")) {
        message.channel.send("https://cdn.discordapp.com/attachments/490326928037904394/512935129736282112/3.png");
    }
    if (mess.startsWith(`${prefix}` + "잘가")) {
        message.channel.send("이젠 다시 내 앞에 나타나지 않았으면 좋겠다.");
    }
    if (mess.startsWith(`${prefix}` + "나가")) {
        message.channel.send("ㅎㅎ? 날 추방시키면 니 얼굴이 감자로 변해버릴 수 있는데??");
    } 
    if (mess.startsWith(`${prefix}` + "김치")) {
        message.channel.send("찌개");
    } 
    if (mess.startsWith(`${prefix}` + "된장")) {
        message.channel.send("찌개");
    }
    if (mess.startsWith(`${prefix}` + "느감자")) {
        message.channel.send("**갓**");
    }
    if (mess.startsWith(`${prefix}` + "감자봇")) {
        message.channel.send("나 \n뭐?");
    }
    if (mess.startsWith(`${prefix}` + "우디봇")) {
        message.channel.send("~~아주 멍청한 우디의 쫄병~~");
    }
    if (mess.startsWith(`${prefix}` + "감자")) {
        message.channel.send("나 \n뭐?");
    } 
    if (mess.startsWith(`${prefix}` + "티펄")) {
        message.channel.send("우주관종 유튜버 티펄");
    } 
    if (mess.startsWith(`${prefix}` + "로로호")) {
        message.channel.send("배그, 옵치충 / 카시마 남친");
    } 
    if (mess.startsWith(`${prefix}` + "라이젠")) {
        message.channel.send("마크충");
    }
    if (mess.startsWith(`${prefix}` + "MEE6")) {
        message.channel.send("동그랗다.");
    } 
    if (mess.startsWith(`${prefix}` + "카시마")) {
        message.channel.send("허서준 여친");
    } 
    if (mess.startsWith(`${prefix}` + "쪄")) {
        message.channel.send("두|질래??");
    }
    if (mess.startsWith(`${prefix}` + "튀겨")) {
        message.channel.send("두|질래??");
    }
    if (mess.startsWith("쪄")) {
        message.channel.send("두|질래??");
    }
    if (mess.startsWith("튀겨")) {
        message.channel.send("두|질래??");
    }
    if (mess.startsWith(`${prefix}` + "시리")) {
        message.channel.send("꺼라.");
    }
    if (mess.startsWith(`${prefix}` + "빅스비")) {
        message.channel.send("꺼라.");
    }
    if (mess.startsWith(`${prefix}` + "나무위키")) {
        message.channel.send("꺼라.");
    }
    if (mess.startsWith(`${prefix}` + "위키백과")) {
        message.channel.send("꺼라.");
    }
    if (mess.startsWith(`${prefix}` + "뮤봇")) {
        message.channel.send("~~쫄병 이라고 하자.~~");
    }
}); 

bot.on('guildMemberAdd', member => {
	let welcomechannel = member.guild.channels.find('name', '🎎신입');
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
	let welcomechannel = member.guild.channels.find('name', '🎎신입');
    let memberavatar = member.user.avatarURL
    if (!welcomechannel) return;
	
        let byembed = new Discord.RichEmbed()
        .setColor("#2E9AFE")
        .addField("**[" + `${member.id}` + "]** 님이 서버를 나갔습니다.")
		.setTimestamp()
			
        welcomechannel.sendEmbed(byembed);
		return;
});
