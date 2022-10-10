function user_response(screen_id, text_array) {
    var txt_st = '                            <div class="d-flex align-items-end justify-content-center action_block">\n' +
        '\n' +
        '                                <div class="block-action block-action_style hidden block-action-user replacement_block blank_handler">\n' +
        '                                    <div class="action_title d-flex align-content-center justify-content-between">\n' +
        '                                        <div class="d-flex align-items-center">\n' +
        '                                            <i class="bi bi-chat mx-2"></i>\n' +
        '                                            <span>Bot request</span>\n' +
        '                                        </div>\n' +
        '\n' +
        '                                    </div>\n' +
        '                                    <div class="action_body text-field d-flex align-items-center">\n' +
        '                                        <div class="d-flex align-items-center"> You have to add any responses block to display it here\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <div class="block-action block-action_style may_remove block-action-user">\n' +
        '                                    <div class="action_title d-flex align-content-center justify-content-between">\n' +
        '                                        <div class="d-flex align-items-center">\n' +
        '                                            <i class="bi bi-inbox mx-2"></i>\n' +
        '                                            <span>User response</span>\n' +
        '                                        </div>\n' +
        '                                        <div class="ms-auto d-flex align-items-center">\n' +
        '                                            <div   data-id="' + screen_id + '" class="info_icon d-flex intent_trigger align-items-center justify-content-center">\n' +
        '                                                <i\n' +
        '                                                        class="bi bi-gear mx-3"></i>\n' +
        '                                            </div>\n' +
        '                                            <div class="info_icon d-flex align-items-center justify-content-center"><i\n' +
        '                                                    class="bi bi-trash remove mx-3"></i>\n' +
        '                                            </div>\n' +
        '\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                    <div class="action_body radius-5">'


    var txt_end = '</div>\n' +
        '                                </div>\n' +
        '                                <div class="emoji user_emoji">\n' +
        '                                    <img src="static/img/media/person_1f9d1.png">\n' +
        '                                </div>\n' +
        '\n' +
        '                            </div>'


    var html = [txt_st]

    $.each(text_array, function (index, content) {

        if (index == text_array.length - 1) {
            var flag = true
        } else {
            var flag = false
        }
        var connection_link = content.connection.child_screen
        var connection_type = content.connection.connection_type
        html.push(intense(content, screen_id, flag, connection_link, connection_type))

    })
    html.push(txt_end)
    var html_array = ''
    $.each(html, function (index_element, html_code) {
        html_array += html_code
    });
    return html_array;
}

function intense(text, screen_id, last = false, connection, connection_type) {
    console.log(text)
    if (last) {
        var data = '                                        <div class="intent-element d-flex justify-content-between">\n' +
            '                                            <div class="intent-content">' + text.data[0].content_data + '</div>\n' +
            '                                            <div class="additional_info p-0">Connected to<a href="#' + connection + '"\n' +
            '                                                    class="additional_info_list additional_info_style">' + obj[connection].screen_name + '</a>\n' +
            '                                            </div>\n' +
            '                                        </div>\n'
    } else {
        var data = '                                        <div class="intent-element d-flex justify-content-between border-bottom">\n' +
            '                                            <div class="intent-content">' + text.data[0].content_data + '</div>\n' +
            '                                            <div class="additional_info p-0">Connected to<a href="#' + connection + '"\n' +
            '                                                    class="additional_info_list additional_info_style">' + obj[connection].screen_name + '</a>\n' +
            '                                            </div>\n' +
            '                                        </div>\n'
    }


    return data
}

function intent_element(first = '', name = {'content_data': "", 'content_type': "example"}) {
    if (name.content_type === 'template') {
        var class_new = 'bi-braces-asterisk'
    } else if (name.content_type === 'example') {
        var class_new = 'bi-chat-right-quote'
    } else {
        var txt_any = ''
        return txt_any
    }

    var txt = '                                            <div class="d-flex may_remove another accordion-element">\n' +
        '                                                <div class="d-flex intent_data align-items-center">\n' +
        '                                                    <button class="intent_type_style intent_type">\n' +
        '                                                        <i class="bi ' + class_new + ' mx-2"></i>\n' +
        '\n' +
        '                                                    </button>\n' +
        '                                                    <div class="intent-content">\n' +
        '                                                        <input placeholder="Enter the placeholder" class="input_intent ' + first + '"\n' +
        '                                                               type="text" name="' + name.content_data + '" value="' + name.content_data + '"/>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '                                                <div class="info_icon remove_button d-flex align-items-center justify-content-center">\n' +
        '                                                    <i\n' +
        '                                                            class="bi bi-trash mx-3"></i>\n' +
        '                                                </div>\n' +
        '                                            </div>\n'
    return txt
}

