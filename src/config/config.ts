import { Bot, Context } from "grammy";

const bot = new Bot<Context>(process.env.TOKEN);

export default bot;