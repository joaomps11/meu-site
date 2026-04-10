window.onload = function(){
    let savedTheme = localStorage.getItem("theme") || "dark";

    document.documentElement.classList.remove("dark","light");
    document.documentElement.classList.add(savedTheme);

    let btn = document.getElementById("themeBtn");
    btn.innerText = savedTheme === "dark" ? "🌙" : "☀️";
}

function toggleTheme(){
    let html = document.documentElement;
    let btn = document.getElementById("themeBtn");

    if(html.classList.contains("dark")){
        html.classList.remove("dark");
        html.classList.add("light");
        localStorage.setItem("theme","light");
        btn.innerText="☀️";
    } else {
        html.classList.remove("light");
        html.classList.add("dark");
        localStorage.setItem("theme","dark");
        btn.innerText="🌙";
    }
}
