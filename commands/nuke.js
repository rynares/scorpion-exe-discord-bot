const { ChannelType } = require("discord.js");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = {
  name: "nuke",
  description: "Bulunduğun kanalı yakıp yıkarak küllerinden yeniden yaratır.",
  async execute(message, args, client, config) {
    const guild = message.guild;
    const channel = message.channel;
    const channelName = channel.name;
    const channelParent = channel.parentId;

    await message.delete().catch(() => { });
    await channel.delete().catch(() => { });
    await delay(500);

    try {
      const newChannel = await guild.channels.create({
        name: channelName,
        type: ChannelType.GuildText,
        parent: channelParent,
      });

      for (let i = 0; i < 20; i++) {
        await newChannel.send("Bu kanalın geçmişi silindi. Scorpion'un gazabıyla küllerinden yeniden doğdu.").catch(() => { });
        await delay(300);
      }
    } catch { }
  },
};
