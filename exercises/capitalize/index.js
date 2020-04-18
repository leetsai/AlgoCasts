// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const arr = str.split(" ");
    const words = [];

    for (word of arr) {
        words.push(capIt(word))
    }

    return words.join(" ");
}

function capIt(str) {
    return str[0].toUpperCase() + str.slice(1);
}

module.exports = capitalize;
