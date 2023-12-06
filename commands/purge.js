const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Deletes a specified number of messages from a channel. A la 1984.')
        .addIntegerOption(option =>
            option
                .setName('number')
                .setDescription('Number of msgs to yeet.')
                .setMinValue(1)
                .setMaxValue(99)
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

    async execute(interaction) {

        const number = interaction.options.getInteger('number')

        let { size } = await interaction.channel.bulkDelete(number)
        await interaction.reply({ content: `1984'd ${size} Messages. You Monster.`, ephemeral:true })
    }
}
