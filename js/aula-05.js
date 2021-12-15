$(document).ready(function () {
    //seletor de descendente 
    //acessando o elemento span que esta dento do elemento div
    $("div span").css("background-color" , "yellow")


});


$(document).ready(function () {
    //seletor de filho
    //acessando o elemento ul que é o elemento filho de li
    $("li > ul").css("background-color" , "red")


});

$(document).ready(function () {
    //seletor de irmaos
    //acessando o elemento li que é o elemento irmao  de item1_1
    $("#item1_1 +  li").css("background-color" , "blue")


});

$(document).ready(function () {
    //seletor de irmaos
    //acessando  todos os irmaos do elemento  item1_1
    $("#item1_1  ~  li").css("background-color" , "blue")


});