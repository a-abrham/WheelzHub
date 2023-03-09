

// Cart

let cartHolder = document.querySelector('.cart-holder');
let closeCart = document.querySelector('#close-cart');


function viewCart() {
    cartHolder.classList.add("active");
    body.classList.add('body');
    container.classList.add('con-mob');
}

// for login
function login() {
    body.classList.add('body');
}

function closelogin() {
    body.classList.remove('body');
}


closeCart.onclick = () =>{
    cartHolder.classList.remove("active");
    body.classList.remove('body');
    container.classList.remove('con-mob');
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeCartItemButtons = document.getElementsByClassName('cart-remove')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    // let addToCartButtons = document.getElementsByClassName('add-to-cart')
    // for (let i = 0; i < addToCartButtons.length; i++) {
    //     let button = addToCartButtons[i]
    //     button.addEventListener('click', addToCartClicked)
    // }

}

function h(title, price, imageUrl) {
    console.log(title, price, imageUrl);

    let cartbox = document.createElement('div');
    cartbox.classList.add('cart-box');
    let cartContent = document.getElementsByClassName('card-content')[0];
    let cartboxNames = cartContent.getElementsByClassName('cart-product-title');
    
    let cartboxContents = `
    <img src="${imageUrl}" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price} ETB</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="bx bxs-trash cart-remove"></i>
    </div>
    `;
    cartbox.innerHTML = cartboxContents;
    cartContent.append(cartbox);
    cartbox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
    cartbox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)

    updatetotal();
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

function updatetotal() {
    document.getElementsByClassName('total-price')[0].innerText = '0 ETB '

    let cartContent = document.getElementsByClassName('card-content')[0]
    let cartboxes = cartContent.getElementsByClassName('cart-box')
    let total = 0
    for (let i = 0; i < cartboxes.length; i++) {
        let cartbox = cartboxes[i]
        let priceElement = cartbox.getElementsByClassName('cart-price')[0]
        let quantityElement = cartbox.getElementsByClassName('cart-quantity')[0]
        let price = parseFloat(priceElement.innerText.replace('ETB', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = total + ' ETB '
    }
}





// featured car image viewer

function changepic(smallImg) {
    let bigImg = document.getElementById('imagebox');
    bigImg.src = smallImg.src;
}
    



// go to top

let scroll = document.getElementById('header');


window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    }
    scroll.classList.add('activ');
    }
    else {
    document.getElementById("myBtn").style.display = "none";
    scroll.classList.remove('activ');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("myBtn").addEventListener("click", topFunction);







/* nav mob reponsive */
let mobMenu = document.getElementById('mobMenu');
let menu = document.querySelector('.menu');
let body = document.querySelector('body');
let container = document.querySelector('section');


mobMenu.onclick = function() {
    topFunction();
    mobMenu.classList.toggle('fa-times');
    menu.classList.toggle('active');
    body.classList.toggle('body');
    container.classList.toggle('con-mob');
}

