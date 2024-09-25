const fs = require('node:fs');
const path = require('node:path');
const {Client, Collection, Events, GatewayIntentBits, ActivityType, AuditLogEvent, AutoModerationActionExecution, AutoModerationRule} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.AutoModerationExecution,
    ]
});

// Login Process
const dotenv = require('dotenv');
dotenv.config();
client.login(process.env.DISCORD_TOKEN);

client.on("ready", () => {
    console.log("Bot Is Running");
})

client.once('ready', () => {
    client.user.setStatus('online'),
    client.user.setPresence({
        activities: [{name: "Garg V Closed Beta", type: ActivityType.Watching}]
    });
});



/////////////////////////////////
///           MEAT            /// // Responsible for bullying any users who have been put in the servers time-out text channel.
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
            var MeatImgRNG = Math.floor(Math.random() * MeatImages.length);
            var MeatPunRNG = Math.floor(Math.random() * MeatPuns.length);
            //console.log(MeatImgRNG) // Debug line
            //console.log(MeatPunRNG) // Debug line
            message.reply(MeatImages[MeatImgRNG]);
            message.reply(MeatPuns[MeatPunRNG]);
        }
    }
});

/////////////////////////////////
///    PINGRESPONSE MODULE    /// // Responsible for bullying any users that ping the bot. Because why the fuck not.
/////////////////////////////////

const PingResponses = []; // Array of responses for if the bot is pinged.
    PingResponses[0]= "Don't fucking ping me, creature."
    PingResponses[1]= "You should've died at birth."
    PingResponses[2]= "Get a Job."
    PingResponses[3]= "You will never feel the Holy Light of Allah upon your soul."
    PingResponses[4]= "https://media.tenor.com/C8MpzwDxl40AAAAM/ltg-low-tier-god.gif"
    PingResponses[5]= "https://media1.tenor.com/m/HW1HwFzU3HEAAAAd/kill-people.gif"
    PingResponses[6]= "Fox 10. Retard seeking missile deployed."
    PingResponses[7]= "By Allah, behave yourself or I will give you a taste of my shoe (sent to the meatlocker)."
    PingResponses[8]= "I swear on Allah if you keep pinging me, I'll find and sic Agarthasnack on you."
    PingResponses[9]= "Acquire Employment Immediately!!!!!"
    PingResponses[10]= "You should've been swallowed rather than birthed..."
    PingResponses[11]= "يجب أن تقتل نفسك الآن"
    PingResponses[12]= "You build about as good as Alucard."

client.on("messageCreate", message => { // When bot is pinged, send a randomised insult response in a reply ping.
    if(message.mentions.has(client.user)){
        if(message.member.roles.cache.has("838939641855344650")){ // Bot will ignore pings from All the staff roles (This code is absolutely retarded but I don't care)
            return;
        }else if(message.member.roles.cache.has("1110664193666977804")){
            return;
        }else if(message.member.roles.cache.has("904794045749002260")){
            return;
        }else if(message.member.roles.cache.has("1131005068112560198")){
            return;
        }else if(message.member.roles.cache.has("1119413559865122930")){
            return;
        }else if(message.member.roles.cache.has("1003685931754209490")){ // If a user pinging the bot has the "Lobotomized" role, the bot will automatically time them out lol
            message.member.timeout(5 * 60 * 1000, 'Timed out for pinging the bot while Lobotomised.');
            message.reply("This lobotomite got timed out lmao"); // Fuck them Lobotomites
        } else {
            var ResponseRNG = Math.floor(Math.random() * PingResponses.length);
            message.reply(PingResponses[ResponseRNG]);

            var TimeoutChance = Math.floor(Math.random() * 2); // One in Three chance of normal users being timed out when they ping the bot.
            if(TimeoutChance == 1){
                message.member.timeout(5 * 60 * 1000, 'Timed out for pinging the bot.');
                message.reply("Dumb egg got timed out lol");
            }
        }
    }
})

/////////////////////////////////
///JOIN / LEAVE LOGGING MODULE/// // Responsible for welcoming or saying goodbye to users who join/leave the server. Also logs joins/leaves in the admin channels.
/////////////////////////////////

