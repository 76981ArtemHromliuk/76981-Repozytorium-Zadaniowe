const buttonStyl = document.getElementById("Button_Styl");
const Styl = document.getElementById("Css_Styl");
const buttonUkryj = document.getElementById("Button_Ukryj");
const sekcja = document.getElementById("Sekcja_Kontakt");

buttonUkryj.addEventListener("click", () => {
    if (sekcja.style.display === "none") {
        buttonUkryj.textContent="Ukryj sekcję Kontakt";
        sekcja.style.display = "block";
    } else {
        buttonUkryj.textContent="Pokaż sekcję Kontakt";
        sekcja.style.display = "none";
    }
});

buttonStyl.addEventListener("click", () => {
    if (Styl.getAttribute("href") === "red.css") {
        Styl.setAttribute("href", "green.css");
    } else {
        Styl.setAttribute("href", "red.css");
    }
});