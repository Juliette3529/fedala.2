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
});



