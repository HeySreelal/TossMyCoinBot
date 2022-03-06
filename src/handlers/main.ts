import { Context } from "grammy";

const tailOrHead = () => {
    const rand = Math.random();
    return rand > 0.5 ? "Tail" : "Head";
}

export async function startHandler(ctx:Context) {
    ctx.replyWithChatAction("typing");
    await ctx.reply(`Hello ${ctx.from.first_name}! So, tail or head?`, {
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                [{"text": "Tail"}],
                [{"text": "Head"}]
            ],
            input_field_placeholder: "Tail or Head?"
        }
    });
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