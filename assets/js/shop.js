// ** ** ** ** ** ** ** ** **open filter ** ** ** ** ** ** ** ** ** ** ** *

var cardfilter = document.querySelector('.cartfilter');

function opfilter() {


    cardfilter.classList.toggle('open')
}

// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** *
var shopsort = document.querySelector('.shop');
var iconsort = document.querySelector('.icon-sort');
var iconsort2 = document.querySelector('.icon-sort-2');


shopsort.classList.add(localStorage.getItem('pagshop'));





function sort1() {


    shopsort.classList.remove('sort2')
    shopsort.classList.add('shop')
    iconsort.classList.add('icon-color')
    iconsort2.classList.remove('icon-color')
    localStorage.setItem('pagshop', shopsort.classList);
}


function sort2() {

    shopsort.classList.remove('shop')
    shopsort.classList.add('sort2')
    iconsort2.classList.add('icon-color')
    iconsort.classList.remove('icon-color')

    localStorage.setItem('pagshop', shop.classList);
}