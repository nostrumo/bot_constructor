$(document).ready(function () {
    $(document).on('click', '.remove', function () {
        var element = $(this).parents('.may_remove').first();
        var parent_removed_el = element.parent('div').children('.hidden')
        if (element.parent('div').find('.another').length <= 1) {
            parent_removed_el.toggleClass('hidden')

        }
        element.remove()


    });

    $('.switch-btn').click(function () {
        $(this).toggleClass('switch-on');
        if ($(this).hasClass('switch-on')) {
            $(this).trigger('on.switch');
        } else {
            $(this).trigger('off.switch');
        }
    });
    $('.replicas_block').on('click', '.remove_button', function () {
        var list_texts = $('.replicas_block').find('textarea');
        var element = $(this).parents('.replicas_block');
        if (list_texts.length == 1) {
            $(this).parents('div').first().remove();
            element.first().append(bot_detailed_message());
        } else {
            $(this).parents('div').first().remove();

        }
    });

    $('#userModal').on('click', '.input_intent', function () {
        var element_h = $(this).position()
        // $(this).parent('.connection_field').find('.screen_list').css('top', element_h.top + 43)
        $(this).parent('.connection_field').find('.screen_list').css('top', element_h.top + 43).toggleClass("not_show")
        $(this).parent('.connection_field').find('.screen_list');

    })

    // $(document).on('click', '.blank_handler', function () {
    //     var element = $(this).parents('.may_remove').first();
    //     var parent_removed_el = element.parent('div').children('.hidden')
    //     if (element.parent('div').find('.another').length <= 1) {
    //         parent_removed_el.toggleClass('hidden')
    //
    //     }
    //     console.log(element.parent('div').children('.another'))
    //     element.remove()


    // });
    $('.replica_text_btn').click(function () {
        var element = $(this).parents('.action_body');
        element.children('.replicas_block').append(bot_detailed_message(''));
    });
    $('.additional_info_list').click(function () {
        var link = $(this).attr('href').slice(1)
        $('#' + link).find('.card').addClass('pulsing_border')
        setTimeout(function () {
                $('#' + link).find('.card').delay(800).removeClass('pulsing_border');
            },
            3000);
    })

    $('.close_modal').click(function () {
        $(this).parents('.modal-window').hide();
    })

    // $('.submit').click(function () {
    //     $(this).parents('.modal-window').hide();
    // })
    $('.cancel').click(function () {
        $(this).parents('.modal-window').hide();
    })


    // $('.replicas_block').on('keypress', '.input_text_area', function (event) {
    //     const length_line = 35;
    //     if (event.which === 13) {
    //         alert('You pressed enter!');
    //     }
    //     var length = jQuery(this).val().length;
    //
    //
    //     //figure out the number of rows, increment by one, and reset rows attrib
    //
    //     jQuery(this).attr('rows', Math.floor(length / length_line) + 1);
    //
    // });
    $(document).on('click', '.toggle-sidebar-btn', function () {

        $('body').toggleClass('toggle-sidebar-c')
        // $('body').toggleClass('toggle-sidebar')
        if ($("body").classList.contains("toggle-sidebar-c")) {
            $('body').toggleClass('toggle-sidebar-all');
        }
    });
    $('.action_body').on('keyup', '.input_text_area', function (event) {
        const length_line = 30;
        //figure out how many chars
        var length = jQuery(this).val().length;


        //figure out the number of rows, increment by one, and reset rows attrib
        if (event.which === 13) {
            //         alert('You pressed enter!');
        }
        var new_line = (jQuery(this).val().match(/\n/g) || []).length
        jQuery(this).attr('rows', Math.floor(length / length_line - new_line) + 1 + new_line);
    });

    $('.action_body').on('click', '.intent-element', function () {
        $(this).closest(".accordion_item").toggleClass("accordion_item_show");
        $(this).closest(".accordion_item").find('.additional_info').toggleClass('hidden')
    })

    $('.card_container').on('click', '.accordion_button_trigger', function () {
        $(this).closest(".accordion_item").toggleClass("accordion_item_show");
        $(this).closest(".accordion_item").find('.additional_info').toggleClass('hidden')
    })

    $(document).on('click', '.add_button', function () {
        console.log($(this).parents('.card-body').find(".keyboard_block"))

        $(this).parents('.card-body').find(".keyboard_block").append(keyboard_key('', '', '', screens));
    })

    $('.action_body').on('focus', '.search_screen', function () {
        $(this).closest(".connection_field").removeClass("not_show");

    })

    // $('.action_body').on('blur', '.search_screen', function () {
    //     $(this).closest(".connection_field").addClass("not_show");
    // })
    $(document).on('click', null, function (e) {
        if (!$(e.target).hasClass("screen_list") && !$(e.target).hasClass("search_screen")) {
            $(".connection_field").addClass("not_show");

        }
    })

    $('.action_body').on('keyup', '.search_screen', function () {
        var input = $(this).val().toUpperCase();
        var a = $(this).closest(".connection_field").find('.screen_id_link').slice(0, -1)
        var count_hide = 0
        a.each(function () {
            var txtValue = $(this).html().toUpperCase();
            if (txtValue.includes(input)) {
                $(this).css('display', 'block');
            } else {
                $(this).css('display', 'none');
                count_hide += 1

            }


        });

        if (a.length - count_hide > 0) {
            $(this).closest(".connection_field").find('.info').addClass('hidden')
        } else {
            $(this).closest(".connection_field").find('.info').removeClass('hidden')
        }

    })

    $('.action_body').on('click', '.screen_id_link', function () {
        var data = $(this).text()
        var element = $(this).parents('.accordion_item');
        element.find('.additional_info_style').html(data)
        element.find('.search_screen').val(data)
    })

    $(document).on('click', '.intent_type', function () {
        $(this).children("i").toggleClass('bi-braces-asterisk').toggleClass('bi-chat-right-quote');
    })

    $(document).on('click', '.connection_type', function () {
        $(this).children("i").toggleClass('bi-link').toggleClass('bi-folder-symlink');
    })
    $(document).on('click', '.intent_add_text', function () {
        var element = $(this).parents('.action_body');
        element.children('.accordion_component').append(intent_detailed())
        element.children('.accordion_component').animate({scrollTop: element.children('.accordion_component').height() + 270}, 500);
    })
    $(document).on('keyup', '.name_dublicate', function () {
        var element = $(this).parents('.accordion_item');
        element.children('.intent-element').find('.intent-content').html($(this).val())
    })
    $('.modal_card').on('click', '.intent_example_add', function () {
        if ($(this).parents('.intent_accordion').children('.setting_intent').find('.name_dublicate').length >= 1) {
            $(this).parents('.intent_accordion').children('.setting_intent').append(intent_element(''))
        } else {
            $(this).parents('.intent_accordion').children('.setting_intent').append(intent_element('name_dublicate'))

        }
    })

    $('.modal_card').on('keyup', '.input_intent', function () {
        var data = $(this).val()
        $(this).parents('.accordion_item').children('.intent-element').find('.additional_info_list').html(data)
    })

    $('.accordion_component').on('click', '.remove_button', function () {
        var parent = $(this).parents('.may_remove');
        var to_del = $(this).parents('.accordion-element');
        var first = to_del.find('.input_intent').hasClass("name_dublicate");
        to_del.remove();

        var element = parent.find('.input_intent').first();
        if (first) {
            element.toggleClass('name_dublicate')
            element.parents('.accordion_item').children('.intent-element').find('.intent-content').html(element.val())
        }
        if (element.parents('.setting_intent').children('.accordion-element').length === 1) {
            element.parents('.setting_intent').append(intent_element('name_dublicate'))
        }

    });


});
