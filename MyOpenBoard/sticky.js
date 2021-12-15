let textAREA = document.querySelector(".fa-file-alt");

textAREA.addEventListener("click",function(e){
    let sticky = document.createElement("div");
        sticky.setAttribute("class","sticky");
        sticky.innerHTML = `<div class="navbar">
                            <div class="minimize"></div>
                            <div class="close"></div>
                            </div>
                            <textarea name=""class="textarea"></textarea>`;
        body.appendChild(sticky);

        let minimize = document.querySelector(".minimize");
        let textarea = document.querySelector(".textarea");

        let isClosed = false;
        minimize.addEventListener("click",function(e){
            if(isClosed == false){
                textarea.style.display = "none";
            } else {
                textarea.style.display = "block";
            }
            isClosed = !isClosed;
        })


        let close = document.querySelector(".close");
        let navbar = document.querySelector(".navbar");
        close.addEventListener("click",function(e){
            sticky.remove();
        })
})