$(document).ready(function () {

    $("body").on('click', '[href*="#"]', function (e) {
    let fixed_offset = 100;//padding-top
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});
    
let counter = 0;
let delay = 6000;
let stop = 60000;


const data = [
    {
        text: "Faux shearling double-breasted coat",
        where: "London, Great Britain"
    },
    {
        text: "Backpack with contrasting buckle",
        where: "Kyiv, Ukraine"
    },
    {
        text: "Shirt in organic cotton classic gingham",
        where: "Rome, Italy"
    },
];

function changeMarketingData() {
    $(".marketing").addClass(" marketing__end");

    const stringTitle = `${data[counter].text}`;
    const stringWhere = `15 minutes ago ${data[counter].where}`;

    $(".marketing__text").text(stringTitle);
    $(".marketing__subtext").text(stringWhere);

    counter++;

    if (counter === data.length) {
        counter = 0;
    }

};
function DataDelay() {
    $(".marketing").removeClass(" marketing__end");
};

setInterval(changeMarketingData, delay);
setInterval(DataDelay, stop);

$(document).ready(function () {
    $("#close_btn").on("click", function () {
        $(".marketing").addClass(" marketing__end")
    });
}); 
    
$('.header__burger').on("click", function () {
    $('.menu__icon').toggleClass(' icon-active');
    $('.header__list').toggleClass(' list-active');
    $('.header__nav').toggleClass(' nav-active');
    $('body').toggleClass(' body-activeee');
});

$('.header__link').click(function (event) {
    $('.header__list').toggleClass(' list-active');
    $('.menu__icon').toggleClass(' icon-active');
    $('.header__nav').toggleClass(' nav-active');
    $('body').removeClass(' body-activeee');
});

    $("#search").on("click", function () {
        $(".header__submit").attr("type", "submit");
        $(".header__search").toggleClass('search__active');
    });

    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        draggable: false
    });

    $(".shop-btn__body").on("click", function () { 

        let text = document.querySelector(".shop-btn__text").textContent;

        $(".shop-btn").toggleClass("shop-btn-active");
        
        if(text == "Load More"){
            $(".shop-more").removeClass("shop-animation2");

            $(".shop-more").removeClass("shop-more-active");
            $(".shop-sale").removeClass("shop-animation1");
            $(".shop-new").removeClass("shop-animation1");
            $(".shop-all").removeClass("shop-animation1");
            $(".shop-more").removeClass("shop-animation1");
            
            setTimeout (function() {
                // $('html, body').animate({scrollTop:1950},'100');
                $(".shop-more").show().addClass("shop-more-active shop-animation1");
              }, 200);

            document.querySelector(".shop-btn__text").textContent = "Load Less";
        }else{
            $(".shop-more").removeClass("shop-animation1");
            $(".shop-more").addClass("shop-animation2");

            setTimeout (function() {
                $(".shop-more").hide().removeClass("shop-more-active");
              }, 400);
            
            document.querySelector(".shop-btn__text").textContent = "Load More";
        }  
    });

    $(".shop__item-new").on("click", function () {       
        $(".shop__item").removeClass('shop__item-active');
        $(this).addClass("shop__item-active"); 

        $(".shop-more").removeClass("shop-more-active");
        $(".shop-sale").removeClass("shop-animation1");
        $(".shop-more").removeClass("shop-animation1");
        $(".shop-all").removeClass("shop-animation1");
        $(".shop-more").removeClass("shop-animation2");

        $(".block-shop").hide();
        $(".shop-more").addClass("shop-more-active");
        $(".shop-new").show().addClass("shop-animation1");
        $(".shop-btn").hide();
    });
    $(".shop__item-sale").on("click", function () {
        $(".shop__item").removeClass("shop__item-active");
        $(this).addClass("shop__item-active");

        $(".shop-more").removeClass("shop-more-active");
        $(".shop-new").removeClass("shop-animation1");
        $(".shop-more").removeClass("shop-animation1");
        $(".shop-all").removeClass("shop-animation1");
        $(".shop-more").removeClass("shop-animation2");

        $(".block-shop").hide();
        $(".shop-more").addClass("shop-more-active");
        $(".shop-sale").show().addClass("shop-animation1");
        $(".shop-btn").hide();
    });
    $(".shop__item-all").on("click", function () {
        document.querySelector(".shop-btn__text").textContent = "Load More";
        $(".shop-btn").removeClass("shop-btn-active");

        $(".shop__item").removeClass("shop__item-active");
        $(this).addClass("shop__item-active");

        $(".shop-more").removeClass("shop-more-active");
        $(".shop-sale").removeClass("shop-animation1");
        $(".shop-new").removeClass("shop-animation1");
        $(".shop-more").removeClass("shop-animation1");
        $(".shop-more").removeClass("shop-animation2");

        $(".block-shop").hide();
        $(".shop-all").show().addClass("shop-animation1");
        $(".shop-btn").show();
    });

    $(".block-shop__like").on("click", function () {
        $(this).toggleClass("block-shop__like--active");
    });



    $('.home-slider-catalog__slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        draggable: false,
        prevArrow: $('.home-slider-catalog__arrow-prev'),
        nextArrow: $('.home-slider-catalog__arrow-next')
    });

    

    $(".catalog-header__close").on("click", function () {
        $(".catalog-header__block").addClass("catalog-header__block-nn");
    });

    $(document).ready(function () {
    let shuruna = window.innerWidth;
    $(".filter-hide").on("click", function () {
        let shuruna2 = window.innerWidth;
        $(".filter__filters").toggleClass("filter--none");
        $(".filter-hide").toggleClass("filter-hide-toggle");
        if (shuruna2 < 815) {
            $(".filter").toggleClass("filter__white");
        }
    });
    if (shuruna > 814) {
        $(".filter").removeClass("filter__white");
    }
    $(window).resize(function () {
        if ($(window).width() > 814) {
            $(".filter").removeClass("filter__white");
            $(".filter__filters").removeClass("filter--none");
        $(".filter-hide").removeClass("filter-hide-toggle");
        }
        else{
            $(".filter").removeClass("filter__white");
            $(".filter__filters").addClass("filter--none");
        $(".filter-hide").addClass("filter-hide-toggle");
        }
    });

    

    $(".filter-close-categories").on("click", function () {
        $(".filter-block-categories").toggleClass("filter--open")
    });
    $(".filter-close-color").on("click", function () {
        $(".filter-block-color").toggleClass("filter--open");
    });
    $(".filter-close-size").on("click", function () {
        $(".filter-block-size").toggleClass("filter--open")
    });
    $(".filter-close-brand").on("click", function () {
        $(".filter-block-brand").toggleClass("filter--open")
    });
    $(".catalog-grid-3").on("click", function () {
        $(".catalog-grid-3").addClass("catalog-grid__column--item-current");
        $(".catalog-grid-4").removeClass("catalog-grid__column--item-current");
        $(".catalog-grid-5").removeClass("catalog-grid__column--item-current");
        $(".catalog-grid__content").attr('data-grig-columns', '3');
    });
    $(".catalog-grid-4").on("click", function () {
        $(".catalog-grid-3").removeClass("catalog-grid__column--item-current");
        $(".catalog-grid-4").addClass("catalog-grid__column--item-current");
        $(".catalog-grid-5").removeClass("catalog-grid__column--item-current");
        $(".catalog-grid__content").attr('data-grig-columns', '4');
    });
    $(".catalog-grid-5").on("click", function () {
        $(".catalog-grid-3").removeClass("catalog-grid__column--item-current");
        $(".catalog-grid-4").removeClass("catalog-grid__column--item-current");
        $(".catalog-grid-5").addClass("catalog-grid__column--item-current");
        $(".catalog-grid__content").attr('data-grig-columns', '5');
    });

    let catalogChoisee = document.querySelectorAll(".catalog-choise");
    let filterBlockItem = document.querySelectorAll(".filter-block-button__item");
    let catalogSelect = document.querySelectorAll(".catalog-select");
    let footerChoise = document.querySelectorAll(".footer-body3__choise-big");
    let all_categories = document.querySelector(".all-categories");
    let categorie = document.querySelectorAll(".categorie");
    let all_colors = document.querySelector(".all-colors");
    let color = document.querySelectorAll(".color");
    let all_sizes = document.querySelector(".all-sizes");
    let size = document.querySelectorAll(".size");
    let all_brands = document.querySelector(".all-brands");
    let brand = document.querySelectorAll(".brand");
    let grid_item = document.querySelectorAll(".catalog-grid__item");

    const addChoise = (text) => {
        return (
            `
            <button class="catalog-choise__btn" data-choise-text="${text}">
            ${text}
            <div class="catalog-choise__btn--img"></div>
            </button>
        `
        );
    };

    function myFilter() {

        let array_categories = [];
        let array_colors = [];
        let array_sizes = [];
        let array_brands = [];

        categorie.forEach(el => {
            if(el.classList.contains("filter-button__active")){
                array_categories.push(el.textContent.trim().toLowerCase());   
            }
        });

        color.forEach(el => {
            if(el.classList.contains("filter-button__active")){
                array_colors.push(el.textContent.trim().toLowerCase());     
            }
        });
        size.forEach(el => {
            if(el.classList.contains("filter-button__active")){
                array_sizes.push(el.textContent.trim().toLowerCase());     
            }
        });
        brand.forEach(el => {
            if(el.classList.contains("filter-button__active")){
                array_brands.push(el.textContent.trim().toLowerCase());    
            }
        });

        let leng_categories = array_categories.length;
        let leng_colors = array_colors.length;
        let leng_sizes = array_sizes.length;
        let leng_brands = array_brands.length;

        if(array_categories.length > 0){
            if(array_colors.length > 0){
                if(array_sizes.length > 0){
                    if(array_brands.length > 0){
                        let sum = 0;
                        let sum2 = 0;
                        let sum3 = 0;
                        grid_item.forEach(el => {
                            for(let a = 0; a < leng_categories; a++){
                                let arrayGrid = [];
                                arrayGrid.push(el.classList.value.split(' '));
                                let lengGrid = arrayGrid[0].length;
                                let val;
                                let number = 0;
                                for(let i = 1; i < lengGrid; i++){
                                    val = arrayGrid[0][i];
                                
                                    for(let j = 0; j < leng_categories; j++){
                                        if(val == array_categories[j]){
                                            number++;
                                        }                    
                                    }              
                                }
                                if(number > 0){
                                    for(let i = 1; i < lengGrid; i++){
                                        val = arrayGrid[0][i];
                                    
                                        for(let j = 0; j < leng_colors; j++){
                                            if(val == array_colors[j]){
                                                sum++;
                                            }                 
                                        }              
                                    }
                                    if(sum > 0){
                                        for(let i = 1; i < lengGrid; i++){
                                            val = arrayGrid[0][i];
                                        
                                            for(let j = 0; j < leng_sizes; j++){
                                                if(val == array_sizes[j]){
                                                    sum2++;
                                                }                 
                                            }              
                                        }
                                        if(sum2 > 0){
                                            for(let i = 1; i < lengGrid; i++){
                                                val = arrayGrid[0][i];
                                            
                                                for(let j = 0; j < leng_brands; j++){
                                                    if(val == array_brands[j]){
                                                        sum3++;
                                                    }                 
                                                }              
                                            }
                                            if(sum3 > 0){
                                                el.classList.remove("catalog-grid__item-desactive");
                                                $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                                            }
                                            else{
                                                el.classList.remove("catalog-grid__item-active");
                                                el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                            }

                                            sum3 = 0;
                                        }
                                        else{
                                            el.classList.remove("catalog-grid__item-active");
                                            el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                        }

                                        sum2 = 0;
                                    }
                                    else{
                                        el.classList.remove("catalog-grid__item-active");
                                        el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                    }

                                    sum = 0;
                                }
                                else{
                                    el.classList.remove("catalog-grid__item-active");
                                    el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                }
                            }
                        });
                    }
                    else{
                        let sum = 0;
                        let sum2 = 0;
                        grid_item.forEach(el => {
                            for(let a = 0; a < leng_categories; a++){
                                let arrayGrid = [];
                                arrayGrid.push(el.classList.value.split(' '));
                                let lengGrid = arrayGrid[0].length;
                                let val;
                                let number = 0;
                                for(let i = 1; i < lengGrid; i++){
                                    val = arrayGrid[0][i];
                                
                                    for(let j = 0; j < leng_categories; j++){
                                        if(val == array_categories[j]){
                                            number++;
                                        }                    
                                    }              
                                }
                                if(number > 0){
                                    for(let i = 1; i < lengGrid; i++){
                                        val = arrayGrid[0][i];
                                    
                                        for(let j = 0; j < leng_colors; j++){
                                            if(val == array_colors[j]){
                                                sum++;
                                            }                 
                                        }              
                                    }
                                    if(sum > 0){
                                        for(let i = 1; i < lengGrid; i++){
                                            val = arrayGrid[0][i];
                                        
                                            for(let j = 0; j < leng_sizes; j++){
                                                if(val == array_sizes[j]){
                                                    sum2++;
                                                }                 
                                            }              
                                        }
                                        if(sum2 > 0){
                                            el.classList.remove("catalog-grid__item-desactive");
                                            $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                                        }
                                        else{
                                            el.classList.remove("catalog-grid__item-active");
                                            el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                        }

                                        sum2 = 0;
                                    }
                                    else{
                                        el.classList.remove("catalog-grid__item-active");
                                        el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                    }

                                    sum = 0;
                                }
                                else{
                                    el.classList.remove("catalog-grid__item-active");
                                    el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                }
                            }
                        });
                    }
                }
                else{
                    if(array_brands.length > 0){
                        let sum = 0;
                        let sum2 = 0;
                        grid_item.forEach(el => {
                            for(let a = 0; a < leng_categories; a++){
                                let arrayGrid = [];
                                arrayGrid.push(el.classList.value.split(' '));
                                let lengGrid = arrayGrid[0].length;
                                let val;
                                let number = 0;
                                for(let i = 1; i < lengGrid; i++){
                                    val = arrayGrid[0][i];
                                
                                    for(let j = 0; j < leng_categories; j++){
                                        if(val == array_categories[j]){
                                            number++;
                                        }                    
                                    }              
                                }
                                if(number > 0){
                                    for(let i = 1; i < lengGrid; i++){
                                        val = arrayGrid[0][i];
                                    
                                        for(let j = 0; j < leng_colors; j++){
                                            if(val == array_colors[j]){
                                                sum++;
                                            }                 
                                        }              
                                    }
                                    if(sum > 0){
                                        for(let i = 1; i < lengGrid; i++){
                                            val = arrayGrid[0][i];
                                        
                                            for(let j = 0; j < leng_brands; j++){
                                                if(val == array_brands[j]){
                                                    sum2++;
                                                }                 
                                            }              
                                        }
                                        if(sum2 > 0){
                                            el.classList.remove("catalog-grid__item-desactive");
                                            $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                                        }
                                        else{
                                            el.classList.remove("catalog-grid__item-active");
                                            el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                        }

                                        sum2 = 0;
                                    }
                                    else{
                                        el.classList.remove("catalog-grid__item-active");
                                        el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                    }

                                    sum = 0;
                                }
                                else{
                                    el.classList.remove("catalog-grid__item-active");
                                    el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                }
                            }
                        });
                    }
                    else{
                        let sum = 0;
                        grid_item.forEach(el => {
                            for(let a = 0; a < leng_categories; a++){
                                let arrayGrid = [];
                                arrayGrid.push(el.classList.value.split(' '));
                                let lengGrid = arrayGrid[0].length;
                                let val;
                                let number = 0;
                                for(let i = 1; i < lengGrid; i++){
                                    val = arrayGrid[0][i];
                                
                                    for(let j = 0; j < leng_categories; j++){
                                        if(val == array_categories[j]){
                                            number++;
                                        }                    
                                    }              
                                }
                                if(number > 0){
                                    for(let i = 1; i < lengGrid; i++){
                                        val = arrayGrid[0][i];
                                    
                                        for(let j = 0; j < leng_colors; j++){
                                            if(val == array_colors[j]){
                                                sum++;
                                            }                 
                                        }              
                                    }
                                    if(sum > 0){
                                        el.classList.remove("catalog-grid__item-desactive");
                                        $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                                    }
                                    else{
                                        el.classList.remove("catalog-grid__item-active");
                                        el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                    }

                                    sum = 0;
                                }
                                else{
                                    el.classList.remove("catalog-grid__item-active");
                                    el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                }
                            }
                        });
                    }
                }
                
            }
            else{
                if(array_sizes.length > 0){
                    if(array_brands.length > 0){
                        let sum = 0;
                        let sum2 = 0;
                        grid_item.forEach(el => {
                            for(let a = 0; a < leng_categories; a++){
                                let arrayGrid = [];
                                arrayGrid.push(el.classList.value.split(' '));
                                let lengGrid = arrayGrid[0].length;
                                let val;
                                let number = 0;
                                for(let i = 1; i < lengGrid; i++){
                                    val = arrayGrid[0][i];
                                
                                    for(let j = 0; j < leng_categories; j++){
                                        if(val == array_categories[j]){
                                            number++;
                                        }                    
                                    }              
                                }
                                if(number > 0){
                                    for(let i = 1; i < lengGrid; i++){
                                        val = arrayGrid[0][i];
                                    
                                        for(let j = 0; j < leng_sizes; j++){
                                            if(val == array_sizes[j]){
                                                sum++;
                                            }                 
                                        }              
                                    }
                                    if(sum > 0){
                                        for(let i = 1; i < lengGrid; i++){
                                            val = arrayGrid[0][i];
                                        
                                            for(let j = 0; j < leng_brands; j++){
                                                if(val == array_brands[j]){
                                                    sum2++;
                                                }                 
                                            }              
                                        }
                                        if(sum2 > 0){
                                            el.classList.remove("catalog-grid__item-desactive");
                                            $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                                        }
                                        else{
                                            el.classList.remove("catalog-grid__item-active");
                                            el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                        }

                                        sum2 = 0;
                                    }
                                    else{
                                        el.classList.remove("catalog-grid__item-active");
                                        el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                    }

                                    sum = 0;
                                }
                                else{
                                    el.classList.remove("catalog-grid__item-active");
                                    el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                }
                            }
                        });
                    }
                    else{
                        let sum = 0;
                        grid_item.forEach(el => {
                            for(let a = 0; a < leng_categories; a++){
                                let arrayGrid = [];
                                arrayGrid.push(el.classList.value.split(' '));
                                let lengGrid = arrayGrid[0].length;
                                let val;
                                let number = 0;
                                for(let i = 1; i < lengGrid; i++){
                                    val = arrayGrid[0][i];
                                
                                    for(let j = 0; j < leng_categories; j++){
                                        if(val == array_categories[j]){
                                            number++;
                                        }                    
                                    }              
                                }
                                if(number > 0){
                                    for(let i = 1; i < lengGrid; i++){
                                        val = arrayGrid[0][i];
                                    
                                        for(let j = 0; j < leng_sizes; j++){
                                            if(val == array_sizes[j]){
                                                sum++;
                                            }                 
                                        }              
                                    }
                                    if(sum > 0){
                                        el.classList.remove("catalog-grid__item-desactive");
                                        $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                                    }
                                    else{
                                        el.classList.remove("catalog-grid__item-active");
                                        el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                    }

                                    sum = 0;
                                }
                                else{
                                    el.classList.remove("catalog-grid__item-active");
                                    el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                }
                            }
                        });
                    }
                }
                else{
                    if(array_brands.length > 0){
                        let sum = 0;
                        grid_item.forEach(el => {
                            for(let a = 0; a < leng_categories; a++){
                                let arrayGrid = [];
                                arrayGrid.push(el.classList.value.split(' '));
                                let lengGrid = arrayGrid[0].length;
                                let val;
                                let number = 0;
                                for(let i = 1; i < lengGrid; i++){
                                    val = arrayGrid[0][i];
                                
                                    for(let j = 0; j < leng_categories; j++){
                                        if(val == array_categories[j]){
                                            number++;
                                        }                    
                                    }              
                                }
                                if(number > 0){
                                    for(let i = 1; i < lengGrid; i++){
                                        val = arrayGrid[0][i];
                                    
                                        for(let j = 0; j < leng_brands; j++){
                                            if(val == array_brands[j]){
                                                sum++;
                                            }                 
                                        }              
                                    }
                                    if(sum > 0){
                                        el.classList.remove("catalog-grid__item-desactive");
                                        $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                                    }
                                    else{
                                        el.classList.remove("catalog-grid__item-active");
                                        el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                    }

                                    sum = 0;
                                }
                                else{
                                    el.classList.remove("catalog-grid__item-active");
                                    el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                }
                            }
                        });
                    }
                    else{
                        let sum = 0;
                        grid_item.forEach(el => {
                            let arrayGrid = [];
                            arrayGrid.push(el.classList.value.split(' '));
                        
                            let lengGrid = arrayGrid[0].length;
                            let val;
                        
                            for(let i = 1; i < lengGrid; i++){
                                val = arrayGrid[0][i];
                            
                                for(let j = 0; j < leng_categories; j++){
                                    if(val == array_categories[j]){
                                        sum++;
                                    }                    
                                }              
                            }
                        
                            if(sum > 0){
                                el.classList.remove("catalog-grid__item-desactive");
                                $(el).show();
                                el.classList.add("catalog-grid__item-active");
                                
                            }
                            else{
                                el.classList.remove("catalog-grid__item-active");
                                el.classList.add("catalog-grid__item-desactive");
                                setTimeout (function() {
                                    $(el).hide();
                                  }, 300);
                                
                            }
                        
                            sum = 0;
                        });
                    }
                }
                
            }
        }
        else if(array_colors.length > 0){
            if(array_sizes.length > 0){
                if(array_brands.length > 0){
                        let sum = 0;
                        let sum2 = 0;
                        grid_item.forEach(el => {
                            for(let a = 0; a < leng_colors; a++){
                                let arrayGrid = [];
                                arrayGrid.push(el.classList.value.split(' '));
                                let lengGrid = arrayGrid[0].length;
                                let val;
                                let number = 0;
                                for(let i = 1; i < lengGrid; i++){
                                    val = arrayGrid[0][i];
                                
                                    for(let j = 0; j < leng_colors; j++){
                                        if(val == array_colors[j]){
                                            number++;
                                        }                    
                                    }              
                                }
                                if(number > 0){
                                    for(let i = 1; i < lengGrid; i++){
                                        val = arrayGrid[0][i];
                                    
                                        for(let j = 0; j < leng_sizes; j++){
                                            if(val == array_sizes[j]){
                                                sum++;
                                            }                 
                                        }              
                                    }
                                    if(sum > 0){
                                        for(let i = 1; i < lengGrid; i++){
                                            val = arrayGrid[0][i];
                                        
                                            for(let j = 0; j < leng_brands; j++){
                                                if(val == array_brands[j]){
                                                    sum2++;
                                                }                 
                                            }              
                                        }
                                        if(sum2 > 0){
                                            el.classList.remove("catalog-grid__item-desactive");
                                            $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                                        }
                                        else{
                                            el.classList.remove("catalog-grid__item-active");
                                            el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                        }

                                        sum2 = 0;
                                    }
                                    else{
                                        el.classList.remove("catalog-grid__item-active");
                                        el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                    }

                                    sum = 0;
                                }
                                else{
                                    el.classList.remove("catalog-grid__item-active");
                                    el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                }
                            }
                        });
                }
                else{
                        let sum = 0;
                        grid_item.forEach(el => {
                            for(let a = 0; a < leng_colors; a++){
                                let arrayGrid = [];
                                arrayGrid.push(el.classList.value.split(' '));
                                let lengGrid = arrayGrid[0].length;
                                let val;
                                let number = 0;
                                for(let i = 1; i < lengGrid; i++){
                                    val = arrayGrid[0][i];
                                
                                    for(let j = 0; j < leng_colors; j++){
                                        if(val == array_colors[j]){
                                            number++;
                                        }                    
                                    }              
                                }
                                if(number > 0){
                                    for(let i = 1; i < lengGrid; i++){
                                        val = arrayGrid[0][i];
                                    
                                        for(let j = 0; j < leng_sizes; j++){
                                            if(val == array_sizes[j]){
                                                sum++;
                                            }                 
                                        }              
                                    }
                                    if(sum > 0){
                                        el.classList.remove("catalog-grid__item-desactive");
                                        $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                                    }
                                    else{
                                        el.classList.remove("catalog-grid__item-active");
                                        el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                    }

                                    sum = 0;
                                }
                                else{
                                    el.classList.remove("catalog-grid__item-active");
                                    el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                }
                            }
                        });
                }
            }
            else{
                    if(array_brands.length > 0){
                        let sum = 0;
                        grid_item.forEach(el => {
                            for(let a = 0; a < leng_colors; a++){
                                let arrayGrid = [];
                                arrayGrid.push(el.classList.value.split(' '));
                                let lengGrid = arrayGrid[0].length;
                                let val;
                                let number = 0;
                                for(let i = 1; i < lengGrid; i++){
                                    val = arrayGrid[0][i];
                                
                                    for(let j = 0; j < leng_colors; j++){
                                        if(val == array_colors[j]){
                                            number++;
                                        }                    
                                    }              
                                }
                                if(number > 0){
                                    for(let i = 1; i < lengGrid; i++){
                                        val = arrayGrid[0][i];
                                    
                                        for(let j = 0; j < leng_brands; j++){
                                            if(val == array_brands[j]){
                                                sum++;
                                            }                 
                                        }              
                                    }
                                    if(sum > 0){
                                        el.classList.remove("catalog-grid__item-desactive");
                                        $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                                    }
                                    else{
                                        el.classList.remove("catalog-grid__item-active");
                                        el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                    }

                                    sum = 0;
                                }
                                else{
                                    el.classList.remove("catalog-grid__item-active");
                                    el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                }
                            }
                        });
                    }
                    else{
                        let sum = 0;
                        grid_item.forEach(el => {
                            let arrayGrid = [];
                            arrayGrid.push(el.classList.value.split(' '));
                        
                            let lengGrid = arrayGrid[0].length;
                            let val;
                        
                            for(let i = 1; i < lengGrid; i++){
                                val = arrayGrid[0][i];
                            
                                for(let j = 0; j < leng_colors; j++){
                                    if(val == array_colors[j]){
                                        sum++;
                                    }                    
                                }              
                            }
                        
                            if(sum > 0){
                                el.classList.remove("catalog-grid__item-desactive");
                                $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                            }
                            else{
                                el.classList.remove("catalog-grid__item-active");
                                el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                            }
                        
                            sum = 0;
                        });
                    }
            }                       
        }
        else if(array_sizes.length > 0){
            if(array_brands.length > 0){
                        let sum = 0;
                        grid_item.forEach(el => {
                            for(let a = 0; a < leng_sizes; a++){
                                let arrayGrid = [];
                                arrayGrid.push(el.classList.value.split(' '));
                                let lengGrid = arrayGrid[0].length;
                                let val;
                                let number = 0;
                                for(let i = 1; i < lengGrid; i++){
                                    val = arrayGrid[0][i];
                                
                                    for(let j = 0; j < leng_sizes; j++){
                                        if(val == array_sizes[j]){
                                            number++;
                                        }                    
                                    }              
                                }
                                if(number > 0){
                                    for(let i = 1; i < lengGrid; i++){
                                        val = arrayGrid[0][i];
                                    
                                        for(let j = 0; j < leng_brands; j++){
                                            if(val == array_brands[j]){
                                                sum++;
                                            }                 
                                        }              
                                    }
                                    if(sum > 0){
                                        el.classList.remove("catalog-grid__item-desactive");
                                        $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                                    }
                                    else{
                                        el.classList.remove("catalog-grid__item-active");
                                        el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                    }

                                    sum = 0;
                                }
                                else{
                                    el.classList.remove("catalog-grid__item-active");
                                    el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                                }
                            }
                        });
            }
            else{
                        let sum = 0;
                        grid_item.forEach(el => {
                            let arrayGrid = [];
                            arrayGrid.push(el.classList.value.split(' '));
                        
                            let lengGrid = arrayGrid[0].length;
                            let val;
                        
                            for(let i = 1; i < lengGrid; i++){
                                val = arrayGrid[0][i];
                            
                                for(let j = 0; j < leng_sizes; j++){
                                    if(val == array_sizes[j]){
                                        sum++;
                                    }                    
                                }              
                            }
                        
                            if(sum > 0){
                                el.classList.remove("catalog-grid__item-desactive");
                                $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                            }
                            else{
                                el.classList.remove("catalog-grid__item-active");
                                el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                            }
                        
                            sum = 0;
                        });
            }                        
        }
        else if(array_brands.length > 0){
            let sum = 0;
            grid_item.forEach(el => {
                let arrayGrid = [];
                arrayGrid.push(el.classList.value.split(' '));
            
                let lengGrid = arrayGrid[0].length;
                let val;
            
                for(let i = 1; i < lengGrid; i++){
                    val = arrayGrid[0][i];
                
                    for(let j = 0; j < leng_brands; j++){
                        if(val == array_brands[j]){
                            sum++;
                        }                    
                    }              
                }
            
                if(sum > 0){
                    el.classList.remove("catalog-grid__item-desactive");
                    $(el).show();
                                        el.classList.add("catalog-grid__item-active");
                }
                else{
                    el.classList.remove("catalog-grid__item-active");
                    el.classList.add("catalog-grid__item-desactive");
                                    setTimeout (function() {
                                        $(el).hide();
                                      }, 300);
                }
            
                sum = 0;
            });                    
        }
        else{
            grid_item.forEach(el => {
                el.classList.remove("catalog-grid__item-desactive");
                $(el).show();
                                        el.classList.add("catalog-grid__item-active");
            });
        }

    }        

    $('.filter-block-button__checkbox').on('change', function (e) {
        let text = $(this).next().text();
        let cur_elem = this.parentNode.textContent.trim().toLowerCase();

        

        if ($(this).is(':checked')) {
            if(e.target.classList.contains("all-categories") ){
                categorie.forEach(el => {
                    if(el.classList.contains("filter-button__active")){
                        document.querySelector(`[data-choise-text=${el.textContent}]`).remove();
                    }
                });
                
                $(this).parent().addClass("filter-button__active");

                categorie.forEach(el => {
                    el.querySelector("input").checked = true;
                    el.classList.add("filter-button__active");
                });     
            } 
            else if(e.target.classList.contains("all-colors") ){
                color.forEach(el => {
                    if(el.classList.contains("filter-button__active")){
                        document.querySelector(`[data-choise-text=${el.textContent}]`).remove();
                    }
                });
                
                $(this).parent().addClass("filter-button__active");

                color.forEach(el => {
                    el.querySelector("input").checked = true;
                    el.classList.add("filter-button__active");
                });     
            }
            else if(e.target.classList.contains("all-sizes") ){
                size.forEach(el => {
                    if(el.classList.contains("filter-button__active")){
                        document.querySelector(`[data-choise-text=${el.textContent}]`).remove();
                    }
                });
                
                $(this).parent().addClass("filter-button__active");

                size.forEach(el => {
                    el.querySelector("input").checked = true;
                    el.classList.add("filter-button__active");
                });     
            }
            else if(e.target.classList.contains("all-brands") ){
                brand.forEach(el => {
                    if(el.classList.contains("filter-button__active")){
                        document.querySelector(`[data-choise-text=${el.textContent}]`).remove();
                    }
                });
                
                $(this).parent().addClass("filter-button__active");

                brand.forEach(el => {
                    el.querySelector("input").checked = true;
                    el.classList.add("filter-button__active");
                });     
            }
            else{
                $(this).parent().addClass("filter-button__active");
            }
            $(".catalog-choise").prepend(addChoise(text));


        } 
        else {
            if(e.target.classList.contains("all-categories")){
                document.querySelector(`[data-choise-text=${"All-categories"}]`).remove();

                categorie.forEach(el => {
                    el.querySelector("input").checked = false;
                    el.classList.remove("filter-button__active");   
                })
            }
            else if($(all_categories).is(':checked') && this.parentNode.classList.contains("categorie")){
                document.querySelector(`[data-choise-text=${"All-categories"}]`).remove();

                $(this).parent().addClass("cat_is");
                $(".all-categories").parent().addClass("cat_is");

                let cat = document.querySelectorAll(".cat_is");
                
                cat.forEach(el => {
                    el.querySelector("input").checked = false;
                    el.classList.remove("filter-button__active");
                });

                categorie.forEach(el => {
                    if(el.classList.contains("filter-button__active")){
                        $(".catalog-choise").prepend(addChoise($(el).text().trim()));
                        el.querySelector("input").checked = true;
                    }
                });

                $(this).parent().removeClass("cat_is");
                $(".all-categories").parent().removeClass("cat_is");
            }
            else if(e.target.classList.contains("all-colors")){
                document.querySelector(`[data-choise-text=${"All-colors"}]`).remove();

                color.forEach(el => {
                    el.querySelector("input").checked = false;
                    el.classList.remove("filter-button__active");   
                })
            }
            else if($(all_colors).is(':checked') && this.parentNode.classList.contains("color")){
                document.querySelector(`[data-choise-text=${"All-colors"}]`).remove();

                $(this).parent().addClass("cat_is");
                $(".all-colors").parent().addClass("cat_is");

                let cat = document.querySelectorAll(".cat_is");
                
                cat.forEach(el => {
                    el.querySelector("input").checked = false;
                    el.classList.remove("filter-button__active");
                });

                color.forEach(el => {
                    if(el.classList.contains("filter-button__active")){
                        $(".catalog-choise").prepend(addChoise($(el).text().trim()));
                        el.querySelector("input").checked = true;
                    }
                });

                $(this).parent().removeClass("cat_is");
                $(".all-colors").parent().removeClass("cat_is");
            }
            else if(e.target.classList.contains("all-sizes")){
                document.querySelector(`[data-choise-text=${"All-sizes"}]`).remove();

                size.forEach(el => {
                    el.querySelector("input").checked = false;
                    el.classList.remove("filter-button__active");   
                })
            }
            else if($(all_sizes).is(':checked') && this.parentNode.classList.contains("size")){
                document.querySelector(`[data-choise-text=${"All-sizes"}]`).remove();

                $(this).parent().addClass("cat_is");
                $(".all-sizes").parent().addClass("cat_is");

                let cat = document.querySelectorAll(".cat_is");
                
                cat.forEach(el => {
                    el.querySelector("input").checked = false;
                    el.classList.remove("filter-button__active");
                });

                size.forEach(el => {
                    if(el.classList.contains("filter-button__active")){
                        $(".catalog-choise").prepend(addChoise($(el).text().trim()));
                        el.querySelector("input").checked = true;
                    }
                });

                $(this).parent().removeClass("cat_is");
                $(".all-sizes").parent().removeClass("cat_is");
            }
            else if(e.target.classList.contains("all-brands")){
                document.querySelector(`[data-choise-text=${"All-brands"}]`).remove();

                brand.forEach(el => {
                    el.querySelector("input").checked = false;
                    el.classList.remove("filter-button__active");   
                })
            }
            else if($(all_brands).is(':checked') && this.parentNode.classList.contains("brand")){
                document.querySelector(`[data-choise-text=${"All-brands"}]`).remove();

                $(this).parent().addClass("cat_is");
                $(".all-brands").parent().addClass("cat_is");

                let cat = document.querySelectorAll(".cat_is");
                
                cat.forEach(el => {
                    el.querySelector("input").checked = false;
                    el.classList.remove("filter-button__active");
                });

                brand.forEach(el => {
                    if(el.classList.contains("filter-button__active")){
                        $(".catalog-choise").prepend(addChoise($(el).text().trim()));
                        el.querySelector("input").checked = true;
                    }
                });

                $(this).parent().removeClass("cat_is");
                $(".all-brands").parent().removeClass("cat_is");
            }
            else{
                $(this).parent().removeClass("filter-button__active");
             document.querySelector(`[data-choise-text=${text}]`).remove();
            }
        }

        this.closest('.filter__block').querySelector('.crug').textContent = this.closest('.filter-block-button__columns').querySelectorAll(".filter-button__active").length;

        let categorie_number = document.querySelector(".filter-close-categories").querySelector(".filter-block-top__info").querySelector(".filter-block-top__crug").textContent;
        let color_number = document.querySelector(".filter-close-color").querySelector(".filter-block-top__info").querySelector(".filter-block-top__crug").textContent;
        let size_number = document.querySelector(".filter-close-size").querySelector(".filter-block-top__info").querySelector(".filter-block-top__crug").textContent;
        let brand_number = document.querySelector(".filter-close-brand").querySelector(".filter-block-top__info").querySelector(".filter-block-top__crug").textContent;

        if(categorie_number >= 9 && !all_categories.parentNode.classList.contains("filter-button__active")){
            categorie.forEach(el => {
                if(el.classList.contains("filter-button__active")){
                    document.querySelector(`[data-choise-text=${el.textContent}]`).remove();
                }
                el.querySelector("input").checked = true;
                el.classList.add("filter-button__active");
            });
            $(".catalog-choise").prepend(addChoise("All-categories"));

            document.querySelector(".filter-close-categories").querySelector(".filter-block-top__info").querySelector(".filter-block-top__crug").textContent = 10;
        }
        if(color_number >= 7 && !all_colors.parentNode.classList.contains("filter-button__active")){
            color.forEach(el => {
                if(el.classList.contains("filter-button__active")){
                    document.querySelector(`[data-choise-text=${el.textContent}]`).remove();
                }
                el.querySelector("input").checked = true;
                el.classList.add("filter-button__active");
            });
            $(".catalog-choise").prepend(addChoise("All-colors"));

            document.querySelector(".filter-close-color").querySelector(".filter-block-top__info").querySelector(".filter-block-top__crug").textContent = 8;
        }
        if(size_number >= 7 && !all_sizes.parentNode.classList.contains("filter-button__active")){
            size.forEach(el => {
                if(el.classList.contains("filter-button__active")){
                    document.querySelector(`[data-choise-text=${el.textContent}]`).remove();
                }
                el.querySelector("input").checked = true;
                el.classList.add("filter-button__active");
            });
            $(".catalog-choise").prepend(addChoise("All-sizes"));

            document.querySelector(".filter-close-size").querySelector(".filter-block-top__info").querySelector(".filter-block-top__crug").textContent = 8;
        }
        if(brand_number >= 7 && !all_brands.parentNode.classList.contains("filter-button__active")){
            brand.forEach(el => {
                if(el.classList.contains("filter-button__active")){
                    document.querySelector(`[data-choise-text=${el.textContent}]`).remove();
                }
                el.querySelector("input").checked = true;
                el.classList.add("filter-button__active");
            });
            $(".catalog-choise").prepend(addChoise("All-brands"));

            document.querySelector(".filter-close-brand").querySelector(".filter-block-top__info").querySelector(".filter-block-top__crug").textContent = 8;
        }


        let activeCheckbox = document.querySelectorAll(".filter-button__active");

        if (activeCheckbox.length > 0) {
            $(".catalog-choise").addClass("catalog-choise__flex");
            $(".catalog-choise").removeClass("catalog-choise__none");
        } else {
            $(".catalog-choise").addClass("catalog-choise__none");
            $(".catalog-choise").removeClass("catalog-choise__flex");
        }
 
        myFilter();

        let gridDesactive = document.querySelectorAll(".catalog-grid__item-desactive");
        
        if(gridDesactive.length == grid_item.length){        
            setTimeout (function() {
                $(".not__found").addClass("not__found-active");
              }, 300);
        }
        else{
            $(".not__found").removeClass("not__found-active");
        }
    })

    $(catalogChoisee).on("click", function (e) {
        if (e.target.classList.contains("catalog-choise__btn")) {
            e.target.remove();

            let text = e.target.textContent;
            document.querySelector(`[data-text= ${text}]`).closest('.filter__block').querySelector('.crug').textContent = document.querySelector(`[data-text= ${text}]`).closest('.filter__block').querySelector('.crug').textContent - 1;

            document.querySelector(`[data-text= ${text}]`).querySelector("input").checked = false;
            document.querySelector(`[data-text= ${text}]`).classList.remove("filter-button__active");

            
            
            let elem = e.target.textContent.trim();

            if(elem == "All-categories"){
                categorie.forEach(el => {
                    el.querySelector("input").checked = false;
                    el.classList.remove("filter-button__active");   
                })
                document.querySelector(".filter-close-categories").querySelector(".filter-block-top__info").querySelector(".filter-block-top__crug").textContent = 0;
            }
            if(elem == "All-colors"){
                color.forEach(el => {
                    el.querySelector("input").checked = false;
                    el.classList.remove("filter-button__active");   
                })
                document.querySelector(".filter-close-color").querySelector(".filter-block-top__info").querySelector(".filter-block-top__crug").textContent = 0;
            }
            if(elem == "All-sizes"){
                size.forEach(el => {
                    el.querySelector("input").checked = false;
                    el.classList.remove("filter-button__active");   
                })
                document.querySelector(".filter-close-size").querySelector(".filter-block-top__info").querySelector(".filter-block-top__crug").textContent = 0;
            }
            if(elem == "All-brands"){
                brand.forEach(el => {
                    el.querySelector("input").checked = false;
                    el.classList.remove("filter-button__active");   
                })
                document.querySelector(".filter-close-brand").querySelector(".filter-block-top__info").querySelector(".filter-block-top__crug").textContent = 0;
            }

            
        };
        if (e.target.classList.contains("catalog-choise__clear")) {
            Array.from(e.currentTarget.children).forEach(el => {
                if (!el.classList.contains("catalog-choise__clear")) {
                    el.remove();
                }
                document.querySelectorAll('.crug').forEach(el => el.textContent = 0);
            });

            filterBlockItem.forEach(el => {
                el.querySelector("input").checked = false;
                el.classList.remove("filter-button__active");
            });

            $(".catalog-choise").removeClass("catalog-choise__flex");
            $(".catalog-choise").addClass("catalog-choise__none");
        };
        if (e.currentTarget.children.length === 1) {
            $(".catalog-choise").removeClass("catalog-choise__flex");
            $(".catalog-choise").addClass("catalog-choise__none");
        };

        myFilter();

        let gridDesactive = document.querySelectorAll(".catalog-grid__item-desactive");
        
        if(gridDesactive.length == grid_item.length){        
            setTimeout (function() {
                $(".not__found").addClass("not__found-active");
              }, 300);
        }
        else{
            $(".not__found").removeClass("not__found-active");
        }

    });
    catalogSelect.forEach(el => {
        el.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle("catalog-select--open");

            if (e.target.classList.contains("catalog-select__item")) {
                let text = e.target.textContent;
                e.currentTarget.querySelector(".catalog-select__top").textContent = text;

            }
        });
    });
    footerChoise.forEach(el => {
        el.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle("footer-body3__down--open");

            if (e.target.classList.contains("footer-body3__valut")) {
                let text = e.target.textContent;
                e.currentTarget.querySelector(".footer-body3__choise").textContent = text;
            };
            if (e.target.classList.contains("footer-body3__lang")) {
                let text = e.target.textContent;
                e.currentTarget.querySelector(".footer-body3__choise--lang").textContent = text;
            }
        });
    });

    $(".pagination__item").on("click", function (e) {
        $(".pagination__item").removeClass("pagination__item--current");
        $(this).addClass("pagination__item--current");
    });
});

$(document).ready(function () {
    let shuruna = window.innerWidth;
    let elem = $('.catalog-grid__content');
    let filters = $('.filter__filters');
    let fil_hide = $(".filter-hide");
    if (shuruna < 1335) {
        elem.removeAttr('data-grig-columns');
    }
    if (shuruna < 815) {
        filters.addClass('filter--none');
        fil_hide.addClass("filter-hide-toggle");
        filters.closest(".filter").addClass("filter__abs");
        elem.addClass('catalog-grid__item815');
    }
    $(window).resize(function () {
        let text = document.querySelector(".catalog-grid__column--item-current").textContent;

        if ($(window).width() > 1334) {
            elem.attr('data-grig-columns', text);
        } else {
            elem.removeAttr('data-grig-columns');
        }
        if ($(window).width() > 814) {
            filters.closest(".filter").removeClass("filter__abs");
            elem.removeClass('catalog-grid__item815');
        } else {
            filters.closest(".filter").addClass("filter__abs");
            elem.addClass('catalog-grid__item815');
        }
    })
});

    
    $('.card-buttom__slider').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        draggable: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 930,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});