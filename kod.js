var total = []

// Denna funktion körs när avändaren klickar på add knappen
function add(event) {
console.log("functionen add körs")
event.preventDefault()

// refererar till värdet i elementet med id "selectOption"
var selectValue = document.querySelector("#selectOption").value

// referera till värdet i inputfälten:
// texten
var inputDescription = document.querySelector("#description").value
// siffran
var inputValue = document.querySelector("#value").value

    if(selectValue === "+"){
        // skapar en p tagg
        var p = document.createElement("p")
    
        // anger innehållet i p-taggen
        p.innerHTML = inputDescription + " " + inputValue
        
        // referera till elementet med id "income"
        var incomeElement = document.querySelector("#income")

        // anger vart p-taggen ska vara
        incomeElement.appendChild(p)

        // pushar värdet till total listan
        total.push(Number(inputValue))

    } else if(selectValue === "-"){
        // skapare en p tagg
        var p = document.createElement("p")

        // anger innehållet i p-taggen
        p.innerHTML = inputDescription + " " + inputValue
        
        // referera till elementet med id "expanses"
        var incomeElement = document.querySelector("#expanses")

        // anger vart p-taggen ska vara
        incomeElement.appendChild(p)

        // pushar minus-värdet till total listan
        total.push(Number(-inputValue))
    }

    // var num1 = 3
    // var num2 = 4

    // num1 += num2
    // num1 = num1 + num2

    // console.log(num1) // 7

        // start index
        //  0, 1 , 2 ,3
        // length = 4

    
        
        // var total = [1000, 2000, -4000, 3000]
    var totalValue = 0

    for (let index = 0; index < total.length; index++){
        // totalValue += total[index]
        totalValue = totalValue + total[index]
    }

    var totalElement = document.querySelector("#total")
    totalElement.textContent = totalValue


}

function clear(event){
    event.preventDefault()
    location.reload()
}

// refererar till add knappen
var addButton = document.querySelector("#add-button")
// console.log(addButton)

var clearButton= document.querySelector("#clearButton")

// 1. lägger till en eventlyssnare på addButton
// 2. anger vilket typ av event vi vill lyssna efter
// 3. anger vilken funktion som ska köras
//          1                  2     3
addButton.addEventListener("click", add)
clearButton.addEventListener("click",clear)

// kalla på en function
// add()




//kostnad div