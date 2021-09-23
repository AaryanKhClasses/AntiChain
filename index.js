// Importing Modules
const { Client, Intents } = require('discord.js')
const antichain = require('./antichain')
require('dotenv').config()

const client = new Client({ // Creates a new client
    intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES ], // Sets intents
    partials: ['CHANNEL', 'MESSAGE', 'USER'], // Sets partials
})

client.on('ready', () => { // Emits when the client is ready
    console.log(`${client.user.username} is ready!`) // Logs that the bot is ready
    client.user.setActivity(`Chains to Delete`, { type: 'WATCHING' }) // Sets the activity
    antichain(client) // Runs the antichain function
})

client.login(process.env.TOKEN) // Logs in the bot