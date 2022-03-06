const tailOrHead = () => {
    const rand = Math.random();
    return rand > 0.5 ? "Tail" : "Head";
}

const keyBoardMarkup = {
    reply_markup: {
        resize_keyboard: true,
        one_time_keyboard: true,
        keyboard: [
            [{"text": "Tail"}],
            [{"text": "Head"}]
        ],
        input_field_placeholder: "Tail or Head?"
    }
};

export { tailOrHead, keyBoardMarkup };