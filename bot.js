// Run dotenv
require('dotenv').config();

const http = require("http");
const express = require("express");
const app = express();
var server = http.createServer(app);

app.get("/", (request, response) => {
    console.log(`Ping Received.`);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("DISCORD BOT YO");
});

const listener = server.listen(process.env.PORT, function () {
    console.log(`Your app is listening on port ` + listener.address().port);
});


const Discord = require('discord.js');
const { endsWith } = require('ffmpeg-static');
const client = new Discord.Client();
const footer = 'Dream UHC | by Dream'
const { CHANNEL_ID, SERVER_CHANNEL_ID } = require("./config.json");
const YouTubeNotifier = require('youtube-notification');

const Captcha = require("@haileybot/captcha-generator");
 
// Use this function for blocking certain commands or features from automated self-bots
function verifyHuman(msg) {
  let captcha = new Captcha();
  msg.channel.send(
    "**Enter the text shown in the image below:**",
    new Discord.MessageAttachment(captcha.PNGStream, "captcha.png")
  );
  let collector = msg.channel.createMessageCollector(m => m.author.id === msg.author.id);
  collector.on("collect", m => {
    if (m.content.toUpperCase() === captcha.value) msg.channel.send("Verified Successfully!");
    else msg.channel.send("Failed Verification!");
    collector.stop();
  })
}
 

client.on("ready", () => {
    console.log("Watching " + CHANNEL_ID.length + " Channels")
})

const notifier = new YouTubeNotifier({
    hubCallback: 'https://necessary-probable-slouch.glitch.me/yt',
    secret: 'JOIN_MY_SERVER_OR_DIE'
});

notifier.on('notified', data => {
    console.log('New Video');
    client.channels.cache.get(SERVER_CHANNEL_ID).send(
        `**${data.channel.name}** Dream just uploaded a new video - **${data.video.link}**`
    );
});

notifier.subscribe(CHANNEL_ID);

app.use("/yt", notifier.listener());

const prefix = '-';

const fs = require('fs');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Dream UHC is online!');
    client.user.setActivity('Dream UHC TV', { type: 'WATCHING' });
    memberCounter(client);
});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if (command == 'youtube') {
        client.commands.get('youtube').execute(message, args);
    } else if (command == 'twitter') {
        client.commands.get('twitter').execute(message, args);
    } else if (command == 'instagram') {
        client.commands.get('instagram').execute(message, args);
    } else if (command == 'xd') {
        client.commands.get('xd').execute(message, args);
    } else if (command == 'team') {
        client.commands.get('team').execute(message, args);
    } else if (command === 'phone') {
        client.commands.get('phone').execute(message, args);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command == 'invite') {
        client.commands.get('invite').execute(message, args);
    } else if (command == 'twitch') {
        client.commands.get('twitch').execute(message, args);
    } else if (command == 'youtubebbh') {
        client.commands.get('youtubebbh').execute(message, args);
    } else if (command == 'twitchbbh') {
        client.commands.get('twitchbbh').execute(message, args);
    } else if (command == 'instagrambbh') {
        client.commands.get('instagrambbh').execute(message, args);
    } else if (command == 'twitterbbh') {
        client.commands.get('twitterbbh').execute(message, args);
    } else if (command == 'twitchsapnap') {
        client.commands.get('twitchsapnap').execute(message, args);
    } else if (command == 'twittersapnap') {
        client.commands.get('twittersapnap').execute(message, args);
    } else if (command == 'youtubesapnap') {
        client.commands.get('youtubesapnap').execute(message, args);
    } else if (command == 'instagramsapnap') {
        client.commands.get('instagramsapnap').execute(message, args);
    } else if (command == 'twitchgeorge') {
        client.commands.get('twitchgeorge').execute(message, args);
    } else if (command == 'twittergeorge') {
        client.commands.get('twittergeorge').execute(message, args);
    } else if (command == 'youtubegeorge') {
        client.commands.get('youtubegeorge').execute(message, args);
    } else if (command == 'instagramgeorge') {
        client.commands.get('instagramgeorge').execute(message, args);
    } else if (command == 'merch') {
        client.commands.get('merch').execute(message, args);
    } else if (command == 'merchbbh') {
        client.commands.get('merchbbh').execute(message, args);
    } else if (command == 'merchgeorge') {
        client.commands.get('merchgeorge').execute(message, args);
    } else if (command == 'youtooz') {
        client.commands.get('youtooz').execute(message, args);
    } else if (command == 'youtoozgeorge') {
        client.commands.get('youtoozgeorge').execute(message, args);
    } else if (command == 'youtoozbbh') {
        client.commands.get('youtoozbbh').execute(message, args);
    } else if (command == 'youtoozsapnap') {
        client.commands.get('youtoozsapnap').execute(message, args);
    } else if (command === 'verify') {
        client.commands.get('verify').execute(message, args);
    }

});

client.login(process.env.DISCORD_TOKEN);