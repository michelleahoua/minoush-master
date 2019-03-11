var ecran = document.querySelector("input")
var historique = document.querySelector('.historique')

var nettoyer = function(){
	ecran.value = ""
}
var supprimer = function(){
	var nombreCaractere = ecran.value.length - 1
	ecran.value = ecran.value.slice(0,nombreCaractere)
}
var saisirChiffre = function(valeur){
	ecran.value = ecran.value + valeur
}
var total = function(){
	historique.innerHTML += ecran.value + ' = ' + eval(ecran.value) + '<br>'
	ecran.value = eval(ecran.value)
}