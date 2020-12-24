module.exports = {
    name: 'instagramgeorge',
    description: "send the george instagram link!",
    execute(message, args){
        message.channel.send('https://www.instagram.com/GeorgeNotFound/');
    }
}