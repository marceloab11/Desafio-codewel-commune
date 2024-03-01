const menu = document.querySelector("#menu") as HTMLDivElement
const modal = document.querySelector("#modal") as HTMLDivElement
const overlay = document.querySelector('#overlay') as HTMLDivElement

menu.addEventListener('click', ()=> {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})