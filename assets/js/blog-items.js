fetch('assets/js/items.json') //
    .then(Response => Response.json())
    .then(data => {
        //ارجاع المنتجات
        const blog = document.getElementById("blog")

        all_products_json = data
        data.forEach(product => {
            if (product.date) {

                blog.innerHTML += ` 
                <a href=details.html>
                      <div class=" card-blog">
                        <img src="${product.img}" alt="" class="">
                        <div class=" blog2">
                         <p class="mt-4" style="font-size: 20px;">${product.name}</p>
                         <p class="text-secondary">${product.date}</p>
                         </div>
                       
                    </div>   </a>
                                `;




            }

        });
    })


// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** 8

var blog = document.querySelector('.blog');
var iconsort = document.querySelector('.icon-sort');
var iconsort2 = document.querySelector('.icon-sort-2');


function sort2blog() {

    blog.classList.remove('blog')
    blog.classList.add('sort2-blog')
    iconsort2.classList.add('icon-color')
    iconsort.classList.remove('icon-color')
}

function sortblog() {

    blog.classList.remove('sort2-blog')

    blog.classList.add('blog')
    iconsort.classList.add('icon-color')
    iconsort2.classList.remove('icon-color')
}