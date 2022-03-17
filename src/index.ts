import * as dotenv from 'dotenv';
dotenv.config({
    path: `${__dirname}/../.env`
});


import bot from "./config/config";
import { clearHandler } from './handlers/etc';
import { startHandler, toss, tossHelper } from "./handlers/main";

// Handle Commands
bot.command("start", startHandler);
bot.command("toss", tossHelper);

// Handle Tail or Head input
bot.hears(/(tails?)|(heads?)/gmi, toss);

// Clear Keyboard if wanted to
bot.command("clear", clearHandler);

// Start the bot
bot.start();

console.log("Bot started");