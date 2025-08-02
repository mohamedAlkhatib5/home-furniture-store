///////////////// active nav item
document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});
// ************open & close cart ************

var cart = document.querySelector(".cart");
var closecart = document.querySelector(".close_cart");

function open_cart() {
    cart.classList.add("activecart");
    closecart.classList.remove("close");
}

function close_cart() {
    cart.classList.remove("activecart");
    closecart.classList.add("close");
}
//************add items in cart************
var all_products_json;
var items_in_cart = document.querySelector(".items_in_cart");

let product_cart = [];

function addToCart(id, btn) {
    product_cart.push(all_products_json[id]);
    btn.classList.toggle("activebtn");
    btn.innerHTML = "Added To cart";
    getToCart();
}

let count_item = document.querySelector(".count_item");

let mytable = document.querySelector(".mytable");

let price_cart_total = document.querySelector(".price_cart_total");
count_item.innerHTML = 0;



function getToCart() {
    let total_price = 0;
    let items_c = "";
    for (let i = 0; i < product_cart.length; i++) {
        items_c += ` <div class="item_cart ps-0 d-flex">
                <img src="${product_cart[i].img}" alt="" class="">
                <div class="contant">
                    <h6>${product_cart[i].name}</h6>
                    <p class="price_cart">$${product_cart[i].price}</p>
                </div>
                <button onclick="remove(${i})"  class="delete_item">×</button>
            </div>`;

        total_price += product_cart[i].price;
    }
    let mytable = "";
    for (let i = 0; i < product_cart.length; i++) {
        mytable += `
            <tr class="border-bottom border-top   ">
                                        <td class="py-4 w-25">
                                            <div class=" d-flex product-wishlist w-100 m-0">
                                               
                                                <button onclick="remove(${i})"  class="delete_item">×</button>
                                                <img src="${product_cart[i].img}" alt="" class="  img-con">
                                                <div class=" ms-3">
                                                    <p class="fw-bolder">${product_cart[i].name}</p>
                                                    <p class="text-secondary">Color: Black</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4  p-5">$${product_cart[i].price}</td>
                                        <td class="py-4 d-flex justify-content-center align-content-center">
                                            <button class="add-button  ">Add to cart</button>
                                        </td>
                                    </tr>
                                    `;
    }

    // items_in_cart.innerHTML = items_c
    localStorage.setItem("product", items_c);
    localStorage.setItem("prodactmyaccount", mytable);
    localStorage.setItem("number", product_cart.length);
    items_in_cart.innerHTML = localStorage.getItem("product");
    mytable.innerHTML = localStorage.getItem("prodactmyaccount");
    // mytable.innerHTML = mytable

    count_item.innerHTML = localStorage.getItem("number");


    price_cart_total.innerHTML = "$" + total_price;
}

items_in_cart.innerHTML = localStorage.getItem("product");
count_item.innerHTML = localStorage.getItem("number");
count_item2.innerHTML = localStorage.getItem("number");
mytable.innerHTML = localStorage.getItem("prodactmyaccount");

function remove(index) {
    product_cart.splice(index, 1);


    getToCart();
    let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove("activebtn");

        btn.innerHTML = "Add To cart";
    }
}