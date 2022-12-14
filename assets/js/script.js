/* Author: 
Inayatullah
*/
const hamburger = document.querySelector(".hamburger"),
            nav = document.querySelector(".nav");

            hamburger.addEventListener("click",function () {
                hamburger.classList.toggle("active");
                nav.classList.toggle("active");
            });


const scrollTop = document.querySelector(".scroll-to");
    scrollTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })

const header = document.querySelector(".header");
    window.addEventListener('scroll' , function () {
        if ( window.scrollY > header.offsetHeight + 350){
            header.classList.add("active");
        }else {
            header.classList.remove("active");
    }
});
