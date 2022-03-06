import { Context } from "grammy";
import { keyBoardMarkup, tailOrHead } from "../utils/core";

export async function startHandler(ctx:Context) {
    ctx.replyWithChatAction("typing");
    await ctx.reply(`Hello ${ctx.from.first_name}! So, tail or head?`, keyBoardMarkup);
}

export async function toss(ctx:Context) {
    ctx.replyWithChatAction("typing");
    await ctx.reply(`Here we go!`);
    ctx.replyWithChatAction("typing");

    const userText = ctx.message.text.toLowerCase();
    const result = tailOrHead().toLowerCase();

    if (userText == result) {
        await ctx.reply(`You win!`);
    } else {
        await ctx.reply(`You lose!`);
    }

    await ctx.reply(`Coin lands on <b>${result}</b> 🪙`, {
        parse_mode: "HTML"
    });
}

export async function tossHelper(ctx:Context) {
    ctx.replyWithChatAction("typing");
    await ctx.reply(`So, tail or head?`, keyBoardMarkup );
}