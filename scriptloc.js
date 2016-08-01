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

