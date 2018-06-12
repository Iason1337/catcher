const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
	client.user.setPresence({
		game: {
			name: `with stuff`, // Change what the bot is watching or playing.
			type: 0 // 0 for playing, 1 for streaming, 2 for listening and 3 for watching.
		}
	});
	console.log('\nHi! I am CATCHER\nIf you need any help, let me know!');
});



 client.on("message", msg => {
   if (msg.content.includes("catcher rules")) {
   const embed = new Discord.RichEmbed()
   .setAuthor("[GR] Hypixel Discord Rules")
   .addField("Rule #1", "Do not spam")
   .addField("Rule #2", "Do not advertise")
   .addField("Rule #3", "Do not post unreleated hypixel videos on #hypixel-videos")
   .addField("Rule #4", "Do not swear")
   .addField("Rule #5", "Be respectful to every member")
   .setColor(0x004bbc)
     msg.channel.send({embed})
   }
 });
 
 client.on('message', message => {
    if(message.author.bot) return;
    else if (message.member.hasPermission("MANAGE_MESSAGES")) return;
    var re =  /[-a-zA-Z0-9@:%_\+.~#?&  =]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&  =]*)?/gi.exec(message.cleanContent);
    if(re != null){
        message.delete().then(message => {
            message.author.send('Sorry, you cannot include links in your messages');
        });
    }
});
 
 
 client.login(process.env.BOT_TOKEN);

