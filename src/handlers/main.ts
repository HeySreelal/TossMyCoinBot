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

    // Quick fix for "tails" and "heads"
    if(userText.includes(result)) {
        await ctx.reply(`You won!`);
    } else {
        await ctx.reply(`You lost!`);
    }

    await ctx.reply(`Coin lands on <b>${result}</b> 🪙`, {
        parse_mode: "HTML"
    });
}

export async function tossHelper(ctx:Context) {
    ctx.replyWithChatAction("typing");
    await ctx.reply(`So, tail or head?`, keyBoardMarkup );
}