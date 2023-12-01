var caps = {
    'A' : 'a',
    'B' : 'b',
    'C' : 'c'
}

var myString = 'Ay Be Cee'
var regExp = /A-Z/

function capsGone(string) {
    var replaced = string.replace(caps)
    return replaced
}

capsGone(myString)