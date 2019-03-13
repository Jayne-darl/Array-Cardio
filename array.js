const inventors = [
    { first: 'Albert', last: 'Einstein', year: '1879', passed: '1955' },
    { first: 'Isaac', last: 'Newton', year: '1643', passed: '1727' },
    { first: 'Galileo', last: 'Galilei', year: '1564', passed: '1642' },
    { first: 'Marie', last: 'Curie', year: '1867', passed: '1934' },
    { first: 'Johannes', last: 'Kepler', year: '1571', passed: '1630' },
    { first: 'Nicolaus', last: 'Copernicus', year: '1475', passed: '1545' },
    { first: 'Max', last: 'Planck', year: '1858', passed: '1947' }
]

// Array.prototype.filter()
const fifteen = inventors.filter(inventor => inventor.year > 1500 && inventor.year < 1600)
console.table(fifteen)

// Array.prototype.map()
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(fullName)

// Array.prototype.sort()
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
console.log(ordered)

// Array.prototype.reduce()
const totalYears = inventors.reduce((total, inventor) => total += (inventor.passed - inventor.year), 0)
console.log(totalYears)

// Sort the inventors by years lived
const oldest = inventors.sort(function (a, b) {
    const lastGuy = a.passed - a.year
    const firstGuy = a.passed - a.year
    return lastGuy > firstGuy ? -1 : 1
});
console.table(oldest)

// // Sort links that has de in it
// // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category-generated')
// const links = Array.from(category.querySelectorAll('a'))
// console.log(links)
// const de = links
//     .map(link => link.textContent)
//     .filter(link=> link.includes('de'))
//  return de;

//  sort people albetically by last name
const people = ['Beck, williams', 'Balley, John', 'Boes, len', 'Bright, yen', 'Brian, Ghen', 'Bill, Jackson', 'Berin, Tain', 'Bgred, Housten', 'Bhad, jres', 'Bexa, Kelpler', 'Biron, Kenneth']

const alpha = people.sort((lastOne, NextOne) => {
    const [alast, afirst] = lastOne.split(', ')
    const [blast, bfirst] = NextOne.split(', ')
    return alast > blast ? 1 : -1
})
console.log(alpha)

// Sum up instances of each of these
const data = ['car', 'car', 'walk', 'truck', 'walk', 'van', 'run', 'run', 'truck', 'walk', 'bus', 'walk', 'trailer', 'trailer', 'run', 'car']
const instance = data.reduce((obj, item) => {
if (!obj[item]) {
    obj[item] = 0
}
obj[item]++;
return obj
}, {})
console.log(instance)




