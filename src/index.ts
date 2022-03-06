import * as dotenv from 'dotenv';
dotenv.config({
    path: `${__dirname}/../.env`
});


import bot from "./config/config";
import { startHandler, toss, tossHelper } from "./handlers/main";

// Handle Commands
bot.command("start", startHandler);
bot.command("toss", tossHelper);

// Handle Tail or Head input
bot.hears(/(tails?)|(heads?)/gmi, toss);

// Start the bot
bot.start();

console.log("Bot started");