let canvas = document.querySelector("canvas");
let body = document.querySelector("body");

let tool = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let pencil = document.querySelector(".fa-pencil-alt");
let eraser = document.querySelector(".fa-eraser");
let rect = document.querySelector(".fa-square");
let line = document.querySelector(".fa-grip-lines-vertical");
let options = document.querySelectorAll(".size-box");
let cTool = "pencil";