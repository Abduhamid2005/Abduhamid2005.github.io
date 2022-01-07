window.addEventListener('load', function () {
    $('#header .d-flex button').on('click', function () {
        $('#header .d-flex #Menu_top').toggle();
        $('#header .d-flex #chap').toggle();
        $('#header .d-flex #ong').toggle();
    });

    $('#Portfolio .row button').on('click', function () {
        $('#Portfolio .row .porfolio_pas').toggle();
    });
    var $links = $('nav ul li');
    $links.click(function (event) {
        event.preventDefault();
        $links.removeClass('active');
        let id = $(this).addClass('active').attr('href');
        let target = $(id).offset().top - 60;
        $('html,body').animate({
            scrollTop: target,
        }, 1000);
    })
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        $links.each(function () {
            var target = $(this).attr('href');
            var selector = $(target).offset().top - 100;
            if (scroll >= selector) {
                $links.removeClass('active');
                $(this).addClass('active');
            }
        })
    })
    $(window).scroll(function () {
        let scroll = $(this).scrollTop();
        if (scroll >= 300) {
            $('.btnTop').fadeIn();
        } else {
            $('.btnTop').fadeOut();
        }
    })

    $('.btnTop').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 1000)
    });
    $('body').on('contextmenu', function (event) {
        event.preventDefault();
    });
    $('window').on('mousedown', function (event) {
        event.preventDefault();
    })
    $('p').on('contextmenu', function (e) {
        e.preventDefault();
    })
    $('img').on('contextmenu', function (event) {
        event.preventDefault();
    });
    $('img').on('mousedown', function (event) {
        event.preventDefault();
    })
    $('img').on('contextmenu', function (e) {
        e.preventDefault();
    })
    $('h1').on('contextmenu', function (event) {
        event.preventDefault();
    });
    $('h1').on('mousedown', function (event) {
        event.preventDefault();
    })
    $('h1').on('contextmenu', function (e) {
        e.preventDefault();
    })
    $('h2').on('contextmenu', function (event) {
        event.preventDefault();
    });
    $('h2').on('mousedown', function (event) {
        event.preventDefault();
    })
    $('h2').on('contextmenu', function (e) {
        e.preventDefault();
    })
    $('p').on('contextmenu', function (event) {
        event.preventDefault();
    });
    $('p').on('mousedown', function (event) {
        event.preventDefault();
    })
    $('p').on('contextmenu', function (e) {
        e.preventDefault();
    })
    let image = document.querySelectorAll('.slider__img img');
    let elBtnPrev = document.querySelector('.btnPrev');
    let elBtnNext = document.querySelector('.btnNext');
    let slider = document.querySelector('.slider');
    let i = 0;


    elBtnNext.onclick = function () {
        image[i].classList.remove('active');
        i++;
        if (i >= image.length) {
            i = 0;
        }
        image[i].classList.add('active');
    }
    elBtnPrev.onclick = function () {
        image[i].classList.remove('active');
        i--;
        if (i < 0) {
            i = image.length - 1;
        }
        image[i].classList.add('active');
    }
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    new WOW().init();


    // jdncijsdus
    // let btnLeft = document.querySelector('.btnLeft');
    // let btnRight = document.querySelector('.btnRight');
    // btnLeft.onclick = function () {
    //  $('.carausel .shou').toggle();
    //  $('.carausel .active').toggle();
    // }

    // btnRight.onclick = function () {
    //     $('.carausel .shou').toggle();
    //     $('.carausel .active').toggle();
    //    }

       $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
})
