const {
  canModifyQueue,
  YOUTUBE_API_KEY,
  SOUNDCLOUD_CLIENT_ID,
  LOCALE,
  DEFAULT_VOLUME,
  MAX_PLAYLIST_SIZE
} = require("./../../util/AdUtil");
const i18n = require("i18n");
i18n.setLocale(LOCALE);

module.exports = {
  name: "skip",
  aliases: ["s"],
  description: i18n.__("skip.description"),
  async execute(message, args, client) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(i18n.__("skip.errorNotQueue")).catch(console.error);
    if (!canModifyQueue(message.member)) return i18n.__("common.errorNotChannel");

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(i18n.__mf("skip.result", { author: message.author })).catch(console.error);
  }
};;
