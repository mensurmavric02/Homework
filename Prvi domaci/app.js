const racunanjeH1 = document.getElementById("racunanje")
const povecavaButton = document.getElementById("povecava")
const umanjujeButton = document.getElementById("umanjuje")
const resetButton = document.getElementById("reset")

let counter = 0

const promeniBoju = () => {
    if (counter < 0 ){
        racunanjeH1.style.color = "red"
    }
    else if (counter > 0 ){
        racunanjeH1.style.color = "green"
    }
    else if (counter === 0){
        racunanjeH1.style.color = "black"
    }
}

povecavaButton.addEventListener("click", function(){
    counter++
    racunanjeH1.innerHTML = counter;
    promeniBoju()
})

umanjujeButton.addEventListener("click", function(){
    counter--
    racunanjeH1.innerHTML = counter
    promeniBoju()
})

resetButton.addEventListener("click", function(){
    counter = 0
    racunanjeH1.innerHTML = counter
    promeniBoju()
})

