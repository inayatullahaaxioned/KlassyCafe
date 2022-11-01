/* Author: 
Inayatullah
*/
const hamburger = document.querySelector(".hamburger"),
    nav = document.querySelector(".nav");

hamburger.addEventListener("click", function () {
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
window.addEventListener('scroll', function () {
    if (window.scrollY > header.offsetHeight + 350) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});


//slider using slick slider - banner slider
$('.banner-list').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// menu section slider of menu item 
$('.menu-list').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

//tab filter js
var tab = document.querySelectorAll('.tab-list li'),
    tabItem = document.querySelectorAll('.tab-item');

tab.forEach(function (tab) {
    tab.addEventListener('click', function () {
        var tabType = this.getAttribute('data-tab');
        tabFilter(tab, tabType);
    });
});

function tabFilter(tab, tabType) {
    var activeTab = document.querySelector('.active-tab');
    if (activeTab) {
        activeTab.classList.remove('active-tab');
    }
    tab.classList.add('active-tab');

    for (var item of tabItem) {
        // item.classList.remove('active');
        if (item.getAttribute('data-menu') == tabType) {
            item.classList.add('active');
        }
    }
}


var video = document.querySelector('.about-video img');

video.addEventListener('click', playVideo);

function playVideo() {
    var div = document.createElement('div'),
        image = document.createElement('img'),
        span = document.createElement('span');
    image.src = this.src;
    image.alt = 'video';
    span.classList.add('close-btn');
    span.innerText = "close";
    div.classList.add('modal');
    div.appendChild(span);
    div.appendChild(image);
    div.addEventListener('click', modalFunction);
    document.body.appendChild(div);
}

function modalFunction(e) {
    if (e.target == this) {
        document.body.removeChild(this);
    }
}


