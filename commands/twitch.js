module.exports = {
    name: 'twitch',
    description: "send the twitch link!",
    execute(message, args){
        message.channel.send('https://www.twitch.tv/dreamwastaken');
    }
}