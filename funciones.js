
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
let aux = 0;
let colorArrays = ["yellow", "blue", "orange", "black", "purple", "cyan", "gray", "lime", "aqua", "brown"];
function cambiarColor1(){
    num = (Math.floor(Math.random()*10));
    document.getElementById("cuadrado1").style.backgroundColor = colorArrays [num];
}
function cambiarColor2(){
    num = (Math.floor(Math.random()*10));
    document.getElementById("cuadrado2").style.backgroundColor = colorArrays [num];
}
function cambiarColor3(){
    num = (Math.floor(Math.random()*10));
    document.getElementById("cuadrado3").style.backgroundColor = colorArrays [num];
}
function cambiarColor4(){
    num = (Math.floor(Math.random()*10));
    document.getElementById("cuadrado4").style.backgroundColor = colorArrays [num];
}
function cambiarColor5(){
    num = (Math.floor(Math.random()*10));
    document.getElementById("cuadrado5").style.backgroundColor = colorArrays [num];
}
function cambiarColor6(){
    num = (Math.floor(Math.random()*10));
    document.getElementById("cuadrado6").style.backgroundColor = colorArrays [num];
}
function cambiarColor7(){
    num = (Math.floor(Math.random()*10));
    document.getElementById("cuadrado7").style.backgroundColor = colorArrays [num];
}
function cambiarColor8(){
    num = (Math.floor(Math.random()*10));
    document.getElementById("cuadrado8").style.backgroundColor = colorArrays [num];
}
function cambiarColor9(){
    num = (Math.floor(Math.random()*10));
    document.getElementById("cuadrado9").style.backgroundColor = colorArrays [num];
}
function cambiarColor10(){
    num = (Math.floor(Math.random()*10));
    document.getElementById("cuadrado10").style.backgroundColor = colorArrays [num];
}