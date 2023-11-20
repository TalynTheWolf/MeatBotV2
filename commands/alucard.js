const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('Alucard')
        .setDescription('Shows a ship of all time!!!111!!!1'),
    async execute(interaction) {
        await interaction.reply("https://media.discordapp.net/attachments/838385780421427260/1155679430845419571/image.png");
    }
}