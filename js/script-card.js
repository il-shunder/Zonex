$(document).ready(function () {
    $("body").on('click', '[href*="#"]', function (e) {
    let fixed_offset = 100;//padding-top
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
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
                breakpoint: 1030,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

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
    $(".card-rating__item").on("click", function () {
        this.parentNode.querySelector(".card-rating__text").textContent = "3 Reviews"
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

    $(".block-shop__like").on("click", function () {
        $(this).toggleClass("block-shop__like--active");
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

    let footerChoise = document.querySelectorAll(".footer-body3__choise-big");

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

    $(".quantity-num").on('change', function (e) {
        if($(".quantity-num").val() < 1){
            $(".quantity-num").val(1)
        }
        if($(".quantity-num").val() > 99){
            $(".quantity-num").val(99)
        }
    });

    $(function() {
 
        (function quantityProducts() {
          var $quantityArrowMinus = $(".quantity-arrow-minus");
          var $quantityArrowPlus = $(".quantity-arrow-plus");
          var $quantityNum = $(".quantity-num");
       
          $quantityArrowMinus.click(quantityMinus);
          $quantityArrowPlus.click(quantityPlus);
       
          function quantityMinus() {
            if ($quantityNum.val() > 1) {
              $quantityNum.val(+$quantityNum.val() - 1);
            }
          }
       
          function quantityPlus() {
            if($(".quantity-num").val() >= 99){
                $(".quantity-num").val(99)
            }
            else{
                $quantityNum.val(+$quantityNum.val() + 1);
            }
          }
        })();
       
      });
});