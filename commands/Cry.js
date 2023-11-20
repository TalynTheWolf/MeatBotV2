const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('Cry')
        .setDescription('Sends "Cry About It Platypus" into the chat, because its funny'),
    async execute(interaction) {
        await interaction.reply("https://tenor.com/en-GB/view/cry-about-it-cry-about-it-beaver-gif-20935280");
    }
}