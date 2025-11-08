const menu = document.getElementById('menu')
const close = document.getElementById('close')

const moblinks = document.querySelector('.mobilelinks')

menu.addEventListener('click', ()=>{
    moblinks.classList.remove('hidden')
    menu.style.display = 'none'
    close.style.display = 'block'
})

close.addEventListener('click', ()=>{
    moblinks.classList.add('hidden')
    close.style.display = 'none'
    menu.style.display = 'block'
})