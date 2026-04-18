// 76981

const buttonStyl = document.getElementById("Button_Styl");
const Styl = document.getElementById("Css_Styl");
const buttonUkryj = document.getElementById("Button_Ukryj");
const sekcja = document.getElementById("Sekcja_Kontakt");

const inpImie = document.getElementById("idimie"); // inpImie = Input imie z index.html. 76981
const inpNazwisko = document.getElementById("idnazwisko");  
const inpEmail = document.getElementById("idemail");
const inpWiadomosc = document.getElementById("idwiadomosc");


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


function funcSprawdzenieDanych()
{
    let valImie = inpImie.value;
    let valNazwisko = inpNazwisko.value;
    let valEmail = inpEmail.value;
    let valWiadomosc = inpWiadomosc.value;

    let errortext;
    // sprawdzenie czy użytkownik wprowadzil dane w polach 76981
    if(valImie === "" || valNazwisko === "" || valEmail === "" || valWiadomosc === "") {  
        errortext = "ERROR: Wszystkie pola muszą być wypełnione!";
    } 
    else if(/\d/.test(valImie))
    {
        errortext = "ERROR: Pole imię nie może zawierać cyfr!";
    }
    else if(/\d/.test(valNazwisko))
    {
        errortext = "ERROR: Nazwisko nie może zawierać cyfr!";
    }
    else if (!/^[^\s@]+@[^\s@] +\.[^\s@]+$/.test(valEmail)) { // uzycie regex do walidacji  email
                                                                    // " [^\s@] " = nie musi zawierac symbola @ lub SPACJI (to jest nazwa email)
                                                                    // " + @" następne musi byc symbol @ (n.p: user76981@...) 
                                                                    // po " @ " mam [^\s@] bez " + " bo można używac tylko 1 symbol @
                                                                    // teraz mamy (user76981@gmail)
                                                                    // " + \." kropka (user76981@gmail.)
                                                                    // po "\." sprawdzenie ostatnie: nie uzywac "spacji" lub "@" [^\s@]
                                                                    //  (user76981@gmail.com)

        errortext = "ERROR: Niepoprawny adres email!";
    }
    else {
        errortext = "Wiadomość została wysłana.";
    }


   document.getElementById("errorProvider").textContent = errortext;
}

// 76981
