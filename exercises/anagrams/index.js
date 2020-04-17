// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// alternatively, can sort and compare, but interviewers tend not to like it!
function anagrams(stringA, stringB) {
    const strA = transformStr(stringA);
    const strB = transformStr(stringB);

    if (strA.length !== strB.length) {
        return false;
    }
    
    const mapA = buildCharMap(strA);
    const mapB = buildCharMap(strB);
    
    for (let char in mapA) {
        if (mapA[char] !== mapB[char]) {
            return false
        }
    }

    return true;
}

function transformStr(str) {
    return str.replace(/[^\w]/g, "").toLowerCase();
}

function buildCharMap(str) {
    const map = {};
    
    for (char of str) {
        map[char] = map[char] + 1 || 1
    }

    return map;
}

module.exports = anagrams;
