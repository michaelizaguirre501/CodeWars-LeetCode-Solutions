//hash map from string

const hashMap = (str) => {
    const obj = {};
    for (let letter of str.split('')) {
        if (!obj[letter]) {
            obj[letter] = 1
        } else
            obj[letter]++
    }
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}

console.log(hashMap('hello world'))
console.log(hashMap('tina bobina banana phanna fofina'))
console.log(hashMap('racecar'))
console.log(hashMap('bicycle'))