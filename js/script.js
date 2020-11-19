

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

$(document).ready(function () {
    $("#search").on("click", function () {
        $(".header__submit").attr("type", "submit");
        $(".header__search").toggleClass(' search__active');
    });
    $(".catalog-header__close").on("click", function () {
        $(".catalog-header__block").addClass(' catalog-choise__none');
    });

});

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        draggable: false
    });

});
$(document).ready(function () {
    $('.home-slider-catalog__slider').slick({
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        draggable: false,
        prevArrow: $('.home-slider-catalog__arrow-prev'),
        nextArrow: $('.home-slider-catalog__arrow-next')
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

$(document).ready(function () {

    $("body").on('click', '[href*="#"]', function (e) {
    let fixed_offset = 100;//padding-top
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});;

    $(".pagination__item1").on("click", function () {
        $(this).addClass('pagination__item--current');
        $(".pagination__item2").removeClass("pagination__item--current");
        $(".pagination__item3").removeClass("pagination__item--current");
        $(".pagination__item--next").removeClass("pagination__item--current");
    });
    $(".pagination__item2").on("click", function () {
        $(this).addClass('pagination__item--current');
        $(".pagination__item1").removeClass("pagination__item--current");
        $(".pagination__item3").removeClass("pagination__item--current");
        $(".pagination__item--next").removeClass("pagination__item--current");
    });
    $(".pagination__item3").on("click", function () {
        $(this).addClass('pagination__item--current');
        $(".pagination__item2").removeClass("pagination__item--current");
        $(".pagination__item1").removeClass("pagination__item--current");
        $(".pagination__item--next").removeClass("pagination__item--current");
    });
    $(".pagination__item--next").on("click", function () {
        $(this).addClass('pagination__item--current');
        $(".pagination__item2").removeClass("pagination__item--current");
        $(".pagination__item3").removeClass("pagination__item--current");
        $(".pagination__item1").removeClass("pagination__item--current");
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
});;
    $(document).ready(function () {
    let shuruna = window.innerWidth;
    $(".filter-hide").on("click", function () {
        $(".filter__filters").toggleClass("filter--none");
        $(".filter-hide").toggleClass("filter-hide-toggle");
        if (shuruna < 815) {
            $(".filter").toggleClass("filter__white");
        }
    });
    $(".filter-close-categories").on("click", function () {
        $(".filter-block-categories").toggleClass("filter--open")
    });
    $(".filter-close-color").on("click", function () {
        $(".filter-block-color").toggleClass("filter--open")
    });
    $(".filter-close-size").on("click", function () {
        $(".filter-block-size").toggleClass("filter--open")
    });
    $(".filter-close-price").on("click", function () {
        $(".filter-block-price").toggleClass("filter--open")
    });
    $(".filter-close-brand").on("click", function () {
        $(".filter-block-brand").toggleClass("filter--open")
    });
    $(".filter-close-discount").on("click", function () {
        $(".filter-block-discount").toggleClass("filter--open")
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

    // filterBlockItem.forEach(el => {
    //     el.querySelector('input').addEventListener('change', (e) => {
    //         let checked = el.querySelector('input').checked;
    //         if (checked) {
    //             el.querySelector(".filter-block-button__item").classList.add("filter-button__active");
    //             let text = el.querySelector(".filter-block-button__text").textContent;

    //             catalogChoisee.insertAdjacentHTML('', addChoise(text));
    //         } else {
    //             el.querySelector(".filter-block-button__item").classList.remove("filter-button__active");
    //         }

    //         let activeCheckbox = document.querySelectorAll(".filter-button__active");

    //         if (activeCheckbox.length > 0) {
    //             $(".catalog-choise").addClass("catalog-choise__flex");
    //             $(".catalog-choise").removeClass("catalog-choise__none");
    //         } else {
    //             $(".catalog-choise").addClass("catalog-choise__none");
    //             $(".catalog-choise").removeClass("catalog-choise__flex");
    //         }
    //     });
    // });

    $('.filter-block-button__checkbox').on('change', function (e) {
        let text = $(this).next().text();
        if ($(this).is(':checked')) {
            $(this).parent().addClass("filter-button__active");

            $(".catalog-choise").prepend(addChoise(text));
        } else {
            $(this).parent().removeClass("filter-button__active");
            document.querySelector(`[data-choise-text=${text}]`).remove();
        }

        this.closest('.filter__block').querySelector('.crug').textContent = this.closest('.filter-block-button__columns').querySelectorAll(".filter-button__active").length;

        let activeCheckbox = document.querySelectorAll(".filter-button__active");

        if (activeCheckbox.length > 0) {
            $(".catalog-choise").addClass("catalog-choise__flex");
            $(".catalog-choise").removeClass("catalog-choise__none");
        } else {
            $(".catalog-choise").addClass("catalog-choise__none");
            $(".catalog-choise").removeClass("catalog-choise__flex");
        }
    })
    $(catalogChoisee).on("click", function (e) {
        if (e.target.classList.contains("catalog-choise__btn")) {
            e.target.remove();

            let text = e.target.textContent;
            document.querySelector(`[data-text= ${text}]`).closest('.filter__block').querySelector('.crug').textContent = document.querySelector(`[data-text= ${text}]`).closest('.filter__block').querySelector('.crug').textContent - 1;

            document.querySelector(`[data-text= ${text}]`).querySelector("input").checked = false;
            document.querySelector(`[data-text= ${text}]`).classList.remove("filter-button__active");
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

});

$(document).ready(function () {
    let shuruna = window.innerWidth;
    let elem = $('.catalog-grid__content');
    let filters = $('.filter__filters');
    let fil_hide = $(".filter-hide");
    if (shuruna < 1335) {
        elem.removeAttr('data-grig-columns');
    }
    if (shuruna < 1040) {
        elem.addClass('catalog-grid__item1040');
    }
    if (shuruna < 915) {
        elem.addClass('catalog-grid__item915');
    }
    if (shuruna < 815) {
        filters.addClass('filter--none');
        fil_hide.addClass("filter-hide-toggle");
        filters.closest(".filter").addClass("filter__abs");
        elem.addClass('catalog-grid__item815');
    }
    if (shuruna < 675) {
        elem.addClass('catalog-grid__item675');
    }
    if (shuruna < 515) {
        elem.addClass('catalog-grid__item515');
    }
    $(window).resize(function () {
        let text = document.querySelector(".catalog-grid__column--item-current").textContent;

        if ($(window).width() > 1334) {
            elem.attr('data-grig-columns', text);
        } else {
            elem.removeAttr('data-grig-columns');
        }
        if ($(window).width() > 1039) {
            elem.removeClass('catalog-grid__item1040');
        } else {
            elem.addClass('catalog-grid__item1040');
        }
        if ($(window).width() > 914) {
            elem.removeClass('catalog-grid__item915');
        } else {
            elem.addClass('catalog-grid__item915');
        }
        if ($(window).width() > 814) {
            filters.removeClass('filter--none');
            fil_hide.removeClass("filter-hide-toggle");
            filters.closest(".filter").removeClass("filter__abs");
            elem.removeClass('catalog-grid__item815');
        } else {
            filters.addClass('filter--none');
            fil_hide.addClass("filter-hide-toggle");
            filters.closest(".filter").addClass("filter__abs");
            elem.addClass('catalog-grid__item815');
        }
        if ($(window).width() > 674) {
            elem.removeClass('catalog-grid__item675');
        } else {
            elem.addClass('catalog-grid__item675');
        }
        if ($(window).width() > 514) {
            elem.removeClass('catalog-grid__item515');
        } else {
            elem.addClass('catalog-grid__item515');
        }
    })
});
;


    let cardColor = document.querySelectorAll(".card-block2__color--item");
    let cardSize = document.querySelectorAll(".card-block2__size--item");
    let number;

    cardColor.forEach(el => {
        el.addEventListener('click', (e) => {
            $(".card-block2__color--item").removeClass("card-color-active");
            e.currentTarget.classList.add("card-color-active");
            let text = e.currentTarget.dataset.cardColor;
            $(".card-block2__color--text span").text(text);
        });
    });
    cardSize.forEach(el => {
        el.addEventListener('click', (e) => {
            $(".card-block2__size--item").removeClass("card-size-active");
            e.currentTarget.classList.add("card-size-active");
            let text = e.currentTarget.dataset.cardSize;
            $(".card-block2__size--text1 span").text(text);
        });
    });
    $(".card-block2__btn").on("click", function () {
        $(".card-block2__size--item").removeClass("card-size-active");
        $(".card-block2__color--item").removeClass("card-color-active");
        $(".card-color-white").addClass("card-color-active");
        $(".card-block2__color--text span").text("White");
        $(".card-block2__size--text1 span").text("Select a Size");
    });
    $(".card-block2__btn-add i").on("click", function () {
        number = $(".card-block2__btn-add p").text();
        number++;
        $(".card-block2__btn-add p").text(number);
    });
    $(".card-block2__btn-add span").on("click", function () {
        number = $(".card-block2__btn-add p").text();
        number--;
        if (number < 1) { number = 1; };
        $(".card-block2__btn-add p").text(number);
    });
    $(".card-rating__item5").on("click", function () {
        $(".card-rating__item").addClass('card-rating__item-active');
    });
    $(".card-rating__item4").on("click", function () {
        $(".card-rating__item").addClass('card-rating__item-active');
        $(".card-rating__item5").removeClass('card-rating__item-active');
    });
    $(".card-rating__item3").on("click", function () {
        $(".card-rating__item").addClass('card-rating__item-active');
        $(".card-rating__item5").removeClass('card-rating__item-active');
        $(".card-rating__item4").removeClass('card-rating__item-active');
    });
    $(".card-rating__item2").on("click", function () {
        $(".card-rating__item").removeClass('card-rating__item-active');
        $(".card-rating__item1").addClass('card-rating__item-active');
        $(".card-rating__item2").addClass('card-rating__item-active');
    });
    $(".card-rating__item1").on("click", function () {
        $(".card-rating__item").removeClass('card-rating__item-active');
        $(".card-rating__item1").addClass('card-rating__item-active');
    });
    $(".card-slider__item5").on("click", function () {
        $(".card-content-top__image").addClass('card--none');
        $(".card-bid-img5").removeClass('card--none');
        $(".card-slider__item").removeClass('card-img--active');
        $(this).addClass('card-img--active');
    });
    $(".card-slider__item4").on("click", function () {
        $(".card-content-top__image").addClass('card--none');
        $(".card-bid-img4").removeClass('card--none');
        $(".card-slider__item").removeClass('card-img--active');
        $(this).addClass('card-img--active');
    });
    $(".card-slider__item3").on("click", function () {
        $(".card-content-top__image").addClass('card--none');
        $(".card-bid-img3").removeClass('card--none');
        $(".card-slider__item").removeClass('card-img--active');
        $(this).addClass('card-img--active');
    });
    $(".card-slider__item2").on("click", function () {
        $(".card-content-top__image").addClass('card--none');
        $(".card-bid-img2").removeClass('card--none');
        $(".card-slider__item").removeClass('card-img--active');
        $(this).addClass('card-img--active');
    });
    $(".card-slider__item1").on("click", function () {
        $(".card-content-top__image").addClass('card--none');
        $(".card-bid-img1").removeClass('card--none');
        $(".card-slider__item").removeClass('card-img--active');
        $(this).addClass('card-img--active');
    });

    // new SimpleBar(document.querySelector('.card-description__navigation'));

    let cardLink = document.querySelectorAll(".card-description__link");

    cardLink.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.currentTarget.getAttribute('href');

            $(".card-description__link").removeClass('card-description__link--active');
            e.currentTarget.classList.add("card-description__link--active");

            $(".card-description__content").removeClass('card-description__content--active');
            document.querySelector(`[data-target= "${target}"]`).classList.add("card-description__content--active");
        });
    });

    $(".block-shop__like").on("click", function () {
        $(this).toggleClass('block-shop__like--active');
    });
    $(".shop-btn").on("click", function () {
        $("#page").toggleClass('page--active');
        $(".shop-big__btn").toggleClass('shop-big__btn--active');
        $(".shop__row").toggleClass('shop__row--active');
        $(".more__translate").toggleClass('more__translate-active');


        let shop = document.querySelector(".shop-btn__text").textContent;
        if (shop == "Load More") {
            $(".shop__row").removeClass("rowww__over");
            document.querySelector(".shop-btn__text").textContent = "Load Less";
        } else {
            $(".shop__row").addClass("rowww__over");
            document.querySelector(".shop-btn__text").textContent = "Load More";
        }
    });
    $(".shop__item-new").on("click", function () {
        $("#page").removeClass('page--active');
        $("#page").removeClass('page--sale');
        $("#page").addClass('page--new');
        $(".shop__row").removeClass('shop__row--sale');
        $(".shop__row").removeClass('shop__row--active');
        $(".shop__item").removeClass("shop__item-active");
        $(".all1").hide().removeClass("shop-sale--active1");
        $(".all2").hide().removeClass("shop-sale--active2");
        $(".all3").hide().removeClass("shop-sale--active3");
        $(".all4").hide().removeClass("shop-sale--active4");
        $(".all5").hide().removeClass("shop-sale--active5");
        $(".all6").hide().removeClass("shop-sale--active6");
        $(".all7").hide().removeClass("shop-sale--active7");
        $(".all8").hide().removeClass("shop-sale--active8");
        $(this).addClass("shop__item-active");
        $(".block-shop").hide();
        $(".shop__row").addClass('shop__row--new');
        $(".new1").show().addClass("shop-new--active1");
        $(".new2").show().addClass("shop-new--active2");
        $(".shop-big__btn").hide();
        $(".shop-big__btn").removeClass('shop-big__btn--active');
        $(".more__translate").removeClass('more__translate-active');
    });
    $(".shop__item-sale").on("click", function () {
        $("#page").removeClass('page--active');
        $("#page").removeClass('page--new');
        $("#page").addClass('page--sale');
        $(".shop__row").removeClass('shop__row--new');
        $(".shop__row").removeClass('shop__row--active');
        $(".shop__item").removeClass("shop__item-active");
        $(".all1").hide().removeClass("shop-sale--active1");
        $(".all2").hide().removeClass("shop-sale--active2");
        $(".all3").hide().removeClass("shop-sale--active3");
        $(".all4").hide().removeClass("shop-sale--active4");
        $(".all5").hide().removeClass("shop-sale--active5");
        $(".all6").hide().removeClass("shop-sale--active6");
        $(".all7").hide().removeClass("shop-sale--active7");
        $(".all8").hide().removeClass("shop-sale--active8");
        $(this).addClass("shop__item-active");
        $(".block-shop").hide();
        $(".shop__row").addClass('shop__row--sale');
        $(".sale1").show().addClass("shop-sale--active1");
        $(".sale2").show().addClass("shop-sale--active2");
        $(".sale3").show().addClass("shop-sale--active3");
        $(".sale4").show().addClass("shop-sale--active4");
        $(".sale5").show().addClass("shop-sale--active5");
        $(".sale6").show().addClass("shop-sale--active6");
        $(".sale7").show().addClass("shop-sale--active7");
        $(".sale8").show().addClass("shop-sale--active8");
        $(".shop-big__btn").hide();
        $(".shop-big__btn").removeClass('shop-big__btn--active');
        $(".more__translate").removeClass('more__translate-active');
    });
    $(".shop__item-all").on("click", function () {
        document.querySelector(".shop-btn__text").textContent = "Load More";
        $(".shop__row").addClass("rowww__over");
        $("#page").removeClass('page--new');
        $("#page").removeClass('page--sale');
        $(".shop__item").removeClass("shop__item-active");
        $(".shop__row").removeClass('shop__row--new');
        $(".new1").hide().removeClass("shop-new--active1");
        $(".new2").hide().removeClass("shop-new--active2");
        $(".shop__row").removeClass('shop__row--sale');
        $(".sale1").hide().removeClass("shop-sale--active1");
        $(".sale2").hide().removeClass("shop-sale--active2");
        $(".sale3").hide().removeClass("shop-sale--active3");
        $(".sale4").hide().removeClass("shop-sale--active4");
        $(".sale5").hide().removeClass("shop-sale--active5");
        $(".sale6").hide().removeClass("shop-sale--active6");
        $(".sale7").hide().removeClass("shop-sale--active7");
        $(".sale8").hide().removeClass("shop-sale--active8");
        $(this).addClass("shop__item-active");
        $(".all1").show().addClass("shop-sale--active1");
        $(".all2").show().addClass("shop-sale--active2");
        $(".all3").show().addClass("shop-sale--active3");
        $(".all4").show().addClass("shop-sale--active4");
        $(".all5").show().addClass("shop-sale--active5");
        $(".all6").show().addClass("shop-sale--active6");
        $(".all7").show().addClass("shop-sale--active7");
        $(".all8").show().addClass("shop-sale--active8");
        $(".block-shop").show();
        $(".shop-big__btn").show();

    });
});