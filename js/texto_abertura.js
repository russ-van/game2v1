function inicio() {
    const textoOriginal = "Planeta Alien";
    const elementoTexto = document.querySelector("p")
    const audio = document.querySelector("audio")
    const btn = document.querySelector("button")
    const atrasoRapido = 5000 // Atraso em milissegundos (2 segundos)
    const atrasoDevagar = 7000

    setTimeout(function () {
        btn.style.display = "none"
        audio.play()
    }, atrasoRapido);

    setTimeout(function () {
        elementoTexto.textContent = textoOriginal
    }, atrasoDevagar);


}