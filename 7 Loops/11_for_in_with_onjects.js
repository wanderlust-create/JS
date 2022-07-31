const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

// THIS DOES NOT WORK!
// OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
// for (let x of movieReviews) {
// 	console.log(x);
// }

// We CAN iterate over the keys of an object
for (let movie of Object.keys(movieReviews)) {
	console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

// We can also iterate over the values
// To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
	total += r;
}
let avg = total / ratings.length;
console.log('Average Rating: ', avg);


// for in
const jpwinnings = {
	regularPay : 2500000,
	watsonChallange : 30000,
	another : 500000,
	last : 120000
};

for(let prop in jpwinnings){
	console.log(prop);// will print the keys
	console.log(jpwinnings[prop]);// will print the values of each key
}
// to total winnings
let total = 0;
for (let prop in jpwinnings) {
	total += jpwinnings[prop];
}
console.log('Ken Jennings total earmings: ${total}');
// if used with an array, the keys are the index value. better to use for in. also, for in does not gurantee order 
