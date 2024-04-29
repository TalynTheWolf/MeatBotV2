const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('watch')
        .setDescription('Add a suscpicious user to MeatBots Watchlist')
        .addStringOption(option =>
            option
                .setName('target-user')
                .setDescription('User ID of the account for the bot to watch')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

    async execute(interaction) {
        const TargetUserID = interaction.options.getString('target-user')
        const ReportChannelID = interaction.guild.channels.cache.get("947646342191271966")
        const WatchlistRoleID = interaction.guild.roles.cache.get("1234309497934188680")

        const guild = interaction.guild
        const member = guild.members.cache.get(TargetUserID)

        member.roles.add(WatchlistRoleID)
        ReportChannelID.send(":exclamation: User <@" + TargetUserID + "> was added to my Watchlist.")

        interaction.reply({ content: 'Adding user...', ephemeral: true })
    }
}