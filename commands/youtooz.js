module.exports = {
    name: 'youtooz',
    description: "send the youtooz link!",
    execute(message, args){
        message.channel.send('https://youtooz.com/products/dream');
    }
}