function intent_detailed(intents = {
                             'connection': {'child_screen': '1', 'connection_type': 'screen'}, 'data': [
                                 {'content_data': "", 'content_type': "template"}
                             ]
                         }
) {
    var html_array = ''
    if (intents.connection.child_screen !== '') {
        var link = obj[intents.connection.child_screen].screen_name
        var name = intents.data[0].content_data
        var show = ''
        var acc_show = ''

    } else {
        var link = 'Not set'
        var name = ''
        var show = 'accordion_item_show'
        var acc_show = 'hidden'


    }

    $.each(intents.data, function (index_element, data) {
        console.log(index_element)
        if (index_element === 0) {
            html_array += intent_element('name_dublicate', data)

        } else {
            html_array += intent_element('', data)

        }
    });

    var tmp = ''
    var flag = ''
    var add_class = 'any_request'
    if (intents.data[0].content_type !== 'else') {
        tmp = '                                        <div class="d-flex align-items-start intent_example justify-content-between">\n' +
            '                                            <div class="intent_example_add on_hover_intent">Add new example</div>\n' +
            '                                        </div>\n'
        flag = '<div class="info_icon remove d-flex align-items-center justify-content-center">\n' +
            '                                                    <i class="bi bi-trash mx-3"></i>\n' +
            '                                                </div>'
        add_class = ''

    }
    var screen_menu = '                                                        <div class="screen_list">\n' + screen_array(screens) +
        '<div class="hidden screen_id_link info">No data was found</div>' +
        '                                                        </div>\n'
    var intent = '                                <div class="accordion_item may_remove another ' + show + '">\n' +
        '                                    <div class="intent-element d-flex justify-content-between border-bottom ">\n' +
        '                                        <div class="d-flex align-items-center"><i class="bi bi-chevron-up mx-2"></i>\n' +
        '                                            <div class="intent-content">' + intents.data[0].content_data + '</div>\n' +
        '                                        </div>\n' +
        '                                        <div class="d-flex align-items-center">\n' +
        '                                            <div class="additional_info p-0 d-flex align-items-center ' + acc_show + '">Connected to<span\n' +
        '                                                    class="additional_info_list additional_info_style ">' + link + '</span>\n' +
        '\n' + flag +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                    <div class="intent_accordion white_back border-bottom">\n' +
        '                                        <div class="setting_intent">\n' + html_array +
        '                                           <div class="d-flex hidden blank_handler accordion-element">\n' +
        '                                                <div class="d-flex intent_data align-items-center">\n' +
        '                                                    <button class="intent_type_style intent_type">\n' +
        '                                                        <i\n' +
        '                                                                class="bi bi-chat-right-quote mx-2"></i>\n' +
        '\n' +
        '                                                    </button>\n' +
        '                                                    <div class="intent-content">\n' +
        '                                                        <input placeholder="Enter the placeholder" class="input_intent"\n' +
        '                                                               type="text" name="fruit" value=""/>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '                                                <div class="info_icon remove_button d-flex align-items-center justify-content-center">\n' +
        '                                                    <i\n' +
        '                                                            class="bi bi-trash mx-3"></i>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' + tmp +
        '                                        <div class="setting_connection">\n' +
        '                                    <label class="screen_info">Set the screen name to connect</label>' +
        '\n' +
        '                                            <div class="d-flex accordion-element">\n' +
        '                                                <div class="d-flex intent_data align-items-center">\n' +
        '                                                    <button class="intent_type_style connection_type">\n' +
        '                                                        <i class="bi bi-link mx-2"></i>\n' +
        '                                                    </button>\n' +
        '                                                    <div class="intent-content connection_field not_show">\n' +
        '                                                        <input placeholder="Enter the Screen name you would connect"\n' +
        '                                                               class="input_intent search_screen '+add_class+'"\n' +
        '                                                               type="text" value="'+link+'"/>\n' + screen_menu +
        '                                                    </div>\n' +
        '                                                    <div class="info_icon d-flex align-items-center justify-content-center">\n' +
        '                                                        <div class="info_icon d-flex align-items-center justify-content-center">\n' +
        '                                                            <i class="bi bi-x mx-3"></i>\n' +
        '                                                        </div>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>'
    return intent
}
