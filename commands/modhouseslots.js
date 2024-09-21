const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('modhouseslots')
        .setDescription('Spin the wheel and get a random retarded slot machine gif')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    async execute(interaction) {

        const SlotsImages = []; // Array for Modhouse Slot Gifs
            SlotsImages[0]= "https://cdn.discordapp.com/attachments/1028474477333459025/1286880315574321152/modhouseslots_var1.gif?ex=66ef8430&is=66ee32b0&hm=a159d10559368fec9ced5e2b1f176535ba4410c0ecefc14380614f28832867b0&" // Misc 1
            SlotsImages[1]= "https://media.discordapp.net/attachments/1028474477333459025/1286891131992408145/modhouseslots_var2.gif?ex=66ef8e43&is=66ee3cc3&hm=84b5803125968196d163dca37bdc3b8335465d5f82ad487a389dfb340135f6f5&=" // Misc 2
            SlotsImages[2]= "https://media.discordapp.net/attachments/1028474477333459025/1286893138908287070/modhouseslots_var3.gif?ex=66ef9021&is=66ee3ea1&hm=7b3f298477f65e911d0a843a9ad8292d3aa19093ac2713244a61c22150c0b68f&=" // Misc 3

        var SlotsImagesRNG = Math.floor(Math.random() * SlotsImages.length);

        await interaction.reply({ content: 'Spinning the wheel...', ephemeral: false });
        await interaction.channel.send(SlotsImages[SlotsImagesRNG]);
    }
}