let cartItem = JSON.parse(window.localStorage.getItem("carts")) || [];
const blur_background = document.getElementById("blur-background")

//Close Cart PopUp
document.querySelector("#btn-close-cart").addEventListener("click",()=>{
    const cart_popup = document.getElementById("cart-popup");
    blur_background.style.display = "none";
    cart_popup.style.top = "-500px";
    document.body.style.removeProperty("overflow");
})

document.querySelector(".cart").addEventListener("click",fetchCartItem);
document.getElementById("cart-quantity").innerHTML = cartItem.length;

function fetchCartItem(){
    const cart_popup = document.getElementById("cart-popup");
    blur_background.style.display = "block";
    blur_background.style.top = "0";
    cart_popup.style.cssText = `top: calc(50% + ${Math.round(window.scrollY)}px);`;
    const cart_wrapper = document.getElementById("cart-item-wrapper");
    document.body.style.overflow = "hidden";
    let html = "";
    let total = 0;
    if(cartItem.length>0){
        cartItem.forEach(cartitem=>{
            html+=`
                <div class="cart-item">
                    <div class="item-image-wrapper">
                        <img src="../IMG/${cartitem.image}" alt="">
                    </div>
                    <div class="cart-item-desc">
                        <div>
                            <h6>${cartitem.product_name}</h6>
                            <p>x${cartitem.qty}</p>
                        </div>
                        <div>
                            <span>${cartitem.price} $</span>
                            <button class="btn-delete-cart" value="${cartitem.id}"></button>
                        </div>
                    </div>
                </div>
            `;
            total+=cartitem.qty * cartitem.price;
    
        })
    }else
     html = `<h2 id="msg">No Cart Items.</h2>`;


    document.querySelector("#cart-total").innerHTML = total+" $";
    let disprice = total * (5/100);
    document.querySelector("#cart-discount").innerHTML = `(5%) - ${disprice.toFixed(2)} $`;
    document.querySelector("#cart-total-pay").innerHTML = `${cartItem.length == 0 ? 0 : ((total - disprice) + 2).toFixed(2)} $`;
    document.querySelector("#cart-quantity").innerHTML = cartItem.length;
    cart_wrapper.innerHTML = html;
    deleteCart();
}

function deleteCart(){
    document.querySelectorAll(".btn-delete-cart").forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            cartItem = cartItem.filter(val=>val.id!=e.target.value);
            fetchCartItem();
            window.localStorage.setItem("carts",JSON.stringify(cartItem));
        })
    })
}

document.querySelector("#contactus-form").onsubmit = (e) =>{
    e.preventDefault();
    alert('Your message has been sended.');
    document.forms[0].reset();
}

document.querySelector("#btn-checkout").onclick = () =>{ // clear cartitem when click checkout button
    if(cartItem.length > 0){
        alert("Checkout successfull.");
        window.localStorage.removeItem("carts");
        cartItem = [];
        fetchCartItem();
    }else
        alert("Please add some product to cart.");
} 