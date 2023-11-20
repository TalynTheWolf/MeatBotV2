const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('cry')
        .setDescription('Sends "Cry About It Platypus" into the chat, because its funny'),
    async execute(interaction) {
        await interaction.reply("https://media.tenor.com/xAzUYNGEGmQAAAAC/cry-about-it-cry.gif");
    }
}