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
   if (msg.content.includes("catcher free rules")) {
   const embed = new Discord.RichEmbed()
   .setAuthor("Discord Rules")
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

 client.on("message", (message) => {
      if (message.content.startsWith("catcher kick")) {
          if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: Access denied!")
          var member= message.mentions.members.first();
          member.kick().then((member) => {
              message.channel.send(":thumbsup: " + member.displayName + " has been successfully kicked");
          }).catch(() => {
              message.channel.send("Sorry I can't kick this person!");
          });

      }

  });

 client.on("message", (message) => {
      if (message.content.startsWith("catcher ban")) {
          if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: Access denied!")
          var member= message.mentions.members.first();
          member.ban().then((member) => {
              message.channel.send(":thumbsup: " + member.displayName + " has been successfully banned");
          }).catch(() => {
              message.channel.send("Sorry I can't ban this person!");
          });

      }

  });
 

client.on("message", async message =>{
 // let messageArray = message.content.split(" ");
 // let cmd = messageArray[0].toLowerCase();
 // let args = messageArray.slice(1);
  if(cmd==="!invites") {
  message.guild.fetchInvites()
  .then(invites => message.reply("You currently have " + invites.find(invite => invite.inviter.id === message.author.id).uses + " invites")) }
});
 
 client.login(process.env.BOT_TOKEN);

