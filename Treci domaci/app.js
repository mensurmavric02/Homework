const list = document.querySelectorAll(".list")

for(let i = 0; i < list.length; i++){
    list[i].onclick = function(){
        let j = 0;
        while(j < list.length){
            list[j++].className = "list"
        }
        list[i].className = "list active"
    }
}

const menuActive = document.querySelector(".menu")
const sideBar = document.querySelector(".sideBar")
menuActive.onclick = function(){
    menuActive.classList.toggle("active")
    sideBar.classList.toggle("active")
}

// ovo je funkcija za fb i modal
const open_button = document.getElementById("open_button")
const modal_Div = document.getElementById("modal_Div")
const close_button = document.getElementById("close_button")
const body = document.body

open_button.addEventListener("click", () =>{
    modal_Div.classList.add("visible")
    modal_Div.classList.remove("invisible")
    body.style.backgroundColor = "rgba(5, 5, 6, 0.5)"
})

close_button.addEventListener("click", () =>{
    modal_Div.classList.add("invisible")
    modal_Div.classList.remove("visible")
    body.style.backgroundColor = ""
})
