var h1 = document.querySelector("h1");
h1.style.color = "pink";
var body = document.querySelector("body");
var isBlue = false;
/*
var div = document.querySelector("div");
div.style.color = "red";*/

setInterval ( 
    function()
    {
        if (isBlue)
        {
            body.style.backgroundColor = "yellow";
        }
        else 
        {
            body.style.backgroundColor = "lightblue";
        }
        
        isBlue = !isBlue;
}, 1000);
