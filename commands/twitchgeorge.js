module.exports = {
    name: 'twitchgeorge',
    description: "send the george twitch link!",
    execute(message, args){
        message.channel.send('https://www.twitch.tv/georgenotfound');
    }
}