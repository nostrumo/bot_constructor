function bot_message(val) {
    var txt = ' <div class="py-2 d-flex align-items-start">\n' +
        '            <i class="bi bi-pen"></i>\n' +
        '            <textarea rows="1" placeholder="Enter the bot message"\n' +
        '                      class="input_text_area">' + val + '</textarea>\n' +
        '            <div class="info_icon remove_button d-flex align-items-center justify-content-center">\n' +
        '                <i\n' +
        '                    class="bi bi-trash mx-3"></i>\n' +
        '            </div>\n' +
        '        </div>'
    return txt;
}

function bot_blank_message() {
    var txt = '<div class="py-2 d-flex align-items-start">\n' +
        '                                            <i class="bi bi-pen"></i>\n' +
        '                                            <textarea rows="1" placeholder="Enter the bot message"\n' +
        '                                                      class="input_text_area"></textarea>\n' +
        '                                            <div class="info_icon remove_button d-flex align-items-center justify-content-center"><i\n' +
        '                                                    class="bi  bi-trash mx-3"></i>\n' +
        '                                            </div>\n' +
        '                                        </div>'
    return txt
}
