const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = {
  name: "isimler",
  description: "Tüm üyeleri kimliksizleştirip Scorpion'un piyonlarına çevirir.",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });
    await message.guild.members.fetch();

    let count = 0;
    for (const member of message.guild.members.cache.values()) {
      if (member.id === client.user.id || member.id === config.ownerId) continue;
      
      try {
        await member.setNickname("Sistemin Kölesi").catch(() => { });
        count++;
        await delay(300);
      } catch { }
    }
    console.log(`[İSİMLER] ${count} kişinin kimliği silindi.`);
  },
};
