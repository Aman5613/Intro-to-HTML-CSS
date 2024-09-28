var arr = [
    {name : "Apple", image: "https://plus.unsplash.com/premium_photo-1668772704261-b11d89a92bad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Banana", image: "https://images.unsplash.com/photo-1543218024-57a70143c369?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Grapes", image: "https://plus.unsplash.com/premium_photo-1666270423730-9af384b9cb0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Kiwi", image: "https://plus.unsplash.com/premium_photo-1674382739482-5d36b98d653a?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Monkey", image: "https://images.unsplash.com/photo-1648402279767-cf3e3721508e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Cat", image: "https://images.unsplash.com/photo-1503777119540-ce54b422baff?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Dog", image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "city", image: "https://images.unsplash.com/photo-1726458573518-04a433641cb4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "lady1", image: "https://images.unsplash.com/photo-1717674796293-0a49f3721880?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "lady2", image: "https://images.unsplash.com/photo-1714205901170-e9556bc09122?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "lady3", image: "https://images.unsplash.com/photo-1714207427861-9b411beca97e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "lady4", image: "https://images.unsplash.com/photo-1708012512731-1315aa4ff3e2?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name : "Dog", image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

function show_cards(){
    var img = "";
    arr.forEach(function(obj){
        img += `<div class="box">
        <img class="cursor-pointer" src = "${obj.image}">
        </div>`;
    })
        document.querySelector(".container").innerHTML = img;
};
show_cards();

function handlesearchfunctionality(){
    var input = document.querySelector("#searchinput")
    
    input.addEventListener("focus",function(){
        document.querySelector(".overlay").style.display = "block";
    });

    input.addEventListener("blur",function(){
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".searchdata").style.display = "none";
    });

    input.addEventListener("input", function(){
        const filtered_Array = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        // console.log(filtered_Array);
        filtered_Array.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
                            <i class="ri-search-line font-semibold mr-5"></i>
                            <h3 class="font-semibold">${obj.name}</h3>
                        </div>`;
        })

        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}
handlesearchfunctionality();