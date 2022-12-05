jQuery(document).ready(function () {
    GetScreenData(undefined, true)
    GenerateLeftMenu()

    function CheckAll(element) {
        $(element).parents('.screens_tabs').children().each(function () {
            $(this).removeClass('active');
        });
    }

    function showModalNotification(element) {
        $(element).parents('.screens_tabs').children().each(function () {
            $(this).removeClass('active');
        });
    }


    $(".app").on('click', '.card-collapse', function () {
        $(this).parent().toggleClass("collapsed");
    });
    $(".select_block").on('click', '.dropdown-item', function () {
        var colapsed_elements = $('.screen-body').children();
        $.each(colapsed_elements, function (prop_id, prop_val) {
            $(prop_val).addClass('collapsed');
        });
        // var screen_tab = left_menu_element('Новый экран')
        // $('.screen_body').html("")
    });
    $(".main-management").on('click', '.add_screen', function () {
        var screen = AddScreenName()
        var screen_tab = left_menu_element(screen)
        AddScreen(screen)
        $('.screens_tabs').append(screen_tab);

    });
    $(".additional-management").on('click', '.add_screen', function () {
        var screen = AddScreenName()
        var screen_tab = left_menu_element(screen)
        AddScreen(screen)
        $('.screens_tabs').append(screen_tab);
    });
    $(".left-menu").on('click', '.screen_name', function () {
        var active_element = $(this).parents('.screen-tab')
        if (!active_element.hasClass("active")) {
            CheckAll(this)
            active_element.addClass("active")
            FindActiveScreen()
            setHeader(active_element)
        }
    });

    $(".right-menu").on('click', '.add_textfield', function () {
        var block = $(this).parents('.card_field').attr('data-block')
        var element = GetElement(block) + 1
        var text_data = add_textfield(undefined, element)
        $(this).parent().find('.textfield_block').append(text_data);
        AddElement(block, element, undefined, 'text_field')
    });
    $(".right-menu").on('click', '.add_inline_keyboard_btn', function () {
        var block = $(this).parents('.card_field').attr('data-block')
        var element = GetElement(block, undefined, "keyboard") + 1
        var text_data = add_key(undefined, element)
        $(this).parent().find('.inline-keyboards').append(text_data);
        AddElement(block, element, 'Кнопка', undefined, undefined, 'keyboard')
        var element_change = $(text_data)
        NewBtn(element_change, block, element)
    });
    $(".right-menu").on('click', '.add_global_keyboard_btn', function () {
        var element = GetElement(undefined, 'keyboard') + 1
        var text_data = add_key(undefined, element)
        $(this).parent().find('.global-keyboards').append(text_data);
        AddElement(undefined, element, 'Кнопка', undefined, 'keyboard')
    });

    $(".right-menu").on('click', '.add_text_btn', function () {
        var block = GetBlock() + 1
        console.log(block)
        PrependElement('text', block)

    });

    $(".right-menu").on('click', '.add_file_btn', function () {
        var block = GetBlock() + 1
        PrependElement('file', block)

    });

    $(".right-menu").on('click', '.add_attachment_btn', function () {
        $(this).parent().find('.attachment_input').click()
    });
    $(".right-menu").on('change', '.attachment_input', function () {
        var files = $(this).prop("files");
        var names = $.map(files, function (val) {
            var dict = {}
            dict['name'] = val.name
            dict['size'] = val.size
            return dict;
        });

        var paste = $(this).parents('.attach_block').find('.attach_upload_list')
        var block = $(this).parents('.card_field').attr('data-block')

        $.each(names, function (name_id, name_val) {
            var element = GetElement(block) + 1
            var attachment = attachment_bar(name_val['name'], name_val['size'], undefined, element)
            paste.prepend(attachment)
            AddElement(block, element, name_val['name'], 'image')

        });


    });
    $(".right-menu").on('click', '.add_keyboard_btn', function () {
        console.log()
        var text_data = keyboard_card()
        if (Keyboard_blocks_amount('keyboard_card', 1)) {
            $('#screen_elements').append(text_data)
        } else {
            alert('Клавиатура может быть только одна')
        }

    });
    $(".right-menu").on('click', '.add_image_btn', function () {
        var block = GetBlock() + 1
        PrependElement('image', block)
    });
    $(".right-menu").on('click', '.come-back', function () {
        $('.right-menu').addClass('hide-sm')
    });
    $('.right-menu').on('focusin', '#screen_header', function () {
        var old_name = $('#screen_header').val()
        $('.right-menu').on('focusout', '#screen_header', function () {
            var new_name = $('#screen_header').val()
            bot_instructions[new_name] = bot_instructions[old_name];
            delete bot_instructions[old_name];
            $('.left-menu').find('.active').find('.screen_name').html(new_name)
        });
    });
    // $('.right-menu').on('focusout', '#screen_header', function () {
    //     var old_name = $('#screen_header').attr('data-screen')
    //     var new_name = $('#screen_header').val()
    //     bot_instructions[new_name] = bot_instructions[old_name];
    //     delete bot_instructions[old_name];
    //     $('.left-menu').find('.active').find('.screen_name').html(new_name)
    // });

    $(".app").on('click', '.remove', function () {
        var parent_el = $($(this).parents('.may_remove')[0])
        var block = parent_el.attr('data-block')
        if (parent_el.hasClass('card_field')) {
            RemoveElement(undefined, block)
            var els = $('#screen_elements').find('.card_field')
            $.each(els, function (el_id, el_val) {
                UpdateTabs(el_val, block)
            })
        } else if (parent_el.hasClass('screen-tab')) {
            RemoveScreen(parent_el)
        } else {
            var block = $($(this).parents('.may_remove')[1]).attr('data-block')
            var remove_id = parent_el.attr('data-content')
            if (parent_el.hasClass('keyboard_button')) {
                if (parent_el.parent().hasClass('inline-keyboards')) {
                    RemoveElement(block, remove_id, undefined, true)
                    var els = parent_el.parent().find('.may_remove')
                    $.each(els, function (el_id, el_val) {
                        UpdateContent(el_val, remove_id)
                    })
                } else if (parent_el.parent().hasClass('global-keyboards')) {
                    RemoveElement(block, remove_id, 'keyboard', undefined)
                    var els = parent_el.parent().find('.may_remove')
                    $.each(els, function (el_id, el_val) {
                        UpdateContent(el_val, remove_id)
                    })
                }
            } else {
                RemoveElement(block, remove_id)
                var els = parent_el.parents('.card_field').find('.may_remove')
                $.each(els, function (el_id, el_val) {
                    UpdateContent(el_val, remove_id)
                })
            }

        }

        // GetScreenDtrue)ata(screen, false)
        //         // GenerateLeftMenu(
        console.log(bot_instructions)
    });
    $("#buttonModal").on('click', '.save', function () {
        var screen_id = $('#screen_header').val()
        var block_id = $('#buttonModal').attr('data-block')
        var element_id = $('#buttonModal').attr('data-content')
        console.log(block_id)
        console.log(element_id)

        var name = $('#keyboard_key').find('.fake_select').val()
        var type = $('#keyboard_type').attr('data-type')
        var reply_text = $('#keyboard_link').find('.placeholder_div').html()
        if (reply_text === 'Выберите экран бота') {
            reply_text = undefined
        }
        var reply_url = $('#url_link').find('.fake_select').val()
        console.log(block_id)

        if (reply_text === undefined) {
            var reply = reply_url
        } else {
            var reply = reply_text
        }

        var res = {
            "key": name,
            "reply_text": reply,
            "type": type
        }

        if (block_id === undefined) {
            bot_instructions[screen_id]['keyboard'][element_id] = res
            $('.right-menu').find('#keyboard_block').find('[data-content="' + element_id + '"]').find('.text').html(name)

        } else {
            bot_instructions[screen_id]['user_block'][block_id]['keyboard'][element_id] = res
            $('.right-menu').find('[data-block="' + block_id + '"]').find('[data-content="' + element_id + '"]').find('.text').html(name)

        }

        console.log(bot_instructions[screen_id])
    });


});