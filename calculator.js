const button1 = document.querySelector("#one")
const button2 = document.querySelector("#two")
const button3 = document.querySelector("#three")
const button4 = document.querySelector("#four")
const button5 = document.querySelector("#five")
const button6 = document.querySelector("#six")
const button7 = document.querySelector("#seven")
const button8 = document.querySelector("#eight")
const button9 = document.querySelector("#nine")
const button0 = document.querySelector("#zero")
const buttonMinus = document.querySelector("#minus")
const buttonDecimal = document.querySelector("#decimal")
const buttonPlus = document.querySelector("#plus")
const buttonClear = document.querySelector("#clear")
const buttonEquals = document.querySelector("#equals")
const buttonMultiply = document.querySelector("#multiply")
const buttonDivide = document.querySelector("#divide")
const screen = document.querySelector(".screen")
const buttonSqr = document.querySelector("#sqr")
const buttonPow = document.querySelector("#pow")
const buttonHappy = document.querySelector("#happy")

let mode = null
let total = 0
let input = ""
let touched = false

function updateScreen() {
    const noInput = input === ""

    screen.innerText = noInput
        ? total
        : input
}

function touch() {
    const inputNumber = input === ""
        ? 0
        : parseFloat(input)

    total = inputNumber
    touched = true
    input = ""
}
function calculate() {

    const inputNumber = parseFloat(input)
    if (mode === "plus") {
        total = total + inputNumber
    } else if (mode === "multiply") {
        total = total * inputNumber
    } else if (mode === "divide") {
        total = total / inputNumber
    } else if (mode === "minus") {
        total = total - inputNumber
    } else if (mode === "power") {
        total = Math.pow(total, inputNumber)
    }

    if (mode === null) {
        return
    }

    input = ""
    mode = null
    updateScreen()
}

button1.addEventListener("click", function () {
    input += "1"
    updateScreen()
})
button2.addEventListener("click", function () {
    input += "2"
    updateScreen()
})
button3.addEventListener("click", function () {
    input += "3"
    updateScreen()
})
button4.addEventListener("click", function () {
    input += "4"
    updateScreen()
})
button5.addEventListener("click", function () {
    input += "5"
    updateScreen()
})
button6.addEventListener("click", function () {
    input += "6"
    updateScreen()
})
button7.addEventListener("click", function () {
    input += "7"
    updateScreen()
})
button8.addEventListener("click", function () {
    input += "8"
    updateScreen()
})
button9.addEventListener("click", function () {
    input += "9"
    updateScreen()
})
button0.addEventListener("click", function () {
    input += "0"
    updateScreen()
})
buttonDecimal.addEventListener("click", function () {
    if (input.includes(".")) return

    if (input === "") {
        input += "0."
    }
    else {
        input += "."
    }
    updateScreen()
})
buttonClear.addEventListener("click", function () {
    input = ""
    total = 0
    touched = false
    updateScreen()
})

buttonEquals.addEventListener("click", function () {
    calculate()

})
buttonPlus.addEventListener("click", function () {
    if (mode !== null) {
        calculate()

    }
    mode = "plus" // calculate()
    if (!touched) {
        touch()
    }

})
buttonMultiply.addEventListener("click", function () {
    if (mode !== null) {
        calculate()
    }
    mode = "multiply"
    if (!touched) {
        touch()
    }

})
buttonDivide.addEventListener("click", function () {
    if (mode !== null) {
        calculate()
    }
    mode = "divide"
    if (!touched) {
        touch()
    }

})
buttonMinus.addEventListener("click", function () {
    if (mode !== null) {
        calculate()
    }
    mode = "minus"
    if (!touched) {
        touch()
    }

})
buttonPow.addEventListener("click", function () {
    if (mode !== null) {
        calculate()
    }
    mode = "power"
    if (!touched) {
        touch()
    }

})
buttonSqr.addEventListener("click", function () {

    const inputNumber = input === ""
        ? 0
        : parseFloat(input)

    input = Math.sqrt(inputNumber).toString()

    if (!touched) {
        touch()
    }
    updateScreen()

})
buttonHappy.addEventListener("click", function () {
window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank")
})
