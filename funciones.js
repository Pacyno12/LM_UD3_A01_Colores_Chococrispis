
/**Sergio */
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("reloj").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octube', 'Noviembre', 'Diciembre'];
    var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var diasem = dias[today.getDay()];
    var diaact = today.getDate();
    var mesact = meses[today.getMonth()];
    var añoact = today.getFullYear();
    var fecha = diasem+", "+diaact+" "+mesact+" "+añoact;
    document.getElementById("fecha").innerHTML = fecha;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}