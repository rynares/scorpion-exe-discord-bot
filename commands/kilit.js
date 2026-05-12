const { PermissionFlagsBits, ChannelType } = require("discord.js");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = {
  name: "kilit",
  description: "Tüm kanalları sessizliğe gömer.",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });
    const guild = message.guild;

    console.log(`[KİLİT] Kanallar mühürleniyor...`);

    for (const channel of guild.channels.cache.values()) {
      if (channel.type === ChannelType.GuildText || channel.type === ChannelType.GuildVoice) {
        try {
          await channel.permissionOverwrites.edit(guild.id, {
            SendMessages: false,
            Speak: false,
            AddReactions: false
          });
          await delay(300);
        } catch { }
      }
    }
  },
};
