'use strict';
const WIDTH = 720;
const HEIGHT = 540;
const MESH = 24;
const MAG = 6;


let gStyle = "#00ffff";
let gX = WIDTH / 2;
let gY = HEIGHT - MESH * 3;
let dY = 0;
let gScore = 0;
let gLife = 3;

window.onkeydown = function(ev) {
    if ( ev.keyCode === 37){
        gX -= MAG;
        draw();
    }
    
    if ( ev.keyCode === 38){
        gY -= MAG;
        draw();
    }
    
    if ( ev.keyCode === 39){
        gX += MAG;
        draw();
    }
    
    if ( ev.keyCode === 40){
        gY += MAG;
        draw();
    }
}

function draw() {
    
    let g = document.getElementById("main").getContext("2d");
    g.fillStyle = "white";
    g.fillRect(0, 0, WIDTH, HEIGHT);
    g.fillStyle = "#000000";
    g.fillRect(MESH, MESH, WIDTH - MESH * 2, HEIGHT - MESH * 2);

    g.fillStyle = gStyle;
    g.fillRect(gX, gY, MESH, MESH);

    g.font = "36px monospace";
    g.fillStyle = "#ffffff";
    g.fillText("SCORE:" + gScore, MESH * 2, MESH * 2.5);
    g.fillText("LIFE:" + gLife, WIDTH - MESH * 6 ,MESH * 2.5);

    g.fillStyle = "red";
    let num = Math.floor(Math.random() *  WIDTH - MESH * 3);
    g.fillRect(MESH + num, MESH * 3 + dY, MESH, MESH);
}



function drop() {
    let g = document.getElementById("main").getContext("2d");
    draw();
    dY -= 6;
}

setInterval(drop(), 30);

window.onload = function() {
    draw();
}
