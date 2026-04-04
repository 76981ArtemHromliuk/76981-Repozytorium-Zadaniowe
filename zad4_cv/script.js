const button = document.getElementById("Button_Styl");
const theme = document.getElementById("Css_Styl");

button.addEventListener("click", () => {
    if (theme.getAttribute("href") === "red.css") {
        theme.setAttribute("href", "green.css");
    } else {
        theme.setAttribute("href", "red.css");
    }
});