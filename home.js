let cnt = document.getElementById("cnt")
let products = []
let proDetails = ""
function fetchData() {
    window.fetch("https://dummyjson.com/products").then(res => res.json()).then(val => {
        products = val.products
        localStorage.setItem("products" , JSON.stringify(products))
   console.log(products);
   
        displayProducts(products)

    })
}

function displayProducts(products) {
   proDetails = ""
    products.map(product => {
        proDetails += `

           <div class="card">
              <img src = "${product.images[0]}"  height="150" width="200" />
              <p>${product.title}</p>
               <p>$${product.price}</p>
               <section class="view">
               <div class="rating"> 
            
               ${product.rating} <i class="fa-solid fa-star"></i>

               </div>
               <button class="btn" onclick='viewMore( ${ product.id})' >view more</button>
               </section>
           </div>
        `

    })

    cnt.innerHTML = proDetails

}

 function viewMore(productId){
        localStorage.setItem("searchProductId" , productId )
        window.location.href = "productView.html"
    }

   document.getElementById("searchPro").addEventListener('input' , searchProduts)

    function searchProduts(e){

    let searchItem = e.target.value.toLowerCase()

    let filteredItem= products.filter(val=>
        val.title.toLowerCase().includes(searchItem) || 
        val.category.toLowerCase().includes(searchItem)
     )
     displayProducts(filteredItem)
       
    }


fetchData()

// let cart=document.getElementById('cart')
// function additems(){
//     window.location.href = "cart.html";
// }

