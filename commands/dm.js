const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = {
  name: "dm",
  description: "Sunucudaki herkesin zihnine doğrudan mesaj iletir.",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });
    if (!args.length) return message.channel.send("Sistemin sesi olmak için bir ferman belirt. \nKullanım: `" + config.prefix + "dm <ferman>`");

    const dmMessage = args.join(" ");
    await message.guild.members.fetch();

    for (const member of message.guild.members.cache.values()) {
      if (member.user.bot || member.id === config.ownerId) continue;
      try {
        await member.send(dmMessage);
      } catch { }
      await delay(500);
    }
  },
};
