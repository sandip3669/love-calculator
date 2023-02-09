const yourName = document.querySelector("#yourName")
const theirName = document.querySelector("#theirName")
document.querySelector('#calc').addEventListener('click', calculate)
const output = document.querySelector('#output')
const singleGuys = ['madhu','hari','ram']
function calculate(){
    const yourNamevalue =yourName.value
    const theirNamevalue = theirName.value
    if (yourNamevalue == '' || theirNamevalue == ''){
        return alert( 'please entre both name')
    }
    if (singleGuys.includes(yourNamevalue.toLowerCase()) || singleGuys.includes (theirNamevalue.toLowerCase())) {
         output.innerText ='oops this guy is play boy'}
         clearInput()
         return
    
    // console.log(yourNamevalue,theirNamevalue)
    const lovepercent =  parseInt(Math.random()*100)
    // console.log(lovepercent)
    output.innerText = yourNamevalue + ' and ' + theirNamevalue + ' are in '+ lovepercent + "% love"
    clearInput()
}
function clearInput(){
    yourName.value = ""
    theirName.value=""
}
