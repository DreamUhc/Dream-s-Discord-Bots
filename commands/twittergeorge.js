module.exports = {
    name: 'twittergeorge',
    description: "send the twitter george link!",
    execute(message, args){
        message.channel.send('https://twitter.com/GeorgeNotFound');
    }
}