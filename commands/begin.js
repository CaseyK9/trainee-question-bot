// View License

const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
 if (message.guild.id == "733052529255907330") {
  function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
 const finishedI = false
 const finishedItext = ""
 const finishedII = false
 const finishedIItext = ""
 const finishedIII = false
 const finishedIIItext = ""
 const finishedIV = false
 const finishedIVtext = ""

  message.channel.send("Now beginning the training.\n Please take a moment to read this handbook.\n When complete, say **done**.\n Link unavailable, and will be added soon.");
  const collector = message.channel.createMessageCollector(message.channel, m => m.author.id === message.author.id, { time: 70000 });
  console.log(collector)
  wait(60000)
  collector.on('collect', message => {
    if (message.content == "done") {
      message.channel.send("Perfect! Now, we will be doing some scenarios. Act like I am a client.")
      finishedI = true
      finishedItext == "Complete Stage I"
    }
  }) 
  if (finishedI == true) {
  message.channel.send("Q: hi whats the cost for dis livery https://cdn.discordapp.com/attachments/725547351875256370/733055410050957332/2Q.png\n Please answer below.")
  collector.on('collect', message => {
    message.channel.send("Okay, now we are going to the trolling stage.")
    finishedII = true
    finishedIItext = message
  })
 }
  if (finishedII == true) {
    message.channel.send("Q: cool wanna know why i chose virgin atlantic? becuase u a virgin haha noob")
    collector.on('collect', message => {
      message.channel.send("Awaiting next question")
      finishedIII = true
      finishedIIItext = message
    })
  }
  if (finishedIII = true) {
    message.channel.send("Nice, please say **done** to submit your response.")
    collector.on('collect', message => {
      finishedIV = true
      finishedIVtext = "Completed Response"
    })
  }
  if (finishedIV = true) {
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.id, message.guild.iconURL)
    .setColor("3498db")
    .setImage(client.AvatarURL)
    .setFooter(`Bot created by @Princess Muednei of Huthekeri🦊#0001`, "https://i.postimg.cc/FRVdCCGd/886bc50131c66e0eff9cee091bb9bc9d.jpg")               
    .addField("Stage I Status", finishedItext, true)
    .addField("Stage II Responses", finishedIItext, true)
    .addField("Stage III Responses", finishedIIItext, true)
    .addField("Stage IV Status", finishedIVtext, true)
  
  client.channels.get("733058873061015713").send(embed)
  // message.channel.send(embed)
  }
}
}

module.exports.help = {
    name: "begin",
    description: "Begin training",
    usage: "begin",
    type: "Utility"
}
