// Begin
var canvas = document.getElementById("gamezone");
var context = document.getContext("2d");
var scoreshow = document.getElementById("score");

var birdimg = new Image();
var hinhnenchinh = new Image();
var ongtren = new Image();
var ongduoi = new Image();

birdimg.src = "images/bird.png";
hinhnenchinh.src = "images/nenchinh.png";
ongtren.src = "images/ongtren.png";
ongduoi.src = "images/ongduoi.png";
// dau tien la nap hinh vo

var score = 0;
var khoangcachhaiong = 140; //al
var khoangcachdenongduoi; // bien nay la khoang cach tu dau ong tren den ong duoi.
var bird = {
  x: hinhnenchinh.width / 5,
  y: hinhnenchinh.height / 2,
};
