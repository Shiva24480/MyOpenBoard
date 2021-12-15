
let topBoard = canvas.getBoundingClientRect().top;
let leftBoard = canvas.getBoundingClientRect().left;
let ix,iy,fx,fy;
body.addEventListener("mousedown", function(e){
    ix = e.clientX - leftBoard;
    iy = e.clientY - topBoard;
})

//rectangle maker
body.addEventListener("mouseup", function(e){
    fx = e.clientX -leftBoard;
    fy = e.clientY - topBoard;
    let w = fx - ix;
    let h = fy - iy;
    if(cTool == "rect"){
        tool.strokeRect(ix,iy,w,h);
    }
})

//line maker-----
body.addEventListener("mouseup", function(e){
    fx = e.clientX - leftBoard;
    fy = e.clientY - topBoard;
    let w = fx - ix;
    let h = fy - iy;
    if(cTool == "line"){
        tool.beginPath();
        tool.moveTo(ix,iy);
        tool.lineTo(fx,fy);
        tool.stroke();
    }
})


//pencil-----
let todraw = false;
body.addEventListener("mousedown", function(e){
    if(cTool == "pencil"){
        tool.beginPath();
        tool.moveTo(e.clientX-leftBoard,e.clientY-topBoard);
        todraw = true;
    }
})

body.addEventListener("mouseup", function(e){
    if(cTool == "pencil"){
        todraw = false;
    }
})
body.addEventListener("mousemove", function(e){
    if(todraw == false){
        return;
    }
    if(cTool == "pencil"){
        fx = e.clientX -leftBoard;
        fy = e.clientY - topBoard;
        
        tool.lineTo(fx,fy);
        tool.stroke();

        ix = fx;
        iy = fy;
    }
})

// eraser------
body.addEventListener("mousedown", function(e){
    if(cTool == "eraser"){
        tool.beginPath();
        tool.moveTo(e.clientX-leftBoard,e.clientY-topBoard);
        todraw = true;
    }
})

body.addEventListener("mouseup", function(e){
    if(cTool == "eraser"){
        todraw = false;
    }
})
body.addEventListener("mousemove", function(e){
    if(todraw == false){
        return;
    }
    if(cTool == "eraser"){
        fx = e.clientX -leftBoard;
        fy = e.clientY - topBoard;
        
        tool.lineTo(fx,fy);
        tool.stroke();

        ix = fx;
        iy = fy;
    }
})