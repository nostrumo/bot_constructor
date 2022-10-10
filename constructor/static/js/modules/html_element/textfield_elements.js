function bot_message(screen_id, text, length, additional_class, id) {
    var txt_block = '                         <div class="may_remove another  block-action_style block-action-bot '+additional_class+'">\n' +
        '                                        <div class="action_title d-flex align-content-center justify-content-between">\n' +
        '                                            <div class="d-flex align-items-center">\n' +
        '                                                <i class="bi bi-chat mx-2"></i>\n' +
        '                                                <span>Bot request</span>\n' +
        '                                            </div>\n' +
        '\n' +
        '                                            <div class="ms-auto d-flex align-items-center">\n' +
        '                                                <div  data-field="'+id+'" data-id="' + screen_id + '" class="info_icon texts_modal d-flex align-items-center justify-content-center">\n' +
        '                                                    <i \n' +
        '                                                            class="bi bi-gear mx-3"></i>\n' +
        '                                                </div>\n' +
        '                                                <div data-id="' + screen_id + '" class="info_icon remove d-flex align-items-center justify-content-center">\n' +
        '                                                    <i\n' +
        '                                                            class="bi bi-trash mx-3"></i>\n' +
        '                                                </div>\n' +
        '\n' +
        '                                            </div>\n' +
        '\n' +
        '                                        </div>\n' +
        '                                        <div class="action_body text-field">\n' +
        '                                            <div>' + text +
        '                                            </div>\n' +
        '                                            <div class="additional_info">1 from <span data-field="'+id+'" data-id="' + screen_id + '" class="additional_info_style texts_modal">' + length + ' text samples</span>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n'
    return txt_block
}

function bot_block(txt_block) {
    var txt = '                            <div class="d-flex align-items-end justify-content-center action_block">\n' +
        '                                <div class="emoji bot_emoji">\n' +
        '                                    <img src="static/img/media/robot_emoji.png">\n' +
        '                                </div>\n' +
        '                                <div class="block-action ">\n' +
        '                                    <div class=" hidden block-action_style block-action-bot replacement_block blank_handler">\n' +
        '                                        <div class="action_title d-flex align-content-center justify-content-between">\n' +
        '                                            <div class="d-flex align-items-center">\n' +
        '                                                <i class="bi bi-chat mx-2"></i>\n' +
        '                                                <span>Bot request</span>\n' +
        '                                            </div>\n' +
        '\n' +
        '                                        </div>\n' +
        '                                        <div class="action_body text-field d-flex align-items-center">\n' +
        '                                            <div> You have to add any request block to display it here\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' + txt_block +
        '                                    <div class="add_action_block block-action-bot_end dotted">\n' +
        '                                        <a class="add_action toggle-sidebar-btn" data-toggle="modal">\n' +
        '                                            <div class="d-flex align-items-center p-3 button_action">\n' +
        '                                                <div class="button-icon rounded-circle d-flex align-items-center justify-content-center">\n' +
        '                                                    <i class="bi bi-plus"></i>\n' +
        '                                                </div>\n' +
        '                                                <div class="ps-3">\n' +
        '\n' +
        '                                        <span\n' +
        '                                                class="text-muted small">Add an action</span>\n' +
        '\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </a>\n' +
        '\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>'
    return txt;
}

function bot_detailed_message(val = '') {
    var txt = '<div class="py-2 d-flex align-items-start">\n' +
        '                                            <i class="bi bi-pen"></i>\n' +
        '                                            <textarea rows="1" placeholder="Enter the bot message"\n' +
        '                                                      class="input_text_area">' + val + '</textarea>\n' +
        '                                            <div class="info_icon remove_button d-flex align-items-center justify-content-center"><i\n' +
        '                                                    class="bi  bi-trash mx-3"></i>\n' +
        '                                            </div>\n' +
        '                                        </div>'
    return txt
}
