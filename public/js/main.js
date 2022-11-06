$(document).ready(function () {
    $('#content').data('type') && setBackGroundColor($('#content').data('type'));
    var url = $('#content').data('note-path');

    $('body').on('click', '#blackbtn', function (event) {
        const type = 1;
        setBackGroundColor(type)
        ajaxUpdateData(url, type);
    });

    $('body').on('click', '#pinkbtn', function (event) {
        const type = 2;
        setBackGroundColor(type);
        ajaxUpdateData(url, type);
    });

    $('body').on('click', '#greenbtn', function (event) {
        const type = 3;
        setBackGroundColor(type);
        ajaxUpdateData(url, type);
    });

    $('body').on('click', '#default', function (event) {
        const type = 4;
        setBackGroundColor(type);
        ajaxUpdateData(url, type);
    });

    $('textarea').on('keydown', function(e) {
        if (e.key == 'Tab') {
            e.preventDefault();
            var start = this.selectionStart;
            var end = this.selectionEnd;

            // set textarea value to: text before caret + tab + text after caret
            this.value = this.value.substring(0, start) +
                "    " + this.value.substring(end);

            // put caret at right position again
            this.selectionStart =
                this.selectionEnd = start + 4;
        }
    });
})

function setBackGroundColor(type) {
    let colorTable = {
        1: function () {
            setColorAndBackground('#25383C', 'aliceblue')
        },
        2: function () {
            setColorAndBackground('rgb(255 165 165 / 50%)', '#583030')
        },
        3: function () {
            setColorAndBackground('#a5dc86', '#583030')
        },
        4: function () {
            setColorAndBackground('whitesmoke', 'black')
        }
    };

    if (type in colorTable) {
        return colorTable[type]();
    }
}

function setColorAndBackground(background, color) {
    $('#content').css('background', background);
    $('#content').css('color', color);
    $('#content').css('font-weight', 'bold');
}

function setAjaxCfrfToken() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
}

function ajaxUpdateData(url, type) {
    setAjaxCfrfToken();
    $.ajax({
        url: '/savenote/update-data',
        method: 'POST',
        data: {
            'url' : url,
            'type': type,
        },
        success: function (res) {

        },
        error: function (err) {

        }
    });
}

// js form
$(document).ready(function () {
    var urlCurrent = $('#content').data('note-path');

    $('body').on('click', '#updateurl', function (event) {
        let url = $('#url').val();
        ajaxUpdateUrl(urlCurrent, url);
    });
})

function openForm() {
    var x = document.getElementById("myForm");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function ajaxUpdateUrl(urlCurrent, url) {
    setAjaxCfrfToken();
    $.ajax({
        url: '/savenote/update-url',
        method: 'POST',
        data: {
            'urlCurrent' : urlCurrent,
            'url' : url,
        },
        success: function (res) {
            window.location.href = `/${res.notePath}`;
        },
        error: function (err) {
        }
    });
}



function openFormUpdatePass() {
    var x = document.getElementById("myFormChangPasss");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


$(document).ready(function () {
    var urlCurrent = $('#content').data('note-path');

    $('body').on('click', '#updatepass', function (event) {
        let password = $('#password').val();
        ajaxUpdatePassword(password, urlCurrent);
    });
})


function ajaxUpdatePassword(password, urlCurrent) {
    setAjaxCfrfToken();
    $.ajax({
        url: '/savenote/update-pass',
        method: 'POST',
        data: {
            'password' : password,
            'url' : urlCurrent,
        },
        success: function (res) {
            window.location.href = `/${urlCurrent}`;
        },
        error: function (err) {
        }
    });
}


