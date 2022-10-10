function keyboard() {
    var txt_st = '<div class="block-action m-0 block-action_style">\n' +
        '                                <div class="action_body keyboard_block text-field pb-0">'
    var txt_end = '                                    <div class="accordion_item hidden blank_handler">\n' +
        '                                        <div class="d-flex pt-3  align-items-center">\n' +
        '                                            <div> No one button created for this screen\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>'
    return [txt_st, txt_end]

}

function screen_element(id, name) {
    var screen_element = '<div data-screen="' + id + '" class="screen_id_link">' + name + '</div>'
    return screen_element
}

function screen_array(screen_list) {
    var screen_html_list = ''
    $.each(screen_list, function (index_screen, screen) {
        screen_html_list += screen_element(index_screen, screen)
    });
    return screen_html_list
}

function keyboard_key(screen_id, connection, val = '', screen_list = [], last = false) {
    if (screen_id !== ''){
            screen_id='#'+screen_id
    }
    var screen_html_list = screen_array(screen_list)

    if (last) {
        var cl = 'border-bottom'
    } else {
        var cl = ''
    }
    var screens = '                                                      <div class="screen_list">\n' + screen_html_list +
        '                                                                <div class="hidden screen_id_link info">No data was\n' +
        '                                                                    found\n' +
        '                                                                </div>\n' +
        '                                                            </div>\n'
    var txt = '                                    <div class="accordion_item another may_remove ' + cl + '">\n' +
        '                                        <div class="d-flex justify-content-between align-items-start pt-2">\n' +
        '\n' +
        '                                            <div class="pt-2">\n' +
        '                                                <div class="d-flex align-items-start ">\n' +
        '                                                    <i class="bi bi-chevron-up px-2 accordion_button_trigger"></i>\n' +
        '                                                    <div>\n' +
        '                                                                                                            <textarea\n' +
        '                                                                                                                    rows="1"\n' +
        '                                                                                                                    placeholder="Button text"\n' +
        '                                                                                                                    class="input_text_area">' + val + '</textarea>\n' +
        '                                                        <div class="additional_info">Connected to\n' +
        '                                                            <a href="' + screen_id + '" class="additional_info_list connection_field additional_info_style">' + connection + '</a>\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '\n' +
        '                                                </div>\n' +
        '\n' +
        '                                            </div>\n' +
        '                                            <div class="info_icon d-flex align-items-center justify-content-center"><i\n' +
        '                                                    class="bi bi-trash remove mx-3"></i>\n' +
        '                                            </div>\n' +
        '\n' +
        '                                        </div>\n' +
        '                                        <div class="intent_accordion  button_accordion">\n' +
        '\n' +
        '                                            <div class="setting_connection">\n' +
        '                                                <div class="d-flex accordion-element">\n' +
        '                                                    <div class="d-flex intent_data align-items-center">\n' +
        '                                                        <button class="intent_type_style connection_type intent_type_invert">\n' +
        '                                                            <i class="bi bi-link mx-2"></i>\n' +
        '                                                        </button>\n' +
        '                                                        <div class="intent-content b-margin connection_field not_show">\n' +
        '                                                            <input placeholder="Enter the Screen name"\n' +
        '                                                                   class="input_intent input_intent_invert search_screen"\n' +
        '                                                                   type="text" value="' + connection + '"/>\n' +
        '\n' + screens +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '\n' +
        '                                            </div>\n' +
        '\n' +
        '                                        </div>\n' +
        '                                    </div>\n'
    return txt

}

function delimiter() {
    var txt = '                            <div class="delimiter">\n' +
        '                                <div class="keyboard_record">\n' +
        '                                    <div class="d-flex px-auto align-items-center justify-content-center">\n' +
        '                                        <span class="px-2"><i class="bi bi-mouse"> </i>Keyboard buttons</span>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n'
    return txt

}
