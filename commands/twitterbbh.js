module.exports = {
    name: 'twitterbbh',
    description: "send the bbh twitter link!",
    execute(message, args){
        message.channel.send('https://twitter.com/BadBoyHalo');
    }
}