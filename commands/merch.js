module.exports = {
    name: 'merch',
    description: "send the merch link!",
    execute(message, args){
        message.channel.send('https://dreambranding.com/');
    }
}