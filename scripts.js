$(document).ready(function () {
    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Un segundo!</strong> Estamos guardando los detalles.'));

        $.post('https://script.google.com/macros/s/AKfycbzZ9fd2bjTrxX3e74Sl8GPh8D88i3GuHQlwAhWvnK8qspQknGWH0liywdzgFBh7asAw/exec', data)
                .done(function (data) {
                    console.log(data);
                    if (data.result === "error") {
                        $('#alert-wrapper').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper').html('');
                        $('#rsvp-modal').modal('show');
                    }
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html(alert_markup('danger', '<strong>Lo sentimos.</strong> Hay un problema con el servidor. '));
                });
    });

});

/********************** Extras **********************/

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}