const menu = document.getElementById("menu");
console.log(menu)
Array.from(menu.children).map((i)=>{
    i.addEventListener("click", ()=>{
        // console.log(i)
        i.classList.toggle("active");
        Array.from(menu.children).map((j)=>{
            if(i!=j){
                j.classList.remove("active");
            }
        })
    })
})