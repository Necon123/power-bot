const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
 PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**oPoRo Help**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
  //  .setThumbnail(`https://media.discordapp.net/attachments/790836700561670145/843616964106911794/image0.gif`)
  /// .setImage(`https://media.discordapp.net/attachments/790836700561670145/823721979629535233/image0.gif`)
    .setAuthor(`Power`, `https://media.discordapp.net/attachments/790836700561670145/843599820807208970/image0.gif`)
    .setDescription(`

⚙️|**User Commands**
> \`${PREFIX}ping\`    **-**   \`${PREFIX}avatar\`   **-**   \`${PREFIX}invite\`
> \`${PREFIX}prefix\`  **-**   \`${PREFIX}uptime\`  
> \`${PREFIX}se\`      **-**   \`${PREFIX}invites\`

🎶|**Music Commands**
> \`${PREFIX}play\`    **-**   \`${PREFIX}skip\`     **-**   \`${PREFIX}volume\`   
> \`${PREFIX}leave\`   **-**   \`${PREFIX}remove\`   **-**   \`${PREFIX}queue\`
> \`${PREFIX}filter\`  **-**   \`${PREFIX}loop\`     **-**   \`${PREFIX}lyrics\`
> \`${PREFIX}radio\`   **-**   \`${PREFIX}search\`   **-**   \`${PREFIX}shuffle\`

<:cute:876501535566221343>|**Gif Commands**
> \`${PREFIX}boy\`    **-** \`${PREFIX}girl\`
> \`${PREFIX}neon\`   **-** \`${PREFIX}couple\`
> \`${PREFIX}anime\`  **-** \`${PREFIX}cartoon\` 


⚒️|**Moderation Commands**
> \`${PREFIX}lock\`   **-**  \`${PREFIX}unlock\`  
> \`${PREFIX}ban\`    **-**  \`${PREFIX}ban\`    
> \`${PREFIX}slowmode\`

<a:link:864142531758260234>|**Links**
[support](https://discord.gg/EE5q5EF3PW)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=866028690915590164&permissions=8&scope=bot)`)

 //  .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
