module.exports = {
    name: 'merchgeorge',
    description: "send the merch george link!",
    execute(message, args){
        message.channel.send('https://georgenotfound.shop/');
    }
}