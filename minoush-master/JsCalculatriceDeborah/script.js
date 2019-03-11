var ecran = document.querySelector("button")
var historique = document.querySelector('.historique')

var nettoyer = function(){
	ecran.innerHTML = ""
}
var supprimer = function(){
	var nombreCaractere = ecran.value.length - 1
	ecran.value = ecran.value.slice(0,nombreCaractere)
}
var saisirChiffre = function(valeur){
	ecran.value += valeur
}
var total = function(){
	historique.innerHTML += ecran.value + ' = ' + eval(ecran.value) + '<br>'
	ecran.value = eval(ecran.value)
}