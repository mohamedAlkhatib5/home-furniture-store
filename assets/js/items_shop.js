fetch('assets/js/items.json') //استدعاء المنتجات من صفحة الثانية 
    .then(Response => Response.json())
    .then(data => {
        //ارجاع المنتجات
        const shop = document.getElementById("shop")



        all_products_json = data
        data.forEach(product => {
            if (product.old_price) {

                shop.innerHTML += ` 
                        <div class="card-shop">
                                   <div class="mon">
                                        <div class="imgswp">
                                            <img src="${product.img}" alt="">
                                            <p>New</p>
                                            <p>-50%</p>
                                             <span id="myspan"> <i class="fa-regular fa-heart"></i></span>
                                            <button class="addm"  onclick="addToCart(${product.id},this)">Add to cart</button>
                                        </div>

                                 </div>
                                        <div class=" text-black text-swip  mom   ">
                                            <div class="stars d-flex mb-2  mt-2">
                                             <i class="fa-solid fa-star "></i>
                                                <i class="fa-solid fa-star "></i>
                                                <i class="fa-solid fa-star "></i>
                                                <i class="fa-solid fa-star "></i>
                                                <i class="fa-solid fa-star "></i>
                                            </div>
                                            <div class="price d-flex flex-column ">
                                                <p> ${product.name} </p>
                                                <p class="old_price ">$${product.old_price} <span class="text-secondary">$${product.price}</span></p>
                                            </div>
                                        </div>
                                        

                                            
                         </div>   
                                
                                `;

            }

        });
    })


// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** 8