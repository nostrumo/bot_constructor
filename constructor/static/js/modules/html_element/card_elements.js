function card_structure_start(screen_id, screen_name) {
    var txt = '                <div name="'+screen_id+'" id="'+screen_id+'" class="col-xxl-6  may_remove another card_size col-xl-6 col-md-12">\n' +
        '                    <div class="card info-card grey-card">\n' +
        '                        <div class="card-header">\n' +
        '                            <div class="d-flex align-items-center">\n' +
        '                                <h6>'+screen_name+'</h6>\n' +
        '                                <div class="ms-auto">\n' +
        '\n' +
        '                                </div>\n' +
        '\n' +
        '                                <div class=" d-flex align-items-center justify-content-center">\n' +
        '                                </div>\n' +
        '                                <div class="info_icon remove d-flex align-items-center justify-content-center"><i\n' +
        '                                        class="bi bi-trash mx-3"></i>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="card-body">'
    var txt_end = '<div class="row">\n' +
        '                                <div class="col-12">\n' +
        '                                    <a class="add_button">\n' +
        '\n' +
        '                                        <div class="dotted radius-5 d-flex align-items-center p-3 my-3">\n' +
        '                                            <div class="button-icon rounded-circle d-flex align-items-center justify-content-center">\n' +
        '                                                <i class="bi bi-plus"></i>\n' +
        '                                            </div>\n' +
        '                                            <div class="ps-3">\n' +
        '\n' +
        '                                        <span class="text-muted small">Add a button</span>\n' +
        '\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </a>\n' +
        '\n' +
        '                                </div>\n' +
        '                            </div>'+'</div>\n' +
        '                    </div>\n' +
        '                </div>'
    return [txt, txt_end];
}

function card_structure_end() {
    var txt = '                    </div>\n' +
        '                </div>\n'
    return txt;
}
