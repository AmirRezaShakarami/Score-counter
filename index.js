const saveEl = document.getElementsByClassName("save-el")
const countEl = document.getElementsByClassName("count-el")
const count = [0, 0]

function increment() {
    count[0] += 1
    countEl[0].textContent = count[0]
}
function save() {
    let countStr = count[0] + " - "
    saveEl[0].textContent += countStr
    countEl[0].textContent = 0
    count[0] = 0
}

function increment2() {
    count[1] += 1
    countEl[1].textContent = count[1]
}
function save2() {
    let countStr = count[1] + " - "
    saveEl[1].textContent += countStr
    countEl[1].textContent = 0
    count[1] = 0
}