// PROTOTYPE //
// <div class="cart-items__item" data-product-id="0">
//  <div class="cart-item__remove-cross">
//   <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path
//       d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
//       fill="#575757" />
//   </svg>
//  </div>
//  <img class="cart-items__item-image" src="img/featured-item-1-pic.png" alt="">
//  <div class="cart-items__item-content">
//   <h4 class="cart-items__item-heading">ELLERY X M'O CAPSULE</h4>
//   <p class="cart-items__item-text">Price: <span class="colored">$52.00</span></p>
//   <p class="cart-items__item-text">Color: Red</p>
//   <p class="cart-items__item-text">Size: XI</p>
//   <p class="cart-items__item-text">Quantity: <input class="cart-items__quantity-input" type="number"
//       placeholder=""/></p>
//  </div>
// </div>

const cartItemsGrid = document.querySelector('.cart-items__grid');
const cartItemsBlock = document.querySelector('.cart-items__block');

//делаем секцию видимой и добавляем покупку если такой ещё не было, просто увеличиваем кол-во если уже была
document.addEventListener('DOMContentLoaded', () => {

    const getDataById = (id) => featuredItemsDataArray.find(el => el.id == id)

    function increaseQuantity(element) {
        element.querySelector('.cart-items__quantity-input').value = Number(element.querySelector('.cart-items__quantity-input').value) + 1;
    }

    function removeItem() {
        this.closest(".cart-items__item").remove();
        //make block invisible if last removed
        hideBlock();
    }
    function hideBlock() {
        if (document.querySelectorAll('.cart-items__item').length === 0) {
            cartItemsBlock.style.display = 'none';
        }
    }

    function addItem(id) {
        const itemData = getDataById(id);

        const item = document.createElement("div");
        item.classList.add("cart-items__item");
        item.dataset.productId = itemData.id;
        item.innerHTML = `
        <div class="cart-item__remove-cross">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                fill="#575757" />
            </svg>
        </div>
    `;
        item.querySelector('.cart-item__remove-cross').addEventListener('click', removeItem);

        const itemImage = document.createElement("img");
        itemImage.classList.add("cart-items__item-image");
        itemImage.src = itemData.imgSrc;
        itemImage.alt = "Featured Item Image";
        item.appendChild(itemImage);

        const itemContent = document.createElement("div");
        itemContent.classList.add("cart-items__item-content");
        item.appendChild(itemContent);

        const itemName = document.createElement("h4");
        itemName.classList.add("cart-items__item-heading");
        itemName.textContent = itemData.itemName;
        itemContent.appendChild(itemName);

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("cart-items__item-text");
        itemPrice.innerHTML = `Price: <span class='colored'>$${itemData.itemPrice.toFixed(2)}</span>`
        itemContent.appendChild(itemPrice);

        const itemColor = document.createElement("p");
        itemColor.classList.add("cart-items__item-text");
        itemColor.textContent = `Color: ${itemData.itemColor}`;
        itemContent.appendChild(itemColor);

        const itemSize = document.createElement("p");
        itemSize.classList.add("cart-items__item-text");
        itemSize.textContent = `Size: ${itemData.itemSize}`;
        itemContent.appendChild(itemSize);

        const itemQantity = document.createElement("p");
        itemQantity.classList.add("cart-items__item-text");
        itemQantity.innerHTML = `Quantity: <input class="cart-items__quantity-input" type="number" placeholder="" value="1">`;
        itemContent.appendChild(itemQantity);

        cartItemsGrid.appendChild(item);
    }

    document.querySelectorAll('.items__add-to-cart').forEach(element => {
        element.addEventListener('click', event => {
            const clickedItem = event.target.closest(".items__item"); //находим на какой покупке кликнули
            if (document.querySelectorAll('.cart-items__item').length === 0) {
                cartItemsBlock.style.display = 'block';
                addItem(clickedItem.dataset.productId);
            } else {
                let itemFound = undefined;
                document.querySelectorAll('.cart-items__item').forEach(el => {
                    if (el.dataset.productId == clickedItem.dataset.productId) {
                        itemFound = el;
                    }
                });
                if (itemFound) {
                    increaseQuantity(itemFound);
                } else {
                    addItem(clickedItem.dataset.productId);
                };
            };
        });
    });
});