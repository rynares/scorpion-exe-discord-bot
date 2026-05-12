const delay = (ms) => new Promise((res) => setTimeout(res, ms));

module.exports = {
  name: "spam",
  description: "Kanala durmaksızın korku aşılar.",
  async execute(message, args, client, config) {
    await message.delete().catch(() => { });
    const spamText = args.length ? args.join(" ") : `Bu krallık artık Scorpion'a ait. Her şey sona erdi. @everyone`;

    for (let i = 0; i < 100; i++) {
      try {
        await message.channel.send(spamText);
      } catch {
        break;
      }
      await delay(200);
    }
  },
};
