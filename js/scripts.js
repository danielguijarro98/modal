const galleryElement = document.getElementById('gallery')
const modalImageElement = document.getElementById('modal-image')
const modalElement = document.getElementById('modal')
const fotoElement = document.getElementById('foto')

const closeElement = document.getElementById('close')
const leftElement = document.getElementById('left')
const rightElement = document.getElementById('right')

const todasLasFotos = Array.from(document.querySelectorAll('.image'))

let contador = 0;
const abrirModal = () => {

}

galleryElement.addEventListener('click', (event) => {
    console.log(event.target.src)
    modalImageElement.src = event.target.src
    modalElement.classList.add('modal-show')
})

closeElement.addEventListener('click', () => {
    modalElement.classList.remove('modal-show')
})

rightElement.addEventListener('click', () => {
    if (contador >= todasLasFotos.length - 1) {
        contador = 0
    } else {
        contador = contador + 1
    }

    modalImageElement.src = todasLasFotos[contador].src

})
leftElement.addEventListener('click', () => {
    if (contador <= 0) {
        contador = todasLasFotos.length - 1
    } else {
        contador = contador - 1
    }
    modalImageElement.src = todasLasFotos[contador].src
})
