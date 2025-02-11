//admiro
document.getElementById("admiro").onclick = function() {
    alert("Admiro a Cristiano Ronaldo por la disciplina que tiene y por mantenerse en forma a su edad.");
};

//meta
document.getElementById("meta").ondblclick = function() {
    this.style.backgroundColor = "#4CAF50";
};

//genero
document.getElementById("genero").onmouseover = function() {
    this.style.color = "red";
};
document.getElementById("genero").onmouseout = function() {
    this.style.color = "black";
};

//vivir
document.getElementById("vivir").onmousedown = function() {
    this.style.transform = "scale(1.1)";
};
document.getElementById("vivir").onclick = function() {
    alert("No podría vivir sin comer Pasta Alfredo");
}

//talento
document.getElementById("talento").onfocus = function() {
    this.style.border = "3px solid blue";
};
document.getElementById("talento").onclick = function() {
    alert("Comprender rapido las cosas");
}

//animal
document.getElementById("animal").onwheel = function() {
    this.innerText = "¡Me encantan los perros y gatos!";
};