window.onload=function(){

let savedTheme=localStorage.getItem("theme")||"dark"

document.documentElement.classList.remove("dark","light")

document.documentElement.classList.add(savedTheme)

let btn=document.getElementById("themeBtn")

btn.innerText=savedTheme==="dark"?"🌙":"☀️"

document.getElementById("ano").textContent=new Date().getFullYear()

}

function toggleTheme(){

let html=document.documentElement

let btn=document.getElementById("themeBtn")

if(html.classList.contains("dark")){

html.classList.remove("dark")

html.classList.add("light")

localStorage.setItem("theme","light")

btn.innerText="☀️"

}else{

html.classList.remove("light")

html.classList.add("dark")

localStorage.setItem("theme","dark")

btn.innerText="🌙"

}

}

document.getElementById("formContato")?.addEventListener("submit",function(e){

e.preventDefault()

let nome=document.getElementById("nome").value
let email=document.getElementById("email").value
let mensagem=document.getElementById("mensagem").value

let erro=document.getElementById("erro")

if(nome==""||email==""||mensagem==""){

erro.innerText="Preencha todos os campos."

}else{

erro.innerText="Mensagem enviada!"

}

})
