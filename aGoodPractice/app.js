function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}
const avatar = document.querySelector('#player')
const coin = document.querySelector('#coin')

// what happens when arrow keys are pushed
window.addEventListener('keyup', function(e) {
     console.log(e.key)
    if (e.key === 'ArrowDown') {
        moveVertical(avatar, 50)
    } 
    else if (e.key === 'ArrowUp') {
        moveVertical(avatar, -50)
    }     
    else if (e.key === 'ArrowRight') {
         moveHorizontal(avatar, 50)
         avatar.style.transform = 'scale(1,1)'
     } 
     else if (e.key === 'ArrowLeft') {
         moveHorizontal(avatar, -50)
         avatar.style.transform = 'scale(-1,1)'
    }
    if (isTouching(avatar, coin)) moveCoin()
 })

 // convert position coordinate to an integer. need first line because there is no position (in CSS, not HTML) on start
 const extractPos = (pos) => {
     if (!pos) return 100
    return parseInt(pos.slice(0,-2)) //parseInt to integer, slice removes the px
 }
 // different methods to move an element 
 const moveVertical = (element, amount) => {
     const currTop = extractPos(element.style.top)
     avatar.style.top = `${currTop + amount}px`
 }
 const moveHorizontal = (element, amount) => {
     const currLeft = extractPos(element.style.left)
     avatar.style.left = `${currLeft + amount}px`
 }
// move coint to random coordinates when touched, or page refreshes
 const moveCoin = function() {
     const y = Math.floor(Math.random() * window.innerHeight)
     const x = Math.floor(Math.random() * window.innerWidth)
     coin.style.top = `${y}px`
     coin.style.left = `${x}px`
 }
moveCoin()