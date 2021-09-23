const msgs = []
const msgIDs = []

module.exports = (client) => {
    client.on('messageCreate', (message) => {
        if(message.author.bot || !message.guild) return
        msgs.unshift(message.content)
        msgIDs.unshift(message.id)
        if(msgs.length === 3){
            if(msgs[0] === msgs[1] && msgs[1] === msgs[2]) {
                msgIDs.forEach(id => {
                    message.channel.messages.cache.get(id).delete()
                })
                msgs.length = 0
                msgIDs.length = 0
            } else {
                msgs.length = 0
                msgIDs.length = 0
            }
        }
    })
}