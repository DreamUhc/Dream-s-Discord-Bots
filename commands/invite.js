module.exports = {
    name: 'invite',
    description: "send the invite link!",
    execute(message, args){
        message.channel.send('https://discord.com/oauth2/authorize?client_id=789274651955560471&scope=bot&permissions=1912077438');
    }
}