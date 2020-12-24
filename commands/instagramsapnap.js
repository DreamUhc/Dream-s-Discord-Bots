module.exports = {
    name: 'instagramsapnap',
    description: "send the sapnap instagram link!",
    execute(message, args){
        message.channel.send('https://www.instagram.com/sapnapinsta/');
    }
}