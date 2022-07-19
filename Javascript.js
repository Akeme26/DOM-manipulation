
let arr_img = [
    "url('1.jpg')","url('2.jpg')","url('3.jpg')","url('9.jpg')",
    "url('5.jpg')","url('6.jpg')","url('7.jpg')","url('8.jpg')",
    "url('9.jpg')","url('10.jpg')","url('11.jpg')","url('12.jpg')",
]

let index = 0;
document.body.style.backgroundImage = arr_img[index]

let input = document.getElementById('input');
let counter = document.getElementById('counter');

//Function to add number to counter
function addNumber() {
    if (input.value) {
        counter.innerHTML = input.value;
    }
    input.value = '';
}

//Increase counter
function increment() {
    number = Number(counter.innerHTML);
    number += 1;
    counter.innerHTML = number;
} 

//Decrease counter
function decrement() {
    number = Number(counter.innerHTML);
    number -= 1;
    counter.innerHTML = number;
}

//return to default @ 0
function reset() {
    counter.innerHTML = 0;
}

//Change Background color
function bgColour () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

//Return Default background color
function reset_bgColour () {
    document.body.style.backgroundColor = 'black';
}

//insert and Change Background Image
function changeImage (){
    index ++;
    if (index < arr_img.length){
        let img = arr_img[index]
        document.body.style.backgroundImage = img;
    }else{
        index = 0;
        img = arr_img[index]
        document.body.style.backgroundImage = img;
    }
}

//Retrun default background image
function resetImage() {
    document.body.style.backgroundImage = [];
    index = -1;
}