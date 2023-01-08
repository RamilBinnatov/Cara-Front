const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const closeBar = document.getElementById('close')

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}

closeBar.addEventListener('click', () =>{
    nav.classList.remove('active')
})