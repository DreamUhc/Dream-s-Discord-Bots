module.exports = {
    name: 'twitter',
    description: "send the twitter link!",
    execute(message, args){
        message.channel.send('https://twitter.com/Dream');
    }
}