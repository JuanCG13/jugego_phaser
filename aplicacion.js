firebase.initializeApp({
    apiKey: 'AIzaSyB560MPVjSA38eSrg0IwG8wgrFPeusfpns',
    authDomain: 'proyectoprofesores-58a82.firebaseapp.com',
    projectId: 'proyectoprofesores-58a82'
});
  
var db = firebase.firestore();

function guardar(){

    var nombre = document.getElementById('usuario').value;
    
    db.collection("jugadores").add({
        'nombre':nombre,      
    })

    
  
}


