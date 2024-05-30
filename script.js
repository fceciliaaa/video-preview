function reproducirVideo(elemento){
    let reproducir = document.querySelector(".mi-video");
    reproducir.play();
    reproducir.muted();
}

function pausarVideo(elemento){
    let pausar = document.querySelector(".mi-video");
    pausar.pause();
}