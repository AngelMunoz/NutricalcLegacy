// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/diagnostico/Diagnostico.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            $("#btnCalcularGet").click(function () {
                var form = $('#datosPacienteForm');
                var serializedForm = form.serializeObject();
                //Windows.UI.Popups.MessageDialog("Nombre: " + serializedForm.nombre + " Edad: " + serializedForm.edad + " Peso: " + serializedForm.peso).showAsync();
                calcularCalorias(serializedForm.parametro, serializedForm);
                
            });
            $('#btnCalcularDietoSintetica').click(function () {
                calcTablaDietSin($('#getGet').val(), $('#porcentajeChos').val(), $('#porcentajeProt').val(), $('#porcentajeLip').val());
            });

            $('#btnCalcularRaciones').click(function () {
                var totalPc = calcularTotales($('#pc1a').val(), $('#pc2a').val(), $('#pc3a').val(), $('#pc4a').val(), $('#pc5a').val(), $('#pc6a').val());
                var totalLeg = calcularTotales($('#leg1a').val(), $('#leg2a').val(), $('#leg3a').val(), $('#leg4a').val(), $('#leg5a').val(), $('#leg6a').val());
                var totalFrut = calcularTotales($('#frut1a').val(), $('#frut2a').val(), $('#frut3a').val(), $('#frut4a').val(), $('#frut5a').val(), $('#frut6a').val());
                var totalVer = calcularTotales($('#ver1a').val(), $('#ver2a').val(), $('#ver3a').val(), $('#ver4a').val(), $('#ver5a').val(), $('#ver6a').val());
                var totalLact = calcularTotales($('#lac1a').val(), $('#lac2a').val(), $('#lac3a').val(), $('#lac4a').val(), $('#lac5a').val(), $('#lac6a').val());
                var totalCar = calcularTotales($('#car1a').val(), $('#car2a').val(), $('#car3a').val(), $('#car4a').val(), $('#car5a').val(), $('#car6a').val());
                var totalGra = calcularTotales($('#gra1a').val(), $('#gra2a').val(), $('#gra3a').val(), $('#gra4a').val(), $('#gra5a').val(), $('#gra6a').val());
                var totalAzu = calcularTotales($('#azu1a').val(), $('#azu2a').val(), $('#azu3a').val(), $('#azu4a').val(), $('#azu5a').val(), $('#azu6a').val());
                $('#pcTotal').val(totalPc);
                $('#legTotal').val(totalLeg);
                $('#frutTotal').val(totalFrut);
                $('#verTotal').val(totalVer);
                $('#lacTotal').val(totalLact);
                $('#carTotal').val(totalCar);
                $('#graTotal').val(totalGra);
                $('#azuTotal').val(totalAzu);
            });

            $('#btnCalcularComparativa').click(function () {
                var totalPc = parseInt($('#pcTotal').val());
                var totalLeg = parseInt($('#legTotal').val());
                var totalFrut = parseInt($('#frutTotal').val());
                var totalVer = parseInt($('#verTotal').val());
                var totalLac = parseInt($('#lacTotal').val());
                var totalCar = parseInt($('#carTotal').val());
                var totalGra = parseInt($('#graTotal').val());
                var totalAzu = parseInt($('#azuTotal').val());


                var pcChos = totalPc * 15;
                $('#pcChoInput').val(pcChos);
                var pcProt = totalPc * 3;
                $('#pcProtInput').val(pcProt);
                var pcLip = totalPc * 1;
                $('#pcLipInput').val(pcLip);
                var pcCal = totalPc * 80;
                $('#pcCalInput').val(pcCal);


                var legChos = totalLeg * 15;
                $('#legChoInput').val(legChos);
                var legProt = totalLeg * 7;
                $('#legProtInput').val(legProt);
                var legLip = totalLeg * 1;
                $('#legLipInput').val(legLip);
                var legCal = totalLeg * 100;
                $('#legCalInput').val(legCal);

                var frutChos = totalFrut * 15;
                $('#frutChoInput').val(frutChos);
                var frutProt = totalFrut * 0;
                $('#frutProtInput').val(frutProt);
                var frutLip = totalFrut * 0;
                $('#frutLipInput').val(frutLip);
                var frutCal = totalFrut * 60;
                $('#frutCalInput').val(frutCal);

                var verChos = totalVer * 5;
                $('#verChoInput').val(verChos);
                var verProt = totalVer * 2;
                $('#verProtInput').val(verProt);
                var verLip = totalVer * 0;
                $('#verLipInput').val(verLip);
                var verCal = totalVer * 25;
                $('#verCalInput').val(verCal);

                var lacChos = totalLac * 12;
                $('#lacChoInput').val(lacChos);
                var lacProt = totalLac * 8;
                $('#lacProtInput').val(lacProt);
                var lacLip = totalLac * parseFloat($('#coefLactLipidos').val());
                $('#lacLipInput').val(lacLip);
                var lacCal = totalLac *  parseFloat($('#coefLactCalorias').val());
                $('#lacCalInput').val(lacCal);

                var carChos = totalCar * 0;
                $('#carChoInput').val(carChos);
                var carProt = totalCar * 7;
                $('#carProtInput').val(carProt);
                var carLip = totalCar * 5;
                $('#carLipInput').val(carLip);
                var carCal = totalCar * 75;
                $('#carCalInput').val(carCal);


                var graChos = totalGra * 0;
                $('#graChoInput').val(graChos);
                var graProt = totalGra * 0;
                $('#graProtInput').val(graProt);
                var graLip = totalGra * 5;
                $('#graLipInput').val(graLip);
                var graCal = totalGra * 45;
                $('#graCalInput').val(graCal);

                var azuChos = totalAzu * 10;
                $('#azuChoInput').val(azuChos);
                var azuProt = totalAzu * 0;
                $('#azuProtInput').val(azuProt);
                var azuLip = totalAzu * 0;
                $('#azuLipInput').val(azuLip);
                var azuCal = totalAzu * 40;
                $('#azuCalInput').val(azuCal);


                //Sumar Todos los Gramos de Carbohidratos y Mostrarlos.
                var totalGraChos = calcularGramosComparativa(pcChos, legChos, frutChos,
                    verChos, lacChos, carChos, graChos, azuChos);
                $('#gramChoTotal').val(totalGraChos);

                //Sumar todos los Gramos de Proteinas y Mostrarlos.
                var totalGraProts = calcularGramosComparativa(pcProt, legProt, frutProt,
                    verProt, lacProt, carProt, graProt, azuProt);
                $('#gramProtTotal').val(totalGraProts);

                //Sumar todos los gramos de Lipidos y Mostrarlos.
                var totalGraLips = calcularGramosComparativa(pcLip, legLip, frutLip,
                    verLip, lacLip, carLip, graLip, azuLip);
                $('#gramLipTotal').val(totalGraLips);
                
                //Mostrar las Calorrias en el Input Correspondiente
                var calChoTotales = converirGramosCalorias('carbohidratos', totalGraChos);
                $('#calChosTotal').val(calChoTotales);
                
                var calProtTotales = converirGramosCalorias('proteinas', totalGraProts);
                $('#calProtTotal').val(calProtTotales);
                
                var calLipTotales = converirGramosCalorias('lipidos', totalGraLips);
                $('#calLipTotal').val(calLipTotales);

                var totalCals = calcularGramosComparativa(pcCal, legCal, frutCal,
                    verCal, lacCal, carCal, graCal, azuCal);
                $('#calCalTotal').val(totalCals);

                //Calcular porcentaje de Macronutrientes y Mostrarlo
                var porcentajeChos = calcularPorcentajeCalorias(calChoTotales, totalCals);
                $('#porChosTotal').val(porcentajeChos);

                var porcentajeProts = calcularPorcentajeCalorias(calProtTotales, totalCals);
                $('#porProtTotal').val(porcentajeProts);

                var porcentajeLips = calcularPorcentajeCalorias(calLipTotales, totalCals);
                $('#porLipTotal').val(porcentajeLips);


                var porcentajeCal = porcentajeChos + porcentajeProts + porcentajeLips;
                $('#porCalTotal').val(porcentajeCal);
            });

        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        },
        
    });

    function calcularCalorias(parametro, paciente) {
        switch (parseInt(parametro)) {
            case 1: // Hombre Formula GEB = 66,4730 + (13,7516 x peso en kg) + (5,0033 x altura en cm) - (6,7550 x edad en años)
                var geb = 66.4730 + (13.7516 * parseFloat(paciente.peso)) + (5.0033 * parseFloat(paciente.talla)) - (6.7550 * parseFloat(paciente.edad));
                //Windows.UI.Popups.MessageDialog('GEB del Paciente: ' + geb).showAsync();
                switch (parseInt(paciente.actFisica)) {
                    case 1: //Poco o ningún ejercicio	Calorías diarias necesarias = GEB x 1,2
                        var get = geb * 1.2;
                        $('#getGet').val(get);
                        break;
                    case 2: //Ejercicio ligero (1-3 días a la semana)	Calorías diarias necesarias = GEB x 1,375
                        var get = geb * 1.375;
                        $('#getGet').val(get);
                        break;
                    case 3: //Ejercicio moderado (3-5 días a la semana)	Calorías diarias necesarias = GEB x 1,55
                        var get = geb * 1.55;
                        $('#getGet').val(get);
                        break;
                    case 4: //Ejercicio fuerte (6-7 días a la semana)	Calorías diarias necesarias = GEB x 1,725
                        var get = geb * 1.725;
                        $('#getGet').val(get);
                        break;
                    case 5: //Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)	Calorías diarias necesarias = GEB x 1,9
                        var get = geb * 1.9;
                        $('#getGet').val(get);
                        break;
                    default:
                        Windows.UI.Popups.MessageDialog('Parametro de Actividad Fisica Incorrecto').showAsync();
                        return;
                }
                break;
            case 2: // Mujer GEB = 665,0955 + (9,5634 x peso en kg) + (1,8449 x altura en cm) - (4,6756 x edad en años)
                var geb = 665.0955 + (9.5634 * parseFloat(paciente.peso)) + (1.8449 * parseFloat(paciente.talla)) - (4.6756 * parseFloat(paciente.edad));
                //Windows.UI.Popups.MessageDialog('GEB del Paciente: ' + geb).showAsync();
                switch (parseInt(paciente.actFisica)) {
                    case 1: //Poco o ningún ejercicio	Calorías diarias necesarias = GEB x 1,2
                        var get = geb * 1.2;
                        $('#getGet').val(get);
                        break;
                    case 2: //Ejercicio ligero (1-3 días a la semana)	Calorías diarias necesarias = GEB x 1,375
                        var get = geb * 1.375;
                        $('#getGet').val(get);
                        break;
                    case 3: //Ejercicio moderado (3-5 días a la semana)	Calorías diarias necesarias = GEB x 1,55
                        var get = geb * 1.55;
                        $('#getGet').val(get);
                        break;
                    case 4: //Ejercicio fuerte (6-7 días a la semana)	Calorías diarias necesarias = GEB x 1,725
                        var get = geb * 1.725;
                        $('#getGet').val(get);
                        break;
                    case 5: //Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)	Calorías diarias necesarias = GEB x 1,9
                        var get = geb * 1.9;
                        $('#getGet').val(get);
                        break;
                    default:
                        Windows.UI.Popups.MessageDialog('Parametro de Actividad Fisica Incorrecto').showAsync();
                        return;
                }
                break;
            case 3:// Mujer Embarazada
                //switch (parseInt(paciente.actFisica)) {
                //    case 1: //Poco o ningún ejercicio	Calorías diarias necesarias = GEB x 1,2

                //        break;
                //    case 2: //Ejercicio ligero (1-3 días a la semana)	Calorías diarias necesarias = GEB x 1,375
                //        break;
                //    case 3: //Ejercicio moderado (3-5 días a la semana)	Calorías diarias necesarias = GEB x 1,55
                //        break;
                //    case 4: //Ejercicio fuerte (6-7 días a la semana)	Calorías diarias necesarias = GEB x 1,725
                //        break;
                //    case 5: //Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)	Calorías diarias necesarias = GEB x 1,9
                //        break;
                //    default:
                //        Windows.UI.Popups.MessageDialog('Parametro de Actividad Fisica Incorrecto').showAsync();
                //        return;
                //}
                break;
            default:
                Windows.UI.Popups.MessageDialog('Parametro Incorrecto').showAsync();
                return;
        }
    }// Termina calcularGeb

    function calcTablaDietSin(calorias , porcCho, porcProt, porcLip) {
        
        
        
        // sacar porcentajes en base a las caloras
        var calcho = parseFloat(calorias) * (parseFloat(porcCho) / 100);
        var calprot = parseFloat(calorias) * (parseFloat(porcProt) / 100);
        var callip = parseFloat(calorias) * (parseFloat(porcLip) / 100);

        //convertir las calorias a gramos
        var gramosCho = calcho / 4;
        var gramosProt = calprot / 4;
        var gramosLip = callip / 9;

        //mostrar calorias en inputs
        $('#choCalorias').val(calcho);
        $('#protCalorias').val(calprot); 
        $('#lipCalorias').val(callip); 

        //mostrar gramos en inputs
        $('#choGramos').val(gramosCho); 
        $('#protGramos').val(gramosProt); 
        $('#lipGramos').val(gramosLip);
        



    }// Termina Calcular Tabla Dietosintetica

    function calcularTotales(param1, param2, param3, param4, param5, param6) {
        var total = parseInt(param1) + parseInt(param2) + parseInt(param3) + parseInt(param4) + parseInt(param5) + parseInt(param6);
        return total;
    }

    function calcularGramosComparativa(param1, param2, param3, param4, param5, param6, param7, param8) {
        var total = param1 + param2 + param3 + param4 + param5 + param6 + param7 + param8;
        return total;
    }

    function converirGramosCalorias(macronutriente, totalGramosNutriente) {
        console.log(macronutriente +  totalGramosNutriente)
        switch (macronutriente) {
            case 'carbohidratos':
                var totalgramosChos = totalGramosNutriente * 4;
                return totalgramosChos;
                break;
            case 'proteinas':
                var totalgramosProts = totalGramosNutriente * 4;
                return totalgramosProts;
                break;
            case 'lipidos':
                var totalgramosLips = totalGramosNutriente * 9;
                return totalgramosLips;
                break;
            default:
                Windows.UI.Popups.MessageDialog('Macronutriente Inexistente').showAsync();
                return;

        }
    }

    function calcularPorcentajeCalorias(caloriasMacro, caloriasTotales) {
        var porcentaje = (caloriasMacro * 100) / caloriasTotales;
        return porcentaje;
    }

    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

})();
