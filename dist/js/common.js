//  animated button
jQuery(document).ready(function () {
    var anchor = document.querySelectorAll('button');

    [].forEach.call(anchor, function (anchor) {
        var open = false;
        anchor.onclick = function (event) {
            event.preventDefault();
            if (!open) {
                this.classList.add('close');
                open = true;
            } else {
                this.classList.remove('close');
                open = false;
            }
        }
    });
});

//  mobile menu toggle
jQuery(document).ready(function () {
    $('.navToggle').on('click', function () {
        $('.slidedown').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});

//  drop-menu
jQuery(document).ready(function () {
    $('#menu ul li').hover(
        function() {
            $('ul:first', this).slideDown(100);
        },
        function() {
            $('ul:first', this).slideUp(100);
        }
    );
});

//  carousel vision
jQuery(document).ready(function () {
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        fade: true,
        speed: 550,
        easing: 'linear',
        arrows: true,
        prevArrow: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'
    });
});

//  3D gallery
jQuery(document).ready(function () {
    $('#dg-container').gallery({
        current: 5,
        autoplay: true,
        interval: 4000
    });
});

//  diagramm skills
jQuery(document).ready(function () {
    $(window).scroll(
        function () {
            var start = $('.about').offset().top - 300;
            if ($(this).scrollTop() > start) {
                var currentNumber = $('.dial-1').val();
                $('.dial-1').knob();
                $({
                    numberValue: currentNumber
                }).animate({
                    numberValue: 50
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $('.dial-1').val(Math.ceil(this.numberValue)).trigger('change');
                    }
                });
                var currentNumber = $('.dial-2').val();
                $('.dial-2').knob();
                $({
                    numberValue: currentNumber
                }).animate({
                    numberValue: 70
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $('.dial-2').val(Math.ceil(this.numberValue)).trigger('change');
                    }
                });
                var currentNumber = $('.dial-3').val();
                $('.dial-3').knob();
                $({
                    numberValue: currentNumber
                }).animate({
                    numberValue: 80
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $('.dial-3').val(Math.ceil(this.numberValue)).trigger('change');
                    }
                });
                var currentNumber = $('.dial-4').val();
                $('.dial-4').knob();
                $({
                    numberValue: currentNumber
                }).animate({
                    numberValue: 100
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $('.dial-4').val(Math.ceil(this.numberValue)).trigger('change');
                    }
                });
            }
        }
    );
});

//  carousel clients
jQuery(document).ready(function () {
    $('.carousel-clients').slick({
        autoplay: true,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        speed: 2000,
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
        },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
        },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
        }
    ]
    });
});
