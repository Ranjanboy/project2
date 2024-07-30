var box=document.querySelector("#containar");
var love=document.querySelector("i");
alert("Double click on image.");

box.addEventListener("dblclick",function(){
    love.style.transform='translate(-50%,-50%)scale(1)';
    love.style.opacity=0.8;

    setTimeout(function(){
        love.style.transform='translate(-50%,-50%)scale(0)';

    
    },2000);
    setTimeout(function(){
        love.style.opacity=0;
    
    },1000);

});

