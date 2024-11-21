var cartPrint = document.getElementById('cartPrint');
let count = document.getElementById("count");

var showCart = () =>{
    let total = 0;

    let storeCart= JSON.parse(localStorage.getItem('myItems'));
    console.log(storeCart);
    count.innerHTML = storeCart.length;

    storeCart.forEach(product => {
        total += product.price;
        cartPrint.innerHTML += `
        <div class="w-9 c-1 d-flex">
                    <div class="w-4 c-i">
                        <img src="${product.thumbnail}" alt="a1">
                    </div>
                    <div class="w-4 c-t"><h2><span>${product.title}</span></h2></div>
                    <div class="w-4 c-c"><h2><span>$${product.price}</span></h2></div>
                    <div class="w-4 r-c"><button type="button" onclick="deleteProduct(${product.id})"><h2><span ><i class="fa-solid fa-trash"></i></span></h2></button></div>
        </div>
        `
    });

    document.getElementById('total').innerHTML = total;

}
showCart();

var deleteProduct = (id) =>{
    console.log(id);
    let removeCart= JSON.parse(localStorage.getItem('myItems'));
    let newCart = [];

    cartPrint.innerHTML = ``;

    removeCart.filter((pro) =>{
        if(pro.id != id){
            newCart.push(pro)
        }
    })

    localStorage.setItem('myItems',JSON.stringify(newCart));

    showCart();
    count.innerHTML = newCart.length;
}


