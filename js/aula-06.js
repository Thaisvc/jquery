$(document).ready(function () {
    //aplicando a cor preta nos elementos tr dentro do tbody
$("tbody tr:first").css("background-color","black")

});


$(document).ready(function () {
    //seletor first
    //aplicando a cor preta no primeiro elementos tr dentro do tbody
$("tbody tr:first").css("background-color","black")

});

$(document).ready(function () {
    //seletor last
    //aplicando a cor preta no ultimo elementos tr dentro do tbody
$("tbody tr:last").css("background-color","black")

});


$(document).ready(function () {
    //seletor not
    //aplicando a cor preta em todos os elementos tr dentro do tbody menos no ultimo tr
$("tbody tr:not(tbody tr:last)").css("background-color","black")

});


$(document).ready(function () {
    //seletor even
    //even busca as ocorrencia pares dentro da coleçao
    //aplicando a cor preta em todos os elementos tr dentro do tbody em numeros par
$("tbody tr:even").css("background-color","black")

});

$(document).ready(function () {
    //seletor odd
    //even busca as ocorrencia impares dentro da coleçao
    //aplicando a cor preta em todos os elementos tr dentro do tbody em numeros impares
$("tbody tr:odd").css("background-color","black")

});

$(document).ready(function () {
    //seletor eq
    //identifica uma posiçao especifica
    //aplicando a cor preta em  no  elementos tr dentro do tbody em q o eq foi definido 3
$("tbody tr:eq(3)").css("background-color","black")

});

$(document).ready(function () {
    //seletor  gt 
    //identifica uma posiçao mair que
    //aplicando a cor preta em  todo  elementos tr dentro do tbody  q for o gt  maior q 2
$("tbody tr:gt(2)").css("background-color","black")

});

$(document).ready(function () {
    //seletor  lt
    //identifica uma posiçao menorr que
    //aplicando a cor preta em  todo  elementos lt dentro do tbody  q for o lt  menor q 2
$("tbody tr:gt(2)").css("background-color","black")

});