// localStorage.setItem('dark', 'true');


jQuery(document).ready(function () {

    SwitchMode()

    function SwitchMode() {
        if (localStorage.dark === 'true') {
            ($('.app').addClass('dark-mode'))
        } else {
            ($('.app').removeClass('dark-mode'))
        }
        console.log(localStorage.dark)

    }


    $(".collapse_sidebar").on('click', function () {
        ($('.app').toggleClass('sidebar-mini'));
    });


    $(".show_setting").on('click', function () {
        ($('.scenario-wrapper').toggleClass('hide-sm'));
    });

    $(".button-footer").on('click', function () {
        ($('.scenario-wrapper').addClass('hide-sm'));
    });
    $(".dark_mode_switch").on('click', function () {
        // ($('.app').toggleClass('dark-mode'));
        if (localStorage.dark === 'true') {
            localStorage.dark = 'false'
        } else {
            localStorage.dark = 'true'
        }
        SwitchMode()
    });

    $(".app").on('click', '.remove', function () {
        console.log('Deleted')
        var parent_el = $($(this).parents('.may_remove')[0]).parent()
        var len = parent_el.children().length
        if (len === 1) {
            parent_el.closest('.editable').addClass('empty')
        }
    });
    $(".app").on('click', '.add', function () {
        var parent_el = $(this).closest('.editable')
        parent_el.removeClass('empty')
    });
    $(".app").on('click', '.remove', function () {
        $(this).parents('.may_remove')[0].remove();
        console.log('Deleted')

    });

    $(".app").on('click', '.collapse_near', function () {
        $(this).parent().find('.collapse-entry').toggleClass('hidden');
        $(this).parent().toggleClass('rotation');
    });

    $(".app").on('click', '.copy', function () {
        var to_copy = $($(this).parents('.may_remove')[0]);
        var clone = to_copy.clone();
        if (to_copy.hasClass('screen-tab')) {
            var name = clone.find('.screen_name').html()
            var screen = AddScreenName(name)
            AddScreen(screen)
            clone.find('.screen_name').html(screen)
            clone.removeClass('active').appendTo(to_copy.parent());

        }
        if (to_copy.parent().hasClass('inline-keyboards') || to_copy.parent().hasClass('global-keyboards')) {
            clone = Copy(this)
            to_copy.parent().append(clone)
        }
    });
    $(".app").on('click', '.fake_select', function () {
        $(this).parent().toggleClass('collapsed')

    });
    $(".app").on('click', '.close_modal', function () {
        $(this).parents('.modal-wrapper').toggleClass('hidden')

    });
    $(".app").on('click', '.edit_btn', function () {
        EditBtn(this)

    });
    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".dropout-div"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.parent().addClass('collapsed'); // скрываем его
        }
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".modal-block"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.parent().addClass('hidden'); // скрываем его
        }
    });

    $(".app").on('click', '.message-toggle', function () {
        $(this).parent().toggleClass('collapsed')

    });
    $(".navbar").on('click', '#show-notification', function () {
        $(this).parent('.dropdown-block').addClass('collapsed')
        $('#notificationsModal').toggleClass('hidden')

    });

    $(".app").on('click', '.list_link', function () {
        var data = $(this).html()
        var target = $(this).attr('data-target')
        $(this).parents('.div_select').find('.placeholder_div').html(data)
        $(this).parents('.div_select').addClass('collapsed')
        if (target !== undefined) {

            $.each($('#buttonModal').find('.may_hidden'), function (_id, _val) {
                $(_val).addClass('hidden')
            })
            $('#buttonModal').find('.' + target).toggleClass('hidden')
            $('#keyboard_type').attr('data-type', target)
            $('#keyboard_link').find('.placeholder_div').html('Выберите экран бота')
            $('#url_link').find('input').val('')
        }
    });


});