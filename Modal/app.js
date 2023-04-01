const open_button = document.getElementById("open_button").addEventListener("click", () => {
    modal_Div.classList.add("visible")
    modal_Div.classList.remove("invisible")
    body.style.backgroundColor = "rgba(5, 5, 6, 0.5)"
})
const modal_Div = document.getElementById("modal_Div")
const close_button = document.getElementById("close_button")
const body = document.body;



close_button.addEventListener("click", () => {
    modal_Div.classList.add("invisible");
    modal_Div.classList.remove("visible")
    body.style.backgroundColor = ""
})
