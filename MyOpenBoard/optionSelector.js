
//option selection

pencil.addEventListener("click", function(e){
    if(cTool == "pencil"){
        //second click and now option are visible
        options[0].style.display = "flex";
    } else {
        for(let i = 0; i < options.length; i++){
            options[i].style.display = "none";
        }
        cTool = "pencil";
        tool.strokeStyle = "black";
        tool.lineWidth = pencilSize;
    }
})
eraser.addEventListener("click", function(e){
    if(cTool == "eraser"){
        //second click and now option are visible
        options[1].style.display = "flex";
    } else {
        for(let i = 0; i < options.length; i++){
            options[i].style.display = "none";
        }
        cTool = "eraser";
        tool.strokeStyle = "white";
        tool.lineWidth = eraserSize;
    }
})
rect.addEventListener("click", function(e){
    if(cTool == "rect"){
        //second click and now option are visible
        options[2].style.display = "flex";
    } else {
        for(let i = 0; i < options.length; i++){
            options[i].style.display = "none";
        }
        cTool = "rect";
        tool.strokeStyle = "black";
        tool.lineWidth = rectSize;
    }
})
line.addEventListener("click", function(e){
    if(cTool == "line"){
        //second click and now option are visible
        options[3].style.display = "flex";

    } else {
        for(let i = 0; i < options.length; i++){
            options[i].style.display = "none";
        }
        cTool = "line";
        tool.strokeStyle = "black";
        tool.lineWidth = lineSize;
    }
})

// ---color changer----

let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");

redColor.addEventListener("click", function(){
    if(cTool != "eraser"){
        tool.strokeStyle = "lightpink";
    }
})
greenColor.addEventListener("click", function(){
    if(cTool != "eraser"){
        tool.strokeStyle = "lightseagreen";
    }
})
blueColor.addEventListener("click", function(){
    if(cTool != "eraser"){
        tool.strokeStyle = "lightskyblue";
    }
})


// size of drawing tool changer
let pencilSize = 2;
let eraserSize = 2;
let rectSize = 2;
let lineSize = 2;

let sizeBoxArr = document.querySelectorAll(".size-box");

//----pencil size---
    sizeBoxArr[0].addEventListener("click", function(e){
        let elemOfBox = ["size1","size2","size3","size4"];
        let alltheClasses = e.target.classList;
        let firstClass = alltheClasses[0];
        let test = elemOfBox.includes(firstClass);

        if(test){
            if(firstClass == "size1"){
                pencilSize = 2;
            } else if(firstClass == "size2"){
                pencilSize = 7;
            } else if(firstClass == "size3"){
                pencilSize = 13;
            } else if(firstClass == "size4"){
                pencilSize = 20;
            }
        }
        tool.lineWidth = pencilSize;
    })

//----eraser size----

sizeBoxArr[1].addEventListener("click", function(e){
    let elemOfBox = ["size1","size2","size3","size4"];
    let alltheClasses = e.target.classList;
    let firstClass = alltheClasses[0];
    let test = elemOfBox.includes(firstClass);

    if(test){
        if(firstClass == "size1"){
            eraserSize = 2;
        } else if(firstClass == "size2"){
            eraserSize = 7;
        } else if(firstClass == "size3"){
            eraserSize = 13;
        } else if(firstClass == "size4"){
            eraserSize = 20;
        }
    }
    tool.lineWidth = eraserSize;
})


//-----rect size
sizeBoxArr[2].addEventListener("click", function(e){
    let elemOfBox = ["size1","size2","size3","size4"];
    let alltheClasses = e.target.classList;
    let firstClass = alltheClasses[0];
    let test = elemOfBox.includes(firstClass);

    if(test){
        if(firstClass == "size1"){
            rectSize = 2;
        } else if(firstClass == "size2"){
            rectSize = 7;
        } else if(firstClass == "size3"){
            rectSize = 13;
        } else if(firstClass == "size4"){
            rectSize = 20;
        }
    }
    tool.lineWidth = rectSize;
})

//---line size
sizeBoxArr[3].addEventListener("click", function(e){
    let elemOfBox = ["size1","size2","size3","size4"];
    let alltheClasses = e.target.classList;
    let firstClass = alltheClasses[0];
    let test = elemOfBox.includes(firstClass);

    if(test){
        if(firstClass == "size1"){
            lineSize = 2;
        } else if(firstClass == "size2"){
            lineSize = 7;
        } else if(firstClass == "size3"){
            lineSize = 13;
        } else if(firstClass == "size4"){
            lineSize = 20;
        }
    }
    tool.lineWidth = lineSize;
})