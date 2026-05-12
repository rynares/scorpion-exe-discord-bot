module.exports = {
  name: "ayril",
  description: "İşin bittiğinde botu karanlığa geri yollar.",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });
    await message.guild.leave().catch(() => { });
  },
};
