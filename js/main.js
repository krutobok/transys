$(function(){

    $('.menu__btn').on('click', function () {
        $('.menu__inner').addClass('active')
    })
    $('.menu__btn--close').on('click', function () {
        $('.menu__inner').removeClass('active')
    })


    $(document).ready(function(){

        $(".menu__list-item, .contact-btn").on("click","a", function (event) {

            event.preventDefault();

            let id  = $(this).attr('href'),


            top = $(id).offset().top - 140;

            $('body,html').animate({scrollTop: top}, 1500);
        });
    });



    $('.slider').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1801,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1426,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1141,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 977,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 733,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 367,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    })

    let $commentMobile = ($(window).width()-289)/2

    let $comment = ($(window).width()-867)/2

    let $commentFullHD = ($(window).width()-1236)/2

    let $commentBigScreen = ($(window).width()-2060)/2



    // console.log($commentMobile)

    $('.comment__items').slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 5,
        centerPadding: $commentBigScreen + 'px',
        responsive: [
            {
                breakpoint: 2061,
                settings: {
                    centerPadding: $commentFullHD + 'px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    centerPadding: $comment + 'px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 867,
                settings: {
                    centerPadding: $commentMobile + 'px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $(".rate-yo").rateYo({
        starSvg: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.79505 1.4879C8.38541 1.19894 8.9004 1.10376 9.69932 1.10377C11.7438 1.11224 13.2571 2.83654 13.2571 5.033C13.2571 6.70952 12.3223 8.32899 10.5812 9.89498C9.66725 10.717 8.50036 11.5304 7.66467 11.9632L7.18653 12.2108L6.7084 11.9632C5.87271 11.5304 4.70582 10.717 3.79189 9.89498C2.05074 8.32899 1.11597 6.70952 1.11597 5.033C1.11597 2.81305 2.61509 1.10376 4.67803 1.10376C5.4483 1.10376 5.9897 1.20794 6.59151 1.50559C6.80104 1.60923 6.9979 1.73215 7.181 1.87404C7.37143 1.72373 7.57649 1.59489 7.79505 1.4879Z"/></svg>',
        ratedFill: "#00AAEC",
        normalFill: "#DADADA",
        starWidth: "13px",
        fullStar: true,
        readOnly: true
    });




    if ($(window).width() >= 480){
        $('.tab').on('click', function (e) {
            e.preventDefault()

            $($(this).siblings()).removeClass('tab--active')
            $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active')

            $(this).addClass('tab--active')
            $($(this).attr('href')).addClass('tabs-content--active')

            $('.product-slider').slick('setPosition')
        })
    }
    if ($(window).width() < 480){
        $('.tab').on('click', function (e) {
            e.preventDefault()

            $(this).toggleClass('tab--active')
            $($(this).attr('href')).toggleClass('tabs-content--active')


        })
    }

    if ($(window).width() >= 768){
        $('.footer__time').text('09:00 - 18:00 \n' +
            'понедельник - пятница');
    }







});