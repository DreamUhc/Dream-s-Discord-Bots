module.exports = {
    name: 'phone',
    description: "send the phone number!",
    execute(message, args){
        message.channel.send('+1 417-763-9163');
    }
}