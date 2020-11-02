$(function(){


// ============== bg ========================================
    function ibg() {

        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }

    ibg();

// ============== skroll ========================================
    $('a[href^="#"]').click(function() {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
// ============== projects ========================================
    $(' .projects__all').on('click', function () {
        $('.projects__content-box').addClass('projects__all');
        $('.projects__category').on('click', function () {
            $('.projects__content-box').removeClass('projects__all');
        });
    });
 // ============== gallery ========================================
    popup = {
        init: function () {
            $('.row, .col').click(function () {
                popup.open($(this));
            });

            $(document).on('click', '.popup .projects__img', function () {
                return false;
            }).on('click', '.popup', function () {
                popup.close();
            })
        },
        open: function ($figure) {
            $('.gallery').addClass('pop');
            $popup = $('<div class="popup" />').appendTo($('body'));
            $fig = $figure.clone().appendTo($('.popup'));
            $bg = $('<div class="bg" />').appendTo($('.popup'));
            $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
            $shadow = $('<div class="shadow" />').appendTo($fig);
            src = $('.projects__img', $fig).attr('src');
            $shadow.css({ backgroundImage: 'url(' + src + ')' });
            $bg.css({ backgroundImage: 'url(' + src + ')' });
            setTimeout(function () {
                $('.popup').addClass('pop');
            }, 10);
        },
        close: function () {
            $('.gallery, .popup').removeClass('pop');
            setTimeout(function () {
                $('.popup').remove()
            }, 100);
        }
    }
    popup.init()
// ============== menu ========================================


    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger__menu-btn');
        let links = menu.find('.burger__menu-list');
        let overlay = menu.find('.burger__menu-overplay');

        button.on('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });

        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());

        function toggleMenu() {
            menu.toggleClass('burger__menu-active');
            if (menu.hasClass('burger__menu-active')) {
                $('body').css('overflow', 'hidden');
            } else {
                 $('body').css('overflow', 'visible');
             }
        }
    }
    burgerMenu('.burger__menu');




// ============== slick ========================================
    $('.reviews__items').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        // fade: true,
        cssEase: 'linear',
        // autoplay: true,
        // autoplaySpeed: 2000,
    });    
// ============== mixitup ========================================
    var mixer = mixitup('.projects__content-box');
    
});