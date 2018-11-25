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

  // create references
  var refmed = firebase.database().ref().child('sensores');
  var refpreguntas = firebase.database().ref().child('preguntas');

  //get stuff from html
	var table = document.getElementById("table")
  var boton = document.getElementById("enviar");

	// send data on click
  boton.onclick = function(){
    var tiempo_ = (document.getElementById('a').value * 3600) + (document.getElementById('b').value * 60) + (document.getElementById('c').value);
    var med_ = document.getElementById('med').value;
    var sense_ = document.getElementById('sense').value;
    var datos = {
      tiempo: tiempo_,
      med: med_,
      sense: sense_,
      boton: 1 
    };
    refpreguntas.set(datos);
  };

  refmed.on('value', snap => {
      // do stuff when database updates
    	sense = snap.val().parametroquesemide;
    	seconds = snap.val().segundos;

    	var row = table.insertRow(0);
      var cell_1 = row.insertCell(0);
      var cell_2 = row.insertCell(1);
      var cell_3 = row.insertCell(2);

      switch(sense) {
        case 0:
          value = snap.val().temperatura;
          variable_midiendo = "temperatura"
          break;
        case 1:
        	value = snap.val().humedad;
          variable_midiendo = "humedad"
          break;
        case 2:
          variable_midiendo = "distancia"
          value = snap.val().distancia;
      }


    	cell_1.innerHTML = variable_midiendo;
    	cell_2.innerHTML = seconds;
      cell_3.innerHTML = value;
	});

  console.log (refmed.value)

}());
