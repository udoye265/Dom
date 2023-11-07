var removeButton = document.querySelector('.Remove');
var increaseButton = document.querySelector('.increase-button');
var decreaseButton = document.querySelector(".decrease-button")
var quantityvalue = document.querySelector(".quantity")
const maxquantity = 20
var itemprice = document.querySelector

// Add a click event listener to each "Remove" button

    removeButton.addEventListener('click', function () {
        // Find the closest cart item to the clicked button
        const cartItem = this.closest('.Cart');

        // Check if the cart item exists
        if (cartItem) {
            // Remove the cart item from the DOM
            cartItem.remove();
        }
    });


//Add a click even listener to each Decrease button
increaseButton.addEventListener("click",function () {
    let currentquantity = Number(quantityvalue.textContent)
    console.log(currentquantity)
   if (currentquantity>0) {
    currentquantity++
    quantityvalue.textContent = currentquantity
   }
})
decreaseButton.addEventListener("click", function () {
    let currentquantity = Number(quantityvalue.textContent)
    if (currentquantity>0) {
        currentquantity--
        quantityvalue.textContent = currentquantity
    }
})
let Total = 0





function js(n) {
    for (let index = 1; i<= n; i++) {
        console.log(i)
    }
}

function input(str) {
    let vowel = ['a','e','i','o','u']
    let count = 0
    let i = 0
    for (let i = 0; i < str.length; i++) {
        console.log(str[i])
        if (str[i] = vowel) {
            count ++
            console.log(count)
        }
    }
}



input('eat')
