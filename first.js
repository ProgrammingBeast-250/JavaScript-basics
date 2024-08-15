const string = 'hELLO tHere, hOw ARE yOu?'

function capitalise(s){
    return s.toUpperCase().charAt(0) + s.toLowerCase().slice(1)
}

function lastLetter(s){
    return s.slice(-1)
}

console.log('Starting string:', string)
console.log('Ending string:', capitalise(string))

console.log(lastLetter(string))