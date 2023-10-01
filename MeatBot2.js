const fs = require('node:fs');
const path = require('node:path');
const {Client, Collection, Events, GatewayIntentBits, ActivityType} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

// Login Process
const dotenv = require('dotenv');
dotenv.config();
client.login(process.env.DISCORD_TOKEN);

client.on("ready", () => {
    console.log("Bot Is Running")
})

client.once('ready', () => {
    client.user.setStatus('dnd'),
    client.user.setPresence({
        activities: [{name: "meatmeatmeatmeatmeatmeatmeatmeatmeatmeatmeatmeatmeat", type: ActivityType.Playing}]
    })
});



/////////////////////////////////
///           MEAT            ///
/////////////////////////////////

const MeatImages = []; // Array of funny meat images
    MeatImages[0]= "https://64.media.tumblr.com/ee15586dab162e6455a8bd17e46de6db/8aa6ec497162d87b-8b/s400x600/f88a55fe902938b6479f577e74278914f26bc08c.jpg"
    MeatImages[1]= "https://pbs.twimg.com/media/CytPbY-WIAUZB4p.jpg"
    MeatImages[2]= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4STh_yCnhb0vT_FnO1FCCRMFErJT0_7BNwA&usqp=CAU"
    MeatImages[3]= "https://preview.redd.it/1sjigqqb8lm71.jpg?auto=webp&s=6791891682cf6ffbd62e2d52d9a2c0d7febfd031"
    MeatImages[4]= "https://i.redd.it/q7qxei1mg7551.jpg"
    MeatImages[5]= "https://64.media.tumblr.com/be4939d459a2a6861f5f2bf3b937ffa0/f84bc62933c25b3e-32/s500x750/b5ea47885311d467cd0f1be333dfc05b65855921.png"
    MeatImages[6]= "https://images3.memedroid.com/images/UPLOADED356/6099d93f10711.jpeg"
    MeatImages[7]= "https://media.tenor.com/oIkyh_1Dw2MAAAAM/salt-bae-nusret-g%C3%B6k%C3%A7e.gif"
    MeatImages[8]= "https://media.discordapp.net/attachments/836537253030526998/897164628767932486/image0.jpg?width=683&height=683"
    MeatImages[9]= "https://media.tenor.com/C8MpzwDxl40AAAAM/ltg-low-tier-god.gif"
    MeatImages[10]= "https://i.kym-cdn.com/photos/images/original/002/339/616/255.jpg"
    MeatImages[11]= "https://images3.memedroid.com/images/UPLOADED434/6122284256a69.jpeg"
    MeatImages[12]= "https://i.redd.it/wzj02fns78s21.jpg"

const MeatPuns = []; // Array of shitty ChatGPT meat puns from Camina
    MeatPuns[0]= "Why did the steak get arrested? It was caught *grill-ty* as charged!"
    MeatPuns[1]= "The steak couldn't escape its fate; it was *sirloin* behind bars!"
    MeatPuns[2]= "What did the steak say to the chef in prison? *I'm done, well-done, that is!*"
    MeatPuns[3]= "Why did the steak refuse to escape from jail? It didn't want to *t-bone* a fugitive!"
    MeatPuns[4]= "Did you hear about the steak that became a jailbird? It got involved in some *prime rib*ery!"
    MeatPuns[5]= "The steak tried to break out of prison but got caught in a *meat-lock*."
    MeatPuns[6]= "What did the steak say to its fellow inmates? *We're all in this porter-house together!*"
    MeatPuns[7]= "*grill*ty as charged"

client.on("messageCreate", message => { // When lockered person sends msg in Meatlocker, will send a meat image and meat pun into the locker, reply @'ing them
    if(message.channel.id === "1047425498734678097"){
        if(message.member.roles.cache.has("876619639323525190")){
            var MeatImgRNG = Math.floor(Math.random() * 12)
            var MeatPunRNG = Math.floor(Math.random() * 7)
            //console.log(MeatImgRNG) // Debug line
            //console.log(MeatPunRNG) // Debug line
            message.reply(MeatImages[MeatImgRNG])
            message.reply(MeatPuns[MeatPunRNG])
            
            /// LEGACY FEATURE, NO LONGER USED ///     // DM's person who sent msg in locker a "you are retarded" gif and funny msg
            //message.channel.type === ('dm') + message.author.send("get meated idiote!!!!!!!!!") // I'm hilarious
            //message.channel.type === ('dm') + message.author.send("https://media.discordapp.net/attachments/856331963157970964/1112877314267676672/badwordhx6ktwysn81.gif")
        }
    }
})

/////////////////////////////////
///JOIN / LEAVE LOGGING MODULE///
/////////////////////////////////

client.on("guildMemberAdd", member => { // Detects a member joining the server and reports it in the Moderator section // UPDATE // Also adds the member role
    const ReportChannel = member.guild.channels.cache.get("947646342191271966")
    const MemberUsername = member.user.username
    const MemberID = member.user.id
    const MemberRole = member.guild.roles.cache.get("849230824863170571")
    ReportChannel.send("<@" + MemberID + "> joined the server. Username is " + MemberUsername)
    member.roles.add(MemberRole)

    // Sends a funi welcome message to #general_public
    const GenPubChannel = member.guild.channels.cache.get("1136582618008277092")
    GenPubChannel.send("Welcome to the Aryx Madhouse, <@" + MemberID + ">. Good luck.")
})

client.on("guildMemberRemove", member => { // Detects a member leaving the server and reports it in the Moderator section
    const ReportChannel = member.guild.channels.cache.get("947646342191271966")
    const MemberUsername = member.user.username
    const MemberID = member.user.id
    ReportChannel.send("<@" + MemberID + "> left the server. Username is " + MemberUsername)

    // Sends a funi "member left" message to #general_public
    const GenPubChannel = member.guild.channels.cache.get("1136582618008277092")
    GenPubChannel.send("<@" + MemberID + "> left the server. Probably a good decision tbh.")
})

/////////////////////////////////
///  ADD MEMBER ROLE MODULE   ///        /// LEGACY MODULE, NO LONGER USED ///
/////////////////////////////////

//client.on("guildMemberAdd", member => { // Adds Member role to new users after 5 minutes
//    const MemberRole = member.guild.roles.cache.get("849230824863170571")
//    setTimeout(() => {
//        member.roles.add(MemberRole)
//        const ReportChannel = member.guild.channels.cache.get("947646342191271966")
//        const MemberID = member.user.id
//        ReportChannel.send("<@" + MemberID + "> has been given the Member role.")
//    }, "300000")
//})

/////////////////////////////////
///         COMMANDS          ///
/////////////////////////////////

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(` // WARNING // The command at ${filepath} is missing a required "data" or "execute" property.`)
    }
}

client.on(Events.InteractionCreate, interaction => {
    if (!interaction.isChatInputCommand()) return;
    console.log("Command used");
})

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true});
        } else {
            await interaction.reply({ conent: 'There was an error while executing this command!', ephemeral: true});
        }
    }

    
})



// Meatlocker Channel ID = 1047425498734678097
// Meatlocker Role ID = 876619639323525190
// Automod Channel ID = 947646342191271966

// Test Channel ID = 1028474477333459025