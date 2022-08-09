// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false
function isValidPassword(password, username) {
    const tooShort = password.length < 8;//if less than 8, return true
    const hasSpace =  password.indexOf(' ') !== -1;//if a space exists, return true
    const tooSimilar =  password.indexOf(username) !== -1;// if similar, return true
    return !tooShort && !hasSpace && !tooSimilar;
}
