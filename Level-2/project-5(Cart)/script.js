    // for listing product for display
var product = [
    {name : "Watch",headline : "Beautiful white watch",prize : "23,000", src : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Headphone",headline : "Pink headphone",prize : "20,000", src : "https://plus.unsplash.com/premium_photo-1678101157405-762bb5094cf9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Perfume",headline : "Burbury perfume",prize : "2,000", src : "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Camera",headline : "Traditional polarized camera",prize : "40,000", src : "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Earpod",headline : "White earpod with ANC",prize : "29,999", src : "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
function addproduct(){
    var clutter = "";
    product.forEach(function(obj, index){
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="h-full w-full object-cover" src = "${obj.src}"/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${obj.headline}</h3>
                            <h4 class="font-semibold mt-2">&#8377; ${obj.prize}</h4>
                        </div>
                        <button data-index = "${index}" class="add_button w-10 h-10 rounded-full shader text-yellow-400"><i data-index = "${index}" class="add_button ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
    })
    document.querySelector("#productts").innerHTML = clutter;
}
addproduct();


    // for displaying popular product 
var popular = [
    {name : "Watch",headline : "Beautiful white watch",prize : "23,000", src : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Headphone",headline : "Pink headphone",prize : "20,000", src : "https://plus.unsplash.com/premium_photo-1678101157405-762bb5094cf9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Perfume",headline : "Burbury perfume",prize : "2,000", src : "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Camera",headline : "Traditional polarized camera",prize : "40,000", src : "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Earpod",headline : "White earpod with ANC",prize : "29,999", src : "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
function addpopularproduct(){
    var clutter = "";
    popular.forEach(function(prod){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[20%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${prod.src}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${prod.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${prod.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${prod.prize}</h4>
                    </div>
                </div>`;
    })
    document.querySelector(".populars").innerHTML = clutter;
}
addpopularproduct();


    // for adding item to cart 
var cart = [];
function addtocart(){
    document.querySelector("#productts").addEventListener("click",function(clicked){
        if(clicked.target.classList.contains('add_button')){
            var index = clicked.target.dataset.index;
            cart.push(product[index]);
            alert("Added successfully !!!")
        }
    })
}
addtocart();


    // for cart functionality

function showcart(){
    document.querySelector(".carticon").addEventListener("click", function(){
        document.querySelector(".cartexpnd").style.display = "block";
        console.log("Click huaa");
        var clutter = "";
        cart.forEach(function(prod, index){
            clutter += `<div class = "flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500 overflow-hidden">
                        <img class="w-full h-full object-cover" src="${prod.src}"/>
                    </div>
                    <div>
                        <h3 class = "font-semibold">${prod.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">&#8377; ${prod.prize}</h5>
                    </div>
                </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML = clutter;
    })
}
showcart();