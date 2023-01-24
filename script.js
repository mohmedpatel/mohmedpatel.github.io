/**** Load Animation ****/
const load = function(){
  document.getElementsByClassName("loading")[0].style.display = "none"
}
setTimeout(load ,2000)

/**** Project List ****/
const titleContent = document.getElementsByClassName("title-content")
const skill = document.getElementsByClassName("content-skill")[0]
const projects = document.getElementsByClassName("content-projects")[0]
const cert = document.getElementsByClassName("content-cert")[0]

titleContent[0].addEventListener("click", ()=>{
    projects.style.display = "none"
    cert.style.display = "none"
    skill.style.display = "flex"
    titleContent[0].style.borderBottom = "1px solid rgb(243, 239, 236)"
    titleContent[1].style.borderBottom = "none"
    titleContent[2].style.borderBottom = "none"
})
titleContent[1].addEventListener("click", ()=>{
    skill.style.display = "none"
    cert.style.display = "none"
    projects.style.display = "flex"
    titleContent[1].style.borderBottom = "1px solid rgb(243, 239, 236)"
    titleContent[0].style.borderBottom = "none"
    titleContent[2].style.borderBottom = "none"
})
titleContent[2].addEventListener("click", ()=>{
    skill.style.display = "none"
    projects.style.display = "none"
    cert.style.display = "flex"
    titleContent[2].style.borderBottom = "1px solid rgb(243, 239, 236)"
    titleContent[1].style.borderBottom = "none"
    titleContent[0].style.borderBottom = "none"
})


/**** Navbar Menu ****/
const bars = document.getElementsByClassName("fa-bars")[0]
const navbar = document.getElementsByClassName("nav-menu")[0]

bars.addEventListener("click", (e) => {
  navbar.classList.toggle(('nav-active'))
})

navbar.firstElementChild.addEventListener("click", ()=>{
    navbar.classList.toggle(('nav-active'))
  })

navbar.lastElementChild.addEventListener("click", ()=>{
    navbar.classList.toggle(('nav-active'))
  })
navbar.firstElementChild.nextElementSibling.addEventListener("click", ()=>{
    navbar.classList.toggle(('nav-active'))
  })

navbar.firstElementChild.nextElementSibling.nextElementSibling.addEventListener("click", ()=>{
    navbar.classList.toggle(('nav-active'))
  })