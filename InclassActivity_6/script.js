var button = document.querySelector("#button"); 
var delay = 500;
var clicks = 0;
var level = 1;

if (level === 1) {
    alert("Level " + level);
}

button.addEventListener("mouseenter", function(e){
    setTimeout(function(){
        e.target.style.position ="absolute"; 
        e.target.style.top = Math.random()*90+"%";
        e.target.style.left = Math.random()*90+"%";
    }, delay);
});

button.addEventListener("click", function(e){
    clicks++;
    if(clicks === 3){
        clicks = 0;
        level++;
        alert("Level " + level);
        if (level === 1) {
            delay = 500;
        }
        else if (level === 2) {
            delay = 400;
        }
        else if (level === 3) {
            delay = 300;
        }
        else if (level === 4) {
            delay = 200;
        }
        else if (level === 5) {
            delay = 100;
        }
        else if (level === 6) {
            delay = 0;
        }
    }
});