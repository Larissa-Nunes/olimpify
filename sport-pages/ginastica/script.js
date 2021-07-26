let time = 4000,
    currentImageIndex = 0,
    images = document
        .querySelectorAll("#slider img")
max = images.length;


function proximaImagem() {
    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++
    if (currentImageIndex >= max)
    currentImageIndex = 0
    images[currentImageIndex].classList.add("selected")
}


function start() {
    setInterval(() => {
        proximaImagem()
    }, time)
}

window.addEventListener("load", start)