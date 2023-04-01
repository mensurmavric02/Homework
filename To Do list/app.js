const inputText = document.getElementById("inputText")
const addText = document.getElementById("addText")
const lista = document.getElementById("lista")
// const deleteText = document.getElementById("deleteText")

function plus(event){
    event.preventDefault();

    let inputValue = inputText.value;

    if(inputValue.length == ""){
        alert("Molimo Vas unesite tekst");
    } else{
        lista.innerHTML += `<li class="task">
        <p>${inputValue}</p>
        <button class="delete" title="delete"><i class="fa-sharp fa-solid fa-trash"></i></button>
        </li>`
        inputText.value = ""
        inputText.focus()
    }

    let deleteTask = document.querySelectorAll(".delete")
    for(let i = 0; i < deleteTask.length; i++){
        deleteTask[i].onclick = function(){
            this.parentNode.remove()

        }
    }
}    
addText.addEventListener("click", plus)