import { Context } from "grammy";

export function clearHandler(ctx: Context) {
    ctx.reply("Done!", {
        reply_markup: {
            remove_keyboard: true,
        },
    });
}