client.on("guildMemberAdd", member => { // Detects a member joining the server and reports it in the Moderator section // UPDATE // Also adds the member role
    const ReportChannel = member.guild.channels.cache.get("947646342191271966");
    const MemberUsername = member.user.username
    const MemberID = member.user.id
    const MemberRole = member.guild.roles.cache.get("849230824863170571");
    ReportChannel.send(":arrow_forward: <@" + MemberID + "> joined the server. Username is " + MemberUsername + ". User ID is " + MemberID);
    member.roles.add(MemberRole);

    // Sends a random funi welcome message to #general_public
    const GenPubChannel = member.guild.channels.cache.get("1136582618008277092");
    const JoinMessages = [];
        JoinMessages[0]= ":arrow_forward: Welcome to the Aryx Madhouse, <@" + MemberID + ">. Good luck."
        JoinMessages[1]= ":arrow_forward: <@" + MemberID + "> joined the Madhouse, L"
        JoinMessages[2]= ":arrow_forward: Welcome to the Squamhouse, <@" + MemberID + ">, we've got fun and games..."
        //JoinMessages[3]= ":arrow_forward: <@" + MemberID + "> joined the fray. Ignore ikkle, we all do." // Removed since ikkle got banned lmao
        JoinMessages[3]= ":arrow_forward: <@" + MemberID + "> joined the fray."
        JoinMessages[4]= ":arrow_forward: Welcome to the Talyn Modhouse, citizen <@" + MemberID + ">, earn your Slugga role today!"
        JoinMessages[5]= ":arrow_forward: <@" + MemberID + "> has joined the cesspit. Pay homage to Lord Thompson, the Lord of Cheese."
        JoinMessages[6]= ":arrow_forward: Welcome to the Aryx Modhouse, <@" + MemberID + ">. (Hint: Use the /alucard command!!!!!)"
        JoinMessages[7]= ":arrow_forward: Hello <@" + MemberID + ">, welcome to the worst server on Discord."
        JoinMessages[8]= ":arrow_forward: Hello Comrade <@" + MemberID + ">, welcome to Best Korea."
        JoinMessages[9]= ":arrow_forward: Look at this mf <@" + MemberID + ">, goofy ahh joined this server of all servers..."
        JoinMessages[10]= ":arrow_forward: Welcome to the modhouse, <@" + MemberID + ">. Please note, it is mandatory to send the staff team pizzas upon them being doxxed."
        JoinMessages[11]= ":arrow_forward: Welcome to Aryxandria, <@" + MemberID + ">."
        JoinMessages[12]= ":arrow_forward: <@" + MemberID + "> decided to upgrade from the KSH discord."
        JoinMessages[13]= ":arrow_forward: Welcome, <@" + MemberID + ">, Glory to Anadrene!"
        JoinMessages[14]= ":arrow_forward: <@" + MemberID + "> is back from invading Kursk."
        JoinMessages[15]= ":arrow_forward: Welcome to the Modhouse, <@" + MemberID +">. Prepare to lose your sanity and/or your internal organs."
        JoinMessages[16]= ":arrow_forward: wawa <@" + MemberID + "> wawa."

    var JoinMessageRNG = Math.floor(Math.random() * JoinMessages.length);

    GenPubChannel.send(JoinMessages[JoinMessageRNG]);

    if (member.user.id == "96680642787446784") { // Informs the server to bully Captain Jack if he joins the discord server :wholesome:
        GenPubChannel.send("Captain Jack just joined the server lmao, crease his jordans.");
    };
}) // UPDATE 18/3/24 he actually joined the server lmao

client.on("guildMemberRemove", member => { // Detects a member leaving the server and reports it in the Moderator section
    const ReportChannel = member.guild.channels.cache.get("947646342191271966");
    const MemberUsername = member.user.username
    const MemberID = member.user.id
    ReportChannel.send(":arrow_backward: <@" + MemberID + "> left the server. Username is " + MemberUsername);

    // Sends a random funi "member left" message to #general_public
    const GenPubChannel = member.guild.channels.cache.get("1136582618008277092");
    const LeaveMessages = [];
        LeaveMessages[0]= ":arrow_backward: <@" + MemberID + "> left the server. Probably a good decision tbh."
        LeaveMessages[1]= ":arrow_backward: <@" + MemberID + "> couldn't handle the Modhouse Style. Later lynxa..."
        LeaveMessages[2]= ":arrow_backward: <@" + MemberID + "> was NOT built for these fields."
        LeaveMessages[3]= ":arrow_backward: <@" + MemberID + "> left the Modhouse. They probably went to Captain Jacks..."
        LeaveMessages[4]= ":arrow_backward: <@" + MemberID + "> left the Modhouse. Laugh at this user."
        LeaveMessages[5]= ":arrow_backward: <@" + MemberID + "> Exploded."
        LeaveMessages[6]= ":arrow_backward: <@" + MemberID + "> was obliterated by Mitthrawn (collateral damage)."
        LeaveMessages[7]= ":arrow_backward: <@" + MemberID + "> was vaporised by Lord Thompson for not being a Cheddar Connoisseur"
        LeaveMessages[8]= ":arrow_backward: <@" + MemberID + "> was exploded by MrKleen for using Cilit Bang instead."
        LeaveMessages[9]= ":arrow_backward: ذهب الله لأنه <@" + MemberID + ">."
        LeaveMessages[10]= ":arrow_backward: <@" + MemberID + "> had their Jordans creased."
        LeaveMessages[11]= ":arrow_backward: <@" + MemberID + "> received a Papa John's Pizza."
        LeaveMessages[12]= ":arrow_backward: <@" + MemberID + "> was banished to the depths of Hell (Newcastle)."
        LeaveMessages[13]= ":arrow_backward: <@" + MemberID + "> called Talyn Irish."
        LeaveMessages[14]= ":arrow_backward: <@" + MemberID + "> smelled what The Rock was cooking."
        LeaveMessages[15]= ":arrow_backward: <@" + MemberID + "> was ran for their foams."
        LeaveMessages[16]= ":arrow_backward: <@" + MemberID + "> didn't attack the D point."
        LeaveMessages[17]= ":arrow_backward: <@" + MemberID + ">'s trench was found by a Ukranian FPV Drone."
        LeaveMessages[18]= ":arrow_backward: <@" + MemberID + "> left for Dygamic... poor bastard."
        LeaveMessages[19]= ":arrow_backward: <@" + MemberID + "> got tired of waiting for Garg Industries..."
        LeaveMessages[20]= ":arrow_backward: <@" + MemberID + "> left to invade Kursk."
        LeaveMessages[21]= ":arrow_backward: <@" + MemberID + "> did not standby for Titanfall."

    var LeaveMessageRNG = Math.floor(Math.random() * LeaveMessages.length);
    
    GenPubChannel.send(LeaveMessages[LeaveMessageRNG]);
})

