const { Client, GatewayIntentBits, Collection, ActivityType } = require("discord.js");
const fs = require("fs");
const path = require("path");
const config = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
if (!fs.existsSync(commandsPath)) fs.mkdirSync(commandsPath);

const commandFiles = fs.readdirSync(commandsPath).filter((f) => f.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(path.join(commandsPath, file));
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(` 👑 Bot: ${client.user.tag}`);
  console.log(` 🔥 Prefix: ${config.prefix}`);
  console.log(` 👑 Owner: ${config.ownerId}`);
  console.log(`📦 ${client.commands.size} komut yüklendi.`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  client.user.setPresence({
    activities: [{ name: "👑 Scorpion Krallığını Kuruyor", type: ActivityType.Playing }],
    status: "dnd", // 'Do Not Disturb' kırmızı yapar, daha tehditkar
  });
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  if (!command) return;

  if (message.author.id !== config.ownerId) {
    return message.reply("❌ Sen Scorpion değilsin. Boyun eğ!");
  }

  try {
    await command.execute(message, args, client, config);
  } catch (error) {
    console.error(`❌ [${commandName}] Hata:`, error);
    message.reply("⚠️ Krallıkta bir hata oluştu.").catch(() => {});
  }
});

process.on("unhandledRejection", (error) => {
  console.error("⚠️ İşlenmemiş hata:", error);
});

client.login(config.token);
