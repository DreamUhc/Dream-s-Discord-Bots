module.exports = {
    name: 'instagram',
    description: "send the instagram link!",
    execute(message, args){
        message.channel.send('https://www.instagram.com/dreamwastaken/');
    }
}