$(document).ready(function () {
$("#cui").click(function () {
    $('.mob').css("display", "none");
    $('.acc').css("display", "none");
    $('.serv').css("display", "none");
    $('.cui').css("display", "block");
});
$("#acc").click(function () {
    $('.mob').css("display", "none");
    $('.cui').css("display", "none");
    $('.serv').css("display", "none");
    $('.acc').css("display", "block");
});
$("#serv").click(function () {
    $('.mob').css("display", "none");
    $('.acc').css("display", "none");
    $('.cui').css("display", "none");
    $('.serv').css("display", "block");
});
$("#mob").click(function () {
    $('.cui').css("display", "none");
    $('.acc').css("display", "none");
    $('.serv').css("display", "none");
    $('.mob').css("display", "block");
});

///PAGE EVENEMENT
$("#item1").click(function (){
    $('.bap').css("display", "none");
    $('.coc').css("display", "none");
    $('.pot').css("display", "none");
    $('.ann').css("display", "none");
    $('.rec').css("display", "none");
    $('.mar').css("display", "block");
});
$("#item2").click(function (){
    $('.mar').css("display", "none");
    $('.coc').css("display", "none");
    $('.pot').css("display", "none");
    $('.ann').css("display", "none");
    $('.rec').css("display", "none");
    $('.bap').css("display", "block");
});
$("#item3").click(function (){
    $('.bap').css("display", "none");
    $('.mar').css("display", "none");
    $('.pot').css("display", "none");
    $('.ann').css("display", "none");
    $('.rec').css("display", "none");
    $('.coc').css("display", "block");
});
$("#item4").click(function (){
    $('.bap').css("display", "none");
    $('.coc').css("display", "none");
    $('.mar').css("display", "none");
    $('.ann').css("display", "none");
    $('.rec').css("display", "none");
    $('.pot').css("display", "block");
});
$("#item5").click(function (){
    $('.bap').css("display", "none");
    $('.coc').css("display", "none");
    $('.pot').css("display", "none");
    $('.mar').css("display", "none");
    $('.rec').css("display", "none");
    $('.ann').css("display", "block");
});
$("#item6").click(function (){
    $('.bap').css("display", "none");
    $('.coc').css("display", "none");
    $('.pot').css("display", "none");
    $('.ann').css("display", "none");
    $('.mar').css("display", "none");
    $('.rec').css("display", "block");
});

///Active
$(".navigation a, nav-middle a").on("click", function(){
        $(".navigation, nav-middle a").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        });
$(".nav-middle a").on("click", function(){
        $(".nav-middle a").find(".active").removeClass("active");
        $(this).parent().addClass("active");
});

});

