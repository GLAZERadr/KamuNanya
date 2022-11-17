let clicks = 0;
function telahnanya(){
    const audio = new Audio('sound kamu nanya.mp3');
    audio.play();
    clicks += 1;
    document.getElementById("clicks").innerHTML = "Berapa kali bertanya :" + clicks;
    document.getElementById("img-kamunanya").src = "KN2.jpg";
    audio.addEventListener('ended', function(){
        document.getElementById("img-kamunanya").src = "KN1.png";
    });
}

function reset(){
    clicks -= clicks;
    document.getElementById("clicks").innerHTML = "Berapa kali bertanya :" + clicks;
}
