(function () {
    "use strict";
    var dietas = [];

    var listaDietas = new WinJS.Binding.List();
    var listaPacientes = new WinJS.Binding.List();

    var seleccionDietas = "";
    var seleccionPacientes = "";

    var paciente = "";
    var dieta = "";


    WinJS.UI.Pages.define("/pages/hub/hub.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            WinJS.Namespace.define("Dietas", { data: listaDietas });

            WinJS.Namespace.define("Pacientes", { data: listaPacientes });

            var obtenerDietas = 'http://10.5.13.106/quinto/integradora/services/nutricalc_api.php?action=mostrarDietas';

            WinJS.xhr({ url: obtenerDietas }).then(function (respuesta) {
                var respuestaJson = JSON.parse(respuesta.responseText);
                for (var i in respuestaJson) {
                    listaDietas.push(respuestaJson[i]);
                }
            });

            var obtenerPacientes = 'http://10.5.13.106/quinto/integradora/services/nutricalc_api.php?action=mostrarPacientes';
            WinJS.xhr({ url: obtenerPacientes }).then(function (respuesta) {
                var respuestaJson = JSON.parse(respuesta.responseText);
                for (var i in respuestaJson) {
                    listaPacientes.push(respuestaJson[i]);
                }
            });


            
            WinJS.Utilities.query("#listViewDietas").listen("click", this.dietasClick, false);
            WinJS.Utilities.query("#listViewPacientes").listen("click", this.pacientesClick, false);

            var btnAgregarPacientes = document.getElementById('btnAgregarPaciente').winControl;
            btnAgregarPacientes.addEventListener('click', this.agregarPaciente, false);

            var btnRemoverPaciente = document.getElementById('btnRemoverPaciente').winControl;
            btnRemoverPaciente.addEventListener('click', this.removerPaciente, false);

            var btnAgregarDieta = document.getElementById('btnAgregarDieta');
            btnAgregarDieta.addEventListener('click', this.agregarDieta, false);

            var btnRemoverDieta = document.getElementById('btnRemoverDieta');
            btnRemoverDieta.addEventListener('click', this.removerDieta, false);

            WinJS.Utilities.query("#navDiagnostico").listen("click", this.navegarDiagnostico, false);
            WinJS.Utilities.query("#navDieta").listen("click", this.navegarDieta, false);
            WinJS.Utilities.query("#navPaciente").listen("click", this.navegarPaciente, false);
            WinJS.Utilities.query("#navConsulta").listen("click", this.buscarPaciente, false);
        },
        unload: function () {

        },
        dietasClick: function (event) {
            event.preventDefault();
            // console.log(event);
            var dietasLista = document.getElementById("listViewDietas").winControl;
            //console.log(dietasLista);
            var objs = dietasLista.selection.getItems();
            var objetos = objs.then(function (items) { return items });
            console.log(objetos);
            var seleccionDietas = objetos;
            WinJS.Namespace.define("seleccionDietas", { info: objetos });

            //var indexObjeto = dietasLista._selection._selected._ranges[0].lastPromise.index;
            //Windows.UI.Popups.MessageDialog("Dieta: " + seleccionDietas._value[0].data.titulo + " ID: " + seleccionDietas._value[0].data.idDieta + " Posicion en la Lista: " + indexObjeto).showAsync();

            WinJS.Navigation.navigate('/pages/dieta/dieta.html');
        },
        pacientesClick: function (event) {
            event.preventDefault();
            // console.log(event);
            var pacientesLista = document.getElementById("listViewPacientes").winControl;
            //console.log(dietasLista);
            var objs = pacientesLista.selection.getItems();
            var objetos = objs.then(function (items) { return items });
            console.log(objetos);
            var seleccionPacientes = objetos;
            WinJS.Namespace.define("seleccionPacientes", { info: objetos });

            //var indexObjeto = pacientesLista._selection._selected._ranges[0].lastPromise.index;
            //Windows.UI.Popups.MessageDialog("Paciente: " + seleccionPacientes._value[0].data.nombre + " ID: " + seleccionPacientes._value[0].data.idPaciente + " Posicion en la Lista: " + indexObjeto).showAsync();
            WinJS.Navigation.navigate('/pages/paciente/paciente.html');
        },
        agregarDieta: function () {

            WinJS.Navigation.navigate('/pages/dieta/dieta.html');

        },
        removerDieta: function () {
            WinJS.Namespace.define("seleccionDietas", { info: "vacio" });
            WinJS.Navigation.navigate('/pages/dieta/dieta.html');
        },
        agregarPaciente: function () {

            WinJS.Navigation.navigate('/pages/paciente/paciente.html');
        },
        removerPaciente: function () {

            WinJS.Namespace.define("seleccionPacientes", { info: "vacio" });
            WinJS.Namespace.define('pacienteDb', { info: "vacio" });
            WinJS.Navigation.navigate('/pages/paciente/paciente.html');
        },
        navegarDiagnostico: function () {
            WinJS.Navigation.navigate('/pages/diagnostico/Diagnostico.html');
        },
        navegarDieta: function () {
            WinJS.Namespace.define("seleccionDietas", { info: "vacio" });
            WinJS.Navigation.navigate('/pages/dieta/dieta.html');
        },
        navegarPaciente: function () {
            WinJS.Namespace.define("seleccionPacientes", { info: "vacio" });
            WinJS.Namespace.define('pacienteDb', { info: "vacio" });
            WinJS.Navigation.navigate('/pages/paciente/paciente.html');
        },
        buscarPaciente: function () {
            var url = 'http://10.5.13.106/quinto/integradora/services/nutricalc_api.php';


            var heroForm = $('#heroForm');
            var serializedForm = heroForm.serialize();
            //console.log(serializedForm);
            var stringBusqueda = "action=mostrarPaciente&";
            var stringBusquedaFn = stringBusqueda += serializedForm;
            //console.log(stringBusquedaFn);
            WinJS.xhr({
                url: url,
                type: 'POST',
                data: stringBusquedaFn,
                headers: { "Content-type": "application/x-www-form-urlencoded" }
            }).done(function (respuesta) {

                //try
                //{
                if (respuesta.responseText.search('{')) {
                    var paciente = JSON.parse(respuesta.responseText);
                    if (paciente.length > 0) {

                        WinJS.Namespace.define("seleccionPacientes", { info: "vacio" });
                        WinJS.Namespace.define('pacienteDb', { info: paciente });
                        WinJS.Navigation.navigate('/pages/paciente/paciente.html');
                    }
                    else {
                        Windows.UI.Popups.MessageDialog('Paciente No Encontrado!').showAsync();
                    }
                }
                else {
                    WinJS.Namespace.define("seleccionPacientes", { info: "vacio" });
                    WinJS.Namespace.define('pacienteDb', { info: "vacio" });
                }


            });
        }
    });
    WinJS.UI.processAll();



})();