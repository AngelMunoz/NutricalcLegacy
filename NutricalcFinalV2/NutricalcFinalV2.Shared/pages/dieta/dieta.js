// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    WinJS.UI.Pages.define("/pages/dieta/dieta.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            
               // Windows.UI.Popups.MessageDialog("Dieta: " + seleccionDietas.info._value[0].data.titulo + " ID: " + seleccionDietas.info._value[0].data.idDieta + " Posicion en la Lista: ").showAsync();
            if(seleccionDietas.info !='vacio')
            {
                $('#titulo').val(seleccionDietas.info._value[0].data.titulo);
                $('#categoria').val(seleccionDietas.info._value[0].data.categoria);
                $('#contenido').val(seleccionDietas.info._value[0].data.contenido);
                $('#idDieta').val(seleccionDietas.info._value[0].data.idDieta);
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
