
/*SELETORES SIMPLES
- ID    
- CLASS
- ELEMENTO
- GRUPO 
*/
$(document).ready(function () {
  // seleiona tosdos os elementos da pagina
  //$("*").css("color", "blue");
  //acessar um elemento especifico /titulo é um ID
  $("#titulo").css("color", "red");
  //acessar um elemento especifico /outro é uma CLASS
  $(".outro").css("color", "green");
  //acessar um elemento especifico /a é uma TAG

  $("a").css("color", "blue");
});


//SELETOR QUE RETORNA GRUPO DE ELEMENTOS
$(document).ready(function () {
    
    $("h1,a").css("background-color", "yellow");


});