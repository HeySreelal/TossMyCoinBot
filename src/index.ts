import * as dotenv from 'dotenv';
dotenv.config({
    path: `${__dirname}/../.env`
});


import bot from "./config/config";
import { startHandler, toss } from "./handlers/main";

bot.command("start", startHandler);
bot.hears(/(tails?)|(heads?)/gmi, toss);
bot.start();

console.log("Bot started");