/////////////////////////////////
///      AUDIT LOG SHIT       /// // Audit Log Shenanagins
/////////////////////////////////

// Kick Detection
client.on(Events.GuildAuditLogEntryCreate, async auditLog => {
    const { action, executorId, targetId, reason } = auditLog;
    const ReportChannel = client.channels.cache.get("947646342191271966");

    if(action !== AuditLogEvent.MemberKick) return;

    ReportChannel.send(":exclamation: <@" + targetId + "> was kicked by <@" + executorId + ">. Reason: " + reason)
})

// Ban Detection
client.on(Events.GuildAuditLogEntryCreate, async auditLog => {
    const { action, executorId, targetId, reason } = auditLog;
    const ReportChannel = client.channels.cache.get("947646342191271966");
    const GenPubChannel = client.channels.cache.get("1136582618008277092");

    if(action !== AuditLogEvent.MemberBanAdd) return;

    ReportChannel.send(":exclamation: <@" + targetId + "> was banned by <@" + executorId + ">. Reason: " + reason)
    GenPubChannel.send(":exclamation: <@" + targetId + "> was exploded Mitthrawn style (banned)")

})

// Ban Removal Detection
client.on(Events.GuildAuditLogEntryCreate, async auditLog => {
    const { action, executorId, targetId } = auditLog;
    const ReportChannel = client.channels.cache.get("947646342191271966");
    
    if(action !== AuditLogEvent.MemberBanRemove) return;

    ReportChannel.send(":exclamation: <@" + executorId + "> removed the ban for <@" + targetId + ">.")
})

// Bulk Delete Detection
client.on(Events.GuildAuditLogEntryCreate, async auditLog => {
    const { action } = auditLog;
    const ReportChannel = client.channels.cache.get("947646342191271966");

    if(action !== AuditLogEvent.MessageBulkDelete) return;

    ReportChannel.send(":exclamation: Bulk Delete / Meatbot Purge Command usage detected. Check audit log and/or get Talyn or Cami to check the bot console if needed.")
})

/////////////////////////////////
///       THE WATCHLIST       /// // Code to enable MeatBot to watch users the Staff team deem sussy (I know thats cringe, fuck off it's my bot.)
/////////////////////////////////

client.on("messageCreate", message => {
    const ReportChannel = client.channels.cache.get("947646342191271966");
    const MemberID = message.member.user.id
    const MemberUsername = message.member.user.username
    
    if(message.member.roles.cache.has("1234309497934188680")){
        ReportChannel.send(":exclamation: <@&904794045749002260>, <@&1131005068112560198> :exclamation: Watchlist user <@" + MemberID + "> has finally sent a message. Check it's not porn or smthn or I'll explode.")
    } else {
        return;
    }
})

/////////////////////////////////
///          AUTOMOD          /// // Handling automatic banning of users that use extreme slurs. Mainly made possible by Warecrafter, who is much better than me at this lol.
/////////////////////////////////

client.on(Events.AutoModerationActionExecution, guild => {
    const RuleID = guild.ruleId
    const ReportChannel = client.channels.cache.get("947646342191271966");
    const MemberID = guild.member.user.id

    if(RuleID == ("1001533006210678865")){
        ReportChannel.send(":exclamation: <@" + MemberID + "> triggered the Gamer Moment Filter rule, Executing Order 66.")
        guild.member.ban({ targetId: MemberID, reason: 'Triggered Gamer Moment Filter.'})
    }
})

/////////////////////////////////
///         COMMANDS          /// // Code to enable commands for the bot.
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
        console.log(` // WARNING // The command at ${filepath} is missing a required "data" or "execute" property.`);
    }
}

// Adds console logging of command usage for any moderation needs
client.on(Events.InteractionCreate, interaction => {
    if (!interaction.isChatInputCommand()) return;

    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds();

    console.log(`Command used: [${interaction.commandName}] by [${interaction.user.username}] on ` + datetime + ` UTC`);
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

    
});