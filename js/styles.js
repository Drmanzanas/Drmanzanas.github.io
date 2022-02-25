"use strict";
let arrImgs = ["angular.png", "react.jpeg", "js.jpeg","node.png","googlecloud.png","aws.jpeg","wordpress.png"]

const setImages = (images) => {
    let $articles = Array.from(document.getElementsByClassName("skillsArticle"))
    $articles.map( (e,i) => {
        e.style.backgroundImage = `url('../assets/${images[i]}')`
    })
}

const sendMail = (name,phone,email,message) => {
    let msgObj = {
        from_name: name,
        from_email: email,
        from_phone: phone,
        message
    }
    emailjs.send("service_stcxhfm","template_71a4ycc",msgObj).then(
      mess => {
          document.querySelector(".loader").style.display = "none";
          document.querySelector(".formButton").style.display = "block";
          if(mess.status == 200){
            document.querySelector(".contactForm").reset()
            alert("Your email was sent succesfully")
          }else{
            alert("There was a problem sending your email. Try again")
          }

      }
    );
}

setImages(arrImgs)

document.getElementById("comunidadhood").addEventListener('click', () => {
    window.open("https://comunidadhood.com", "_blank")
})

document.getElementById("protagonist").addEventListener('click', () => {
    window.open("https://protagonist.es", "_blank")
})

document.getElementById("enthec").addEventListener('click', () => {
    window.open("https://enthec.com", "_blank")
})

document.getElementById("legalify").addEventListener('click', () => {
    window.open("https://legalify.app", "_blank")
})

Array.from(document.getElementsByClassName("contactForm"))[0].addEventListener("submit", e => {
    e.preventDefault();
    let name = Array.from(document.getElementsByClassName("name"))[0].value
    let phone = Array.from(document.getElementsByClassName("phone"))[0].value
    let email = Array.from(document.getElementsByClassName("email"))[0].value
    let message = Array.from(document.getElementsByClassName("message"))[0].value
    let button = document.querySelector(".formButton");
    let loader = document.querySelector(".loader");
    loader.style.display = "block";
    button.style.display = "none";
    sendMail(name,phone,email,message)
})


const menuBtn = document.querySelector(".hamburguer");
const navItems = document.querySelector(".hambNavMenu");
const listItems = Array.from(document.querySelectorAll(".hambMenu_list"));
let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if(!menuOpen){
        menuBtn.classList.add("open")
        navItems.classList.add("openNav")
        menuOpen = true
    }else{
        menuBtn.classList.remove("open")
        navItems.classList.remove("openNav")
        menuOpen = false
    }
})

listItems.map( e => e.addEventListener("click", () => {
    if(!menuOpen){
        menuBtn.classList.add("open")
        navItems.classList.add("openNav")
        menuOpen = true
    }else{
        menuBtn.classList.remove("open")
        navItems.classList.remove("openNav")
        menuOpen = false
    }
})
)