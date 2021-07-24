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

<a:king:864136523410571295>|**User Commands**
\`${PREFIX}ping\`   **-**   \`${PREFIX}avatar\`   **-**   \`${PREFIX}invite\`
\`${PREFIX}prefix\`   **-**   \`${PREFIX}uptime\`
\`${PREFIX}se (emoji)\`   **-**   \`${PREFIX}invites\`

<a:musi:866985988181458944>|**Music Commands**
\`${PREFIX}play\`   **-**   \`${PREFIX}skip\`   **-**   \`${PREFIX}volume\`   

\`${PREFIX}leave\`   **-**   \`${PREFIX}remove\`   **-**   \`${PREFIX}queue\`
\`${PREFIX}filter\`   **-**   \`${PREFIX}loop\`   **-**   \`${PREFIX}lyrics\`
\`${PREFIX}radio\`   **-**   \`${PREFIX}search\`   **-**   \`${PREFIX}shuffle\`

<a:emoji_198:864142516734263296>|**Moderation Commands**
\`${PREFIX}lock\`  **-**  \`${PREFIX}unlock\`  
\`${PREFIX}slowmode\`

<a:link:864142531758260234>|**Links**
[support](https://discord.gg/EE5q5EF3PW)    -    [invite](https://discord.com/api/oauth2/authorize?client_id=866028690915590164&permissions=8&scope=bot)`)
https://cdn.discordapp.com/attachments/864165734505513000/868528772918411304/image0.gif
 //  .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
