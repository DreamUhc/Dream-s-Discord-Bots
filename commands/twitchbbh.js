module.exports = {
    name: 'twitchbbh',
    description: "send the bbh twitch link!",
    execute(message, args){
        message.channel.send('https://www.twitch.tv/badboyhalo');
    }
}