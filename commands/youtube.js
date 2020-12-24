module.exports = {
    name: 'youtube',
    description: "send the youtube link!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/DreamTraps');
    }
}