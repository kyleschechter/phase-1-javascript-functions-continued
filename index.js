// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(work="go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*"){
    return function inner(hype = "special"){
        return `You are ${flair}${hype}${flair}!`
    }
}