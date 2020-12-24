module.exports = {
    name: 'twittersapnap',
    description: "send the sapnap twitter link!",
    execute(message, args){
        message.channel.send('https://twitter.com/sapnap');
    }
}