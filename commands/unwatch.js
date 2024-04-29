const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('unwatch')
        .setDescription('Remove a user from MeatBots Watchlist')
        .addStringOption(option =>
            option
                .setName('target-user')
                .setDescription('user ID of the account to remove')
                .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

    async execute(interaction) {
        const TargetUserID = interaction.options.getString('target-user')
        const ReportChannelID = interaction.guild.channels.cache.get("947646342191271966")
        const WatchlistRoleID = interaction.guild.roles.cache.get("1234309497934188680")

        const guild = interaction.guild
        const member = guild.members.cache.get(TargetUserID)

        member.roles.remove(WatchlistRoleID)
        ReportChannelID.send(":exclamation: User <@" + TargetUserID + "> was removed from my Watchlist.")

        interaction.reply({ content: 'Removing user...', ephemeral: true })
    }
}