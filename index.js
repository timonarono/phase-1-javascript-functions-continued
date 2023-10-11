// code your solution here
function saturdayFun(activity='roller-skate') {
    return(`This Saturday, I want to ${activity}!`)
}
saturdayFun()
saturdayFun("bathe my dog")
function mondayWork(activity='go to the office') {
return(`This Monday, I will ${activity}.`)
}
mondayWork()

function wrapAdjective( oparetor="*") {
return function (inner="special"){
    return(`You are ${oparetor}${inner}${oparetor}!`)
}

}
wrapAdjective("||") 