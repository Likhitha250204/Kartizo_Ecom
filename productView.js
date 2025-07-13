let productDet = document.getElementById("product")
let searchId = localStorage.getItem("searchProductId")
let products = JSON.parse(localStorage.getItem("products"))
console.log(searchId);
console.log(products);

if (searchId && products) {
    let searchProduct = products.find(val => val.id == searchId)
    console.log(searchProduct);
    productDet.innerHTML = `
       <section id="cnt">
        <div class="proDet">
        <img src= "${searchProduct.images[0]}" height= "250" width = "250"/>
        <section>
        <h1>${searchProduct.title}</h1>
        <p><b>Brand:</b> ${searchProduct.brand} </p>
        <p><b>Category:</b> ${searchProduct.category} </p>
        <p><b>Description:</b> ${searchProduct.description} </p>
        <p><b>Price:</b> $${searchProduct.price} </p>
        <button class="addToCart" id="addToCart">add to cart</button>
        <button class="back"><a href="Home.html">Back to home</a></button>
        </section>
        </div> 
        <div class="cReviews">
          <h3>Customer Review</h3>
          
          ${searchProduct.reviews.map(val => `
            <section id="review">
              <p>${'❤️'.repeat(val.rating)} ${'🖤'.repeat(5 - val.rating)}</p>
              <p>${val.comment}</p> 
              <p> by ${val.reviewerName} on   ${new Date(val.date).toLocaleDateString()}</p>
          <section>

          

            `
        ).join("")}

        </div>
       </section>

       `
       document.getElementById("addToCart").addEventListener("click" , ()=>{
           addToCart(searchProduct)
       } )
        // document.getElementById("addToCart").addEventListener("click" , addToCart)

} else {
    console.log("product not found");

}

// function addToCart() {
//     let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//     let productToAdd = products.find(val => val.id == searchId);

//     if (!cartItems.find(item => item.id === productToAdd.id)) {
//         cartItems.push(productToAdd);
//         localStorage.setItem("cartItems", JSON.stringify(cartItems));
//         alert('Product added to the cart');
//     } else {
//         alert('Product is already in the cart');
//     }
// }




function addToCart(product){
    let cart = JSON.parse(localStorage.getItem("cart"))  || []
    cart.push(product)
    localStorage.setItem("cart" , JSON.stringify(cart))
   alert("product added to the cart")
    console.log(product);
}