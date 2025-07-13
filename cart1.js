function displayProduct(){
   let products = JSON.parse(localStorage.getItem("cart"))
   let cartItems = document.getElementById("cartProducts") 
   let totalPrice = document.getElementById("totalPrice") 
   console.log(products);
   let total = 0
   if(products.length == 0){
    cartItems.innerHTML = `<p>cart is empty</p>`
    totalPrice.innerHTML = " "
   }

   products.map((val , index)=>{
    console.log(index);
    
       total += val.price
       cartItems.innerHTML += `
         <div>

          <img src= "${val.images[0]}" height="200" width="200" />
          <p>Category : ${val.category} </p>
          <p>Availability : ${val.availabilityStatus} </p>
          <p>Return Policy : ${val.returnPolicy} </p>
          <p>Shipping : ${val.shippingInformation} </p>
          <p>Stock : ${val.stock} </p>
          <p>warranty : ${val.warrantyInformation} </p>
          <p>Price : $${val.price} </p>

          </div>

          <button onclick="removeItem(${index})">Remove</button>

       `
    })
    totalPrice.innerHTML = `<h2>total Price = $${total.toFixed(2)} </h2>`
}

displayProduct()

function removeItem(index){
   let products = JSON.parse( localStorage.getItem("cart"))
   products.splice(index,1)
   localStorage.setItem("cart" , JSON.stringify(products))
   displayProduct()   
}