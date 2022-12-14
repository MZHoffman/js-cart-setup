// Show cart

;(function () {
  const cartInfo = document.getElementById('cart-info')
  const cart = document.getElementById('cart')

  cartInfo.addEventListener('click', function () {
    cart.classList.toggle('show-cart')
  })
})()
//Add items to the cart
;(function () {
  const cartBtn = document.querySelectorAll('.store-item-icon')
  cartBtn.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      if (event.target.parentElement.classList.contains('store-item-icon')) {
        let fullPath = event.target.parentElement.previousElementSibling.src
        let pos = fullPath.indexOf('img') + 3
        let partPath = fullPath.slice(pos)
        const item = {}
        item.img = `img-cart${partPath}`
        let name =
          event.target.parentElement.parentElement.nextElementSibling
            .firstElementChild.firstElementChild.innerText
        item.name = name
        item.price =
          event.target.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.lastElementChild.innerText
        const cartItem = document.createElement('div')
        cartItem.classList.add(
          'cart-item',
          'd-flex',
          'justify-content-between',
          'text-capitalize',
          'my-3'
        )
        cartItem.innerHTML = `
            <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>`

        const cart = document.getElementById('cart')
        const total = document.querySelector('.cart-total-container')
        cart.insertBefore(cartItem, total)  
        //alert("Iteam added")
        showTotals()
      }
    })
  })
  function showTotals(){
    let cartItemsPrices = document.querySelectorAll(".cart-item-price")
    let total = 0
 
    cartItemsPrices.forEach(i => {
      total += parseFloat(i.innerHTML)
    })
    console.log(total.toFixed(2))
    let cartTotal = total.toFixed(2)
    const cartDispalyTotalBottom = document.getElementById("cart-total")
    const cartDispalyTotalTop = document.querySelector(".item-total")
    const itemCount = document.getElementById("item-count")
    cartDispalyTotalBottom.innerText = cartTotal
    cartDispalyTotalTop.innerText = cartTotal
    itemCount.innerText = cartItemsPrices.length
    }
})()
