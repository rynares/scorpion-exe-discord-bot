const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = {
  name: "silici",
  description: "Tüm duygu ve ifadeleri siler (Emoji/Sticker).",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });
    const guild = message.guild;

    console.log(`[SİLİCİ] İfadeler yokediliyor...`);

    // Emojileri sil
    for (const emoji of guild.emojis.cache.values()) {
      try {
        await emoji.delete();
        await delay(200);
      } catch { }
    }

    // Stickerları sil
    for (const sticker of guild.stickers.cache.values()) {
      try {
        await sticker.delete();
        await delay(200);
      } catch { }
    }
  },
};
