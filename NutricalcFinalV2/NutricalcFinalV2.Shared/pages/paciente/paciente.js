// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/paciente/paciente.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            //Windows.UI.Popups.MessageDialog("Paciente: " + seleccionPacientes.info._value[0].data.nombre + " ID: " + seleccionPacientes.info._value[0].data.idPaciente + " Posicion en la Lista: " + indexObjeto).showAsync();
            if(seleccionPacientes.info != 'vacio')
            {
                $('#idPaciente').val(seleccionPacientes.info._value[0].data.idPaciente);
                $('#parametro').val(seleccionPacientes.info._value[0].data.parametro);
                $('#nombre').val(seleccionPacientes.info._value[0].data.nombre);
                $('#sexo').val(seleccionPacientes.info._value[0].data.sexo);
                $('#edad').val(seleccionPacientes.info._value[0].data.edad);
                $('#peso').val(seleccionPacientes.info._value[0].data.peso);
                $('#talla').val(seleccionPacientes.info._value[0].data.talla);
                $('#cirCintura').val(seleccionPacientes.info._value[0].data.cirCintura);
                $('#cirCadera').val(seleccionPacientes.info._value[0].data.cirCadera);
                $('#cirMuneca').val(seleccionPacientes.info._value[0].data.cirMuneca);
                $('#pliegueTricipital').val(seleccionPacientes.info._value[0].data.pliegueTricipital);
                $('#porcentajeGrasa').val(seleccionPacientes.info._value[0].data.porcentajeGrasa);
                $('#horaSueno').val(seleccionPacientes.info._value[0].data.horaSueno);
                $('#actFisica').val(seleccionPacientes.info._value[0].data.actFisica);

            }
            else if(pacienteDb.info != 'vacio' || pacienteDb.info == null)
            {
                $('#idPaciente').val(pacienteDb.info[0].idPaciente);
                $('#parametro').val(pacienteDb.info[0].parametro);
                $('#nombre').val(pacienteDb.info[0].nombre);
                $('#sexo').val(pacienteDb.info[0].sexo);
                $('#edad').val(pacienteDb.info[0].edad);
                $('#peso').val(pacienteDb.info[0].peso);
                $('#talla').val(pacienteDb.info[0].talla);
                $('#cirCintura').val(pacienteDb.info[0].cirCintura);
                $('#cirCadera').val(pacienteDb.info[0].cirCadera);
                $('#cirMuneca').val(pacienteDb.info[0].cirMuneca);
                $('#pliegueTricipital').val(pacienteDb.info[0].pliegueTricipital);
                $('#porcentajeGrasa').val(pacienteDb.info[0].porcentajeGrasa);
                $('#horaSueno').val(pacienteDb.info[0].horaSueno);
                $('#actFisica').val(pacienteDb.info[0].actFisica);
                console.log(pacienteDb.info);
            }
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();
