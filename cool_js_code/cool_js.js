// random number generator 
// Pick a random number from 1-6
// - Math.random() gives us a decimal from 0-1
// - We multiply by 6, so now we have a random number between 0 up to 6 (but not including 6).  Something likee 3.490823 or 5.991234
// - Then we floor to remove the decimal,  leaving us with a whole number from 0-5
//- Lastly we add one, to get a number between 1 and 6
let roll = Math.floor(Math.random() * 6) + 1;

// boolean statement
// isPurple how to write boolean function 
function isPurple(color) {
    return color.toLowerCase() === 'purple';
}

for (let char of 'cockadoodledoo') {
    console.log(char.toUpperCase());
}

// average for of array
function avg(arr) {
    let total = 0
    for (let num of arr) {
        total += num
    }
    return total / arr.length
}

// Version using indexOf
function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (lowerCased.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

// Version using string.includes()
// Nice and clean, but not supported in IE
function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (!lowerCased.includes(char)) {
            return false;
        }
    }
    return true;
}

// three ways to do the same thing
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
},
{
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
},
{
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
},
{
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
}
]
books.forEach(function (book) {
    console.log(book.title.toUpperCase())
})

for (let book of books) {
    console.log(book.title.toUpperCase())
}

for (let  i = 0; i < books.length; i++) {
    console.log(books[i].title.toUpperCase())
} 

// Do all words end in 'g'?
const allEndInG = words.every(word => {
    const last = word.length - 1;
    return word[last] === 'g'
});

//Does at least 1 book start with 'd'?
const someStartWithD = words.some(word => word[0] === 'd');

// Do all words start with 'd'?
const allStartWithD = words.every(word => word[0] === 'd');

// sort numbers

// Ascending Sort:
const ascSort = prices.sort((a, b) => a - b);// use.slice() to make copy 

// Descending Sort:
const descSort = prices.sort((a, b) => b - a);// use.slice() to make copy 
  
// double implicit return
// We can use rest parameters in arrow functions!
const multiply = (...nums) => (
    nums.reduce((total, currVal) => total * currVal)
)

// return if not value before running  method
const addItemInput = document.querySelector('#addItem')
const itemsUL = document.querySelector('#items')
addItemInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (!this.value) return
        const newItemText = this.value
        const newItem = document.createElement('li')
        newItem.innerText = newItemText
        itemsUL.append(newItem)
        this.value = ''
    }
})