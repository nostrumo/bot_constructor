$(document).ready(function () {
    function CountFelds() {
        $('.card_container').empty()
        $.each(save_obj, function (key, val) {
            $('.card_container').append(val.html);
        });

    }

    function Modal_text(id, field_id) {
        $('#buttonModal .action_body .replicas_block').empty()
        $('#buttonModal').find('#submit_text').attr('data-id', id);
        $('#buttonModal').find('#submit_text').attr('data-field', field_id);

        $.each(save_obj[id].data_modal.data[field_id], function (key, val) {
            $('.replicas_block').append(bot_detailed_message(val));
            // console.log($('.replicas_block').append(bot_detailed_message(val)))
        });

    };

    function Modal_user(id, field_id) {
        $('#userModal .action_body .accordion_component').empty()
        $('#userModal').find('#submit_user').attr('data-id', id);
        $('#userModal').find('#submit_user').attr('data-field', field_id);

        $.each(save_obj[id].user_data, function (ind, val) {
            $('.accordion_component').append(intent_detailed(save_obj[id].user_data[ind]));
        });


    };


    CountFelds()


    $('.card_container').on('click', '.texts_modal', function () {
        Modal_text(jQuery(this).data('id'), jQuery(this).data('field'))
        $('#buttonModal').show();
        $('#buttonModal .input_text_area').each(function (index, value) {
            const length_line = 30;
            //figure out how many chars
            var length = jQuery(this).val().length;
            var new_line = (jQuery(this).val().match(/\n/g) || []).length
            jQuery(this).attr('rows', Math.floor(length / length_line - new_line) + 1 + new_line);
        });

    })

    $('.card_container').on('click', '.intent_trigger', function () {
        Modal_user(jQuery(this).data('id'), jQuery(this).data('field'))
        $('#userModal').show();
        $('#userModal').find('.intent_info').html('Active intents list - ' + obj[jQuery(this).data('id')].components.person_message.content_data.length);


    })


    $('#submit_text').click(function () {
        var list_texts = $('.replicas_block').find('textarea');
        var id = $(this).attr('data-id')
        var field = $(this).attr('data-field')
        var texts = []

        list_texts.each(function (index, value) {
            texts.push($(this).val());
        });

        if (obj[parseInt(id)].components.bot_message[field].data_type === 'text_data') {
            obj[parseInt(id)].components.bot_message[field].content_data = texts
        }

        parse_JSON()
        CountFelds()
        console.log(save_obj)
        $(this).parents('.modal-window').hide();
    });

    $('#submit_user').click(function () {
        var intent = []
        var id = $(this).attr('data-id')
        var list_texts = $(this).parents('.modal_card').find('.accordion_item');
        list_texts.each(function (index, value) {
            if ($(value).find('.intent_accordion').children('.setting_connection').find('.connection_type').children('.bi').hasClass('bi-link')) {
                var connection_type = 'url'
            } else {
                var connection_type = 'screen'
            }

            var data = []
            if (!$(value).find('.intent_accordion').children('.setting_connection').find('.input_intent').hasClass('any_request')) {
                $(value).find('.intent_accordion').children('.setting_intent').find('.accordion-element').each(function (ind, accordeon) {
                    if (!$(accordeon).hasClass('hidden')) {
                        var finders = $(accordeon).find('.intent_data')
                        var type = finders.find('.bi')
                        if (type.hasClass('bi-braces-asterisk')) {
                            type = 'template'
                        } else {
                            type = 'example'
                        }
                        var input = finders.find('.input_intent').val()
                        data.push({'content_data': input, 'content_type': type})


                    }
                });
            } else {
                data.push({'content_data': 'Any other feedback', 'content_type': 'else'})

            }

            var entity = {
                'connection': {
                    'child_screen': screens_r[$(value).find('.intent_accordion').children('.setting_connection').find('.search_screen').val()],
                    'connection_type': connection_type
                }, 'data': data
            }

            intent.push(entity)
        });
        obj[id].components.person_message = {"data_type": "intent_data", "content_data": intent}
        parse_JSON()
        CountFelds()
        $(this).parents('.modal-window').hide();
    });


});
