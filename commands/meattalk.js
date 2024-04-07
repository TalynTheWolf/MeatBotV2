const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('meattalk')
        .setDescription('Allows staff to send a message as MeatBot, for some reason idk')
        .addStringOption(option => 
            option
                .setName('text')
                .setDescription('Text to send as MeatBot')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

        async execute(interaction) {
            const MeatText = interaction.options.getString('text')
            
            await interaction.reply({ content: 'Sending as MeatBot...', ephemeral: true });
            await interaction.channel.send(MeatText);
        }
}