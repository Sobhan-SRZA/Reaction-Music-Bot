/**
 * Express
*/
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Yaro Botet Run Shod!'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost/${port}`)
);

/**
 * Module Imports
 */
const Discord = require("discord.js");
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android";
const fs = require("fs");
const { join } = require("path");
const clc = require("cli-color");
const { TOKEN, PREFIX, LOCALE } = require("./util/AdUtil");
const path = require("path");
const i18n = require("i18n");
const client  = new Discord.Client({
  disableMentions: "everyone",
  restTimeOffset: 0
});
require('discord-buttons')(client);
client.config = require('./config');
client.login(TOKEN);
client.commands = new Discord.Collection();
client.prefix = PREFIX;
client.queue = new Map();
client.cooldowns = new Discord.Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

i18n.configure({
  locales: ["ar", "de", "en", "es", "fr", "it", "ko", "nl", "pl", "pt_br", "ru", "sv", "tr", "zh_cn", "zh_tw"],
  directory: path.join(__dirname, "locales"),
  defaultLocale: "en",
  objectNotation: true,
  register: global,

  logWarnFn: function (msg) {
    console.log("warn", msg);
  },

  logErrorFn: function (msg) {
    console.log("error", msg);
  },

  missingKeyFn: function (locale, value) {
    return value;
  },

  mustacheConfig: {
    tags: ["{{", "}}"],
    disable: false
  }
});


/**
 * Import all commands
 */
fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});
try {
    const stringlength = 69;
    console.log("\n")
    console.log(clc.yellowBright(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`))
    console.log(clc.yellowBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.yellowBright("┃"))
    console.log(clc.yellowBright(`     ┃ `) + clc.greenBright(`                   ${clc.magentaBright(client.commands.size)} Commands Is Loaded!!`) + " ".repeat(-1 + stringlength - ` ┃ `.length - `                   ${client.commands.size} Commands Is Loaded!!`.length) + clc.yellowBright("┃"))
    console.log(clc.yellowBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.yellowBright("┃"))
    console.log(clc.yellowBright(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
  } catch { /* */ }
  try{
    const stringlength = 69;
    var FilesLength = new Map();
    fs.readdirSync('./events').forEach(dirs => {
      const events = fs.readdirSync(`./events/${dirs}`).filter(files => files.endsWith('.js'));
      for (const file of events) {
          const event = require(`./events/${dirs}/${file}`);
          FilesLength.set(event);
          client.on(file.split(".")[0], event.bind(null, client));
      };
  });
try {
    console.log("\n")
    console.log(clc.greenBright(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`))
    console.log(clc.greenBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.greenBright("┃"))
    console.log(clc.greenBright(`     ┃ `) + clc.cyanBright(`                   Welcome to DJ Boy!`) + " ".repeat(-1 + stringlength - ` ┃ `.length - `                   Welcome to DJ Boy!`.length) + clc.greenBright("┃"))
    console.log(clc.greenBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.greenBright("┃"))
    console.log(clc.greenBright(`     ┃ `) + clc.cyanBright(`             /-/ By Mr.SIN RE AND SIZAR Team /-/`) + " ".repeat(-1 + stringlength - ` ┃ `.length - `             /-/ By Mr.SIN RE AND SIZAR Team /-/`.length) + clc.greenBright("┃"))
    console.log(clc.greenBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.greenBright("┃"))
    console.log(clc.greenBright(`     ┃ `) + clc.yellowBright(`               /-/ Discord: Mr.SIN RE#1528  /-/`) + " ".repeat(-1 + stringlength - ` ┃ `.length - `               /-/ Discord: Mr.SIN RE#1528  /-/`.length) + clc.greenBright("┃"))
    console.log(clc.greenBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.greenBright("┃"))
    console.log(clc.greenBright(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
    console.log("\n")
  } catch { /* */ }
  try {
    console.log("\n")
    console.log(clc.yellowBright(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`))
    console.log(clc.yellowBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.yellowBright("┃"))
    console.log(clc.yellowBright(`     ┃ `) + clc.greenBright(`                     Logging into the BOT...`) + " ".repeat(-1 + stringlength - ` ┃ `.length - `                     Logging into the BOT...`.length) + clc.yellowBright("┃"))
    console.log(clc.yellowBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.yellowBright("┃"))
    console.log(clc.yellowBright(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
    console.log("\n")
  } catch { /* */ }
  try {
    console.log("\n")
    console.log(clc.yellowBright(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`))
    console.log(clc.yellowBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.yellowBright("┃"))
    console.log(clc.yellowBright(`     ┃ `) + clc.greenBright(`                   ${clc.redBright(FilesLength.size)} Events Is Loaded!!`) + " ".repeat(-1 + stringlength - ` ┃ `.length - `                   ${FilesLength.size} Events Is Loaded!!`.length) + clc.yellowBright("┃"))
    console.log(clc.yellowBright(`     ┃ `) + " ".repeat(-1 + stringlength - ` ┃ `.length) + clc.yellowBright("┃"))
    console.log(clc.yellowBright(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`))
    console.log("\n")
  } catch { /* */ }
} catch (e) {
  console.log(clc.redBright(String(e.stack)))
}

/** 
 * Anti Crash 
*/
    console.log("\n")
    console.log(clc.red(`Starting AntiCrash`));
    process.on('unhandledRejection', (reason, promise) => {
            console.log(clc.redBright('=== [antiCrash] :: [unhandledRejection] :: [start] ==='));
            console.log(reason);
            console.log(clc.redBright('=== [antiCrash] :: [unhandledRejection] :: [end] ==='));
    });
    process.on('rejectionHandled', (promise) => {
            console.log(clc.redBright('=== [antiCrash] :: [rejectionHandled] :: [start] ==='));
            console.log(promise);
            console.log(clc.redBright('=== [antiCrash] :: [rejectionHandled] :: [end] ==='));
    })
    process.on("uncaughtException", (err, origin) => {
            console.log(clc.redBright('=== [antiCrash] :: [uncaughtException] :: [start] ==='));
            console.log(err);
            console.log(clc.redBright('=== [antiCrash] :: [uncaughtException] :: [end] ==='));
    });
    process.on('uncaughtExceptionMonitor', (err, origin) => {
            console.log(clc.redBright('=== [antiCrash] :: [uncaughtExceptionMonitor] :: [start] ==='));
            console.log(err);
            console.log(clc.redBright('=== [antiCrash] :: [uncaughtExceptionMonitor] :: [end] ==='));
    });
    console.log(clc.greenBright(`AntiCrash Started`));
    console.log("\n")