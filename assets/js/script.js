let mostrarContact = () => {
    let form = document.getElementById('contact');
    form.classList.remove('d-none');
}

let mostrarReserva = () => {
    let form = document.getElementById('reserva');
    form.classList.remove('d-none');
}

let submitContact = (event) => {

    event.preventDefault();

    let form = document.getElementById('contact');

    let name = document.getElementById('nombre').value;
    let email = document.getElementById('correo').value;
    let phone = document.getElementById('telefono').value;
    let motiv = document.getElementById('motivo').value;
    let area = document.getElementById('motivo2').value;

    let nono = "";

    switch (nono) {

        case name:
            alert(`El campo 'Nombre' es obligatorio`);
            return false;
            break;

        case email:
            alert(`El campo 'Correo' es obligatorio`);
            return false;
            break;

        case phone:
            alert(`El campo 'Telefono' es obligatorio`);
            return false;
            break;

        case motiv:
            alert(`El campo 'Motivo' es obligatorio`);
            return false;
            break;

        case area:
            alert(`El campo 'Detalle del Motivo' es obligatorio`);
            return false;
            break;

        default:
            alert(`Muchas gracias ${name}, hemos recibido tu comentario, y enviaremos una pronta respuesta al correo ${email}`);
            form.reset();
            form.classList.add('d-none');
            break;
    }

}

$(document).ready(() => {

    $('#reserva').submit((e) => {
        e.preventDefault();

        let form = $('#reserva');
        let name = $('#nombreres').val();
        let email = $('#correores').val();
        let phone = $('#telefonores').val();
        let fecha = $('#fecha').val();
        let hora = $('#hora').val();
        let ctda = $('#ctda').val();

        let nono = "";

        switch (nono) {

            case name:
                alert(`El campo 'Nombre' es obligatorio`);
                return false;
                break;

            case email:
                alert(`El campo 'Correo' es obligatorio`);
                return false;
                break;

            case phone:
                alert(`El campo 'Telefono' es obligatorio`);
                return false;
                break;

            case fecha:
                alert(`El campo 'Fecha' es obligatorio`);
                return false;
                break;

            case hora:
                alert(`El campo 'Hora' es obligatorio`);
                return false;
                break;

            case ctda:
                alert(`El campo 'Cantidad' es obligatorio`);
                return false;
                break;

            default:
                alert(`Estimad@ ${name}, agradecemos tu reserva con nosotros.

Hemos registrado ${ctda} asistentes para el ${fecha} a la hora ${hora}.
Se ha enviado el codigo de confimación al correo ${email}.

Gracias por preferirnos.`);
                form[0].reset();
                form.addClass('d-none');
                break;
        }

    });


    $('.card').mousedown( (e) => { 
        $(e.currentTarget).addClass('shadow-sm');
        $(e.currentTarget).removeClass('shadow');

        $('#sobreNosotros').removeClass('active');
        $('#cartaProductos').addClass('active');

        let imagen = $(e.currentTarget).children('img').attr('src');
        let titulo = $(e.currentTarget).children('div').children('h5').text();
        let texto = $(e.currentTarget).children('div').children('p').text();

        console.log(titulo);

        $('#cartaProductos').children('img').attr('src', imagen);
        $('#cartaProductos').children('h3').text(titulo);
        $('#cartaProductos').children('p').text(texto);
        

    });

    $('.card').mouseup( (e) => { 
        $(e.currentTarget).addClass('shadow');
        $(e.currentTarget).removeClass('shadow-sm');
    });

    $('#nosotros').mousedown( () => { 
        $('#cartaProductos').removeClass('active');
        $('#sobreNosotros').addClass('active');
    });

    $('.fa-close').mousedown( () => { 
        $('#cartaProductos').removeClass('active');
        $('#sobreNosotros').removeClass('active');
    });




});