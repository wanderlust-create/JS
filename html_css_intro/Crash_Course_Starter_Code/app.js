// Write your JS in here
const pics = [
	"imgs/kitty_bed.jpg",
	"imgs/kitty_basket.jpg", 
	"imgs/kitty_laptop.jpg",
	"imgs/kitty_door.jpg",
	"imgs/kitty_sink.jpg",
	"imgs/kitty_wall.jpg"
]
const btn = document.querySelector("button")
const img = document.querySelector("img")
let counter = 0 
btn.addEventListener("click", function(){
	if(counter === 6) {
		counter = 0
	}
	img.src=pics[counter]
	counter++
})