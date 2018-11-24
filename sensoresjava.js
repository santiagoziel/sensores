(function() {

  var config = {
    apiKey: "AIzaSyBkXXJ8ki-vJJZeq_zFvNTCdC6iP33Xk4g",
    authDomain: "sensores-27c53.firebaseapp.com",
    databaseURL: "https://sensores-27c53.firebaseio.com",
    projectId: "sensores-27c53",
    storageBucket: "sensores-27c53.appspot.com",
    messagingSenderId: "726116796060"
  };
  firebase.initializeApp(config);
  var refpreguntas = firebase.database().ref().child('preguntas');
  var boton = document.getElementById("enviar");

  boton.onclick = function(){
    var tiempo_ = (document.getElementById('a').value * 3600) + (document.getElementById('b').value * 60) + (document.getElementById('c').value);
    var med_ = document.getElementById('med').value;
    var sense_ = document.getElementById('sense').value;
    var datos = {
      tiempo: tiempo_,
      med: med_,
      sense: sense_,
    };
    refpreguntas.set(datos);
  };
}());
