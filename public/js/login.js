
$(document).ready(function () {
    $('body').on('click', '#login', function (event) {
        let password = $('#password').val();
        var url = $('#main').data('note-path');

        ajaxLogin(url,password);
    });
})

function setAjaxCfrfToken() {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
}

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function ajaxLogin(url, password) {
    setAjaxCfrfToken();
    $.ajax({
        url: '/savenote/login',
        method: 'POST',
        data: {
            'url' : url,
            'password' : password,
        },
        success: function (res) {
            // localStorage.setItem('savenote', JSON.stringify({
            //     'url' : url,
            //     'login' : true,
            // }));

            // createCookie('savenote',[
            //            url, true
            //       ], 1);
            window.location.href = `/${url}`;
        },
        error: function (err) {
            //window.location.href = `/${url}`;
        }
    });
}

