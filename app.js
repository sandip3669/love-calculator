let yourName = document.querySelector('#yourName')
let theirName = document.querySelector('#theirName')
document.querySelector('#calc').addEventListener('click', calculate)
const output = document.querySelector('#output')


function clearInput() {
    yourName.value = ''
    theirName.value = ''
}
const singleGuys = ['salman', 'hari', 'ram']
function calculate() {
    const yourNameValue = yourName.value
    const theirNameValue = theirName.value

    if (yourNameValue == '' || theirNameValue == '') {
        clearInput()
        return alert('Please enter both names')
    }
    if (yourNameValue.toLowerCase() == "sandip" && theirNameValue.toLowerCase() == "xxx") {
        clearInput()
        return output.innerText = "sandip loves xxx 100 %"
    }
    else if (singleGuys.includes(yourNameValue.toLowerCase()) || singleGuys.includes(theirNameValue.toLowerCase())) {
        clearInput()
        return output.innerText = "Single"
    }
    const lovePercent = parseInt(Math.random() * 100)
    console.log(lovePercent)
    output.innerText = yourNameValue + " and " + theirNameValue + " are in " + lovePercent + " % love "

    clearInput()
}