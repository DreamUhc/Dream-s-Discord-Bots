module.exports = {
    name: 'twitchsapnap',
    description: "send the sapnap twitch link!",
    execute(message, args){
        message.channel.send('https://www.twitch.tv/sapnap');
    }
}