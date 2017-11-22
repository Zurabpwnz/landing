$(window).on('load', function () {
    $('.preloader .load').fadeOut();
    $('.preloader').delay(200).fadeOut().remove();
    AOS.init();
});
$(document).ready(function () {
    $('.btn-menu').on('click', function () {
        $(this).toggleClass('open');
        $('.navbar-collapse').toggleClass('open').slideToggle();
    });
    $('.video .btn-play').on('click', function () {
        $(this).fadeOut().parent('.video').addClass('open').find('.video-image').fadeOut();
        $(this).parent('.video').find('.video-iframe').html('<iframe autoplay width="' + $(this).data('width') + '" height="' + $(this).data('height') + '" src="' + $(this).data('iframe') + '?autoplay=1' + '" frameborder="0" allowfullscreen></iframe>');
    });
    $('.slide-group-next').on('click', function () {
        $(this).toggleClass('open').next().toggleClass('open').slideToggle();
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        if (scrollPos > $('header').outerHeight() - 20) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    }

    onScroll();
    $(document).on("scroll", onScroll);
    $('.all-commands').on('click', function () {
        $(this).toggleClass('active');
        $('.accordion-body-toggle').slideToggle(350);
    });

    function resize() {
        if ($(window).width() > 768) {
            $('.box-roadmap-resize').addClass('box-revers')
        } else {
            $('.box-roadmap-resize').removeClass('box-revers')
        }
    }

    $(window).on("load resize", function () {
        resize();
    });
    new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
            datasets: [{
                label: "",
                backgroundColor: ["#c1c5f1", "#f90059", "#9b4dfe", "#155afd", "#25dafc"],
                data: [51, 21, 19, 6, 3],
                borderColor: ["#040a52", "#040a52", "#040a52", "#040a52", "#040a52"],
                borderWidth: 3
            }]
        },
        options: {
            title: {display: false, text: 'Predicted world population (millions) in 2050'},
            tooltips: {enabled: false},
            cutoutPercentage: 70
        }
    });
    new Chart(document.getElementById("doughnut-chart1"), {
        type: 'doughnut',
        data: {
            datasets: [{
                label: "",
                backgroundColor: ["#c1c5f1", "#f90059", "#9b4dfe", "#155afd", "#9b4dfe","#f90059", "#25dafc"],
                data: [2, 18, 33, 14, 3,1,30],
                borderColor: ["#040a52", "#040a52", "#040a52", "#040a52", "#040a52","#040a52","#040a52"],
                borderWidth: 3
            }]
        },
        options: {
            title: {display: false, text: 'Predicted world population (millions) in 2050'},
            tooltips: {enabled: false},
            cutoutPercentage: 70
        }
    });
    $(document).on('click', '.close', function() {
        $(".box-video iframe").each(function () {
            $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        });
    });

    $(".getting-started").countdown('2017/11/30 14:00:00', function (event) {
        var $this = $(this).html(event.strftime('' + '<span class="number">%D</span> : ' + '<span class="number">%H</span> : ' + '<span class="number">%M</span> : ' + '<span class="number">%S</span>'));
    });
    $('.slide-lead').slick({
        arrows: true,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        responsive: [{
            breakpoint: 1040,
            settings: {arrows: false, centerMode: true, slidesToShow: 3, variableWidth: true, infinite: true}
        }, {
            breakpoint: 768,
            settings: {arrows: false, centerMode: true, slidesToShow: 3, variableWidth: true, infinite: true}
        }, {
            breakpoint: 480,
            settings: {arrows: false, centerMode: true, slidesToShow: 1, variableWidth: true, infinite: true}
        }]
    });
    $('.slide-activity').slick({
        arrows: true,
        slidesToShow: 2,
        variableWidth: true,
        responsive: [{
            breakpoint: 1040,
            settings: {arrows: false, slidesToShow: 1, centerMode: true, variableWidth: true}
        }, {
            breakpoint: 768,
            settings: {arrows: false, slidesToShow: 1, centerMode: true, variableWidth: true}
        }, {breakpoint: 480, settings: {arrows: false, slidesToShow: 1, centerMode: true, variableWidth: true}}]
    });
    $('.slide-article').slick({
        arrows: true,
        slidesToShow: 3,
        variableWidth: true,
        // centerMode: true,
        infinite: true,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1040,
            settings: {arrows: false, slidesToShow: 3,  infinite: true, variableWidth: true}
        }, {
            breakpoint: 768,
            settings: {arrows: false, slidesToShow: 1, variableWidth: true, infinite: true}
        }, {
            breakpoint: 480,
            settings: {arrows: false, slidesToShow: 1, variableWidth: true, infinite: true}
        }]
    });
    $('.subscribe,.subscribe-en').click(function (e) {
        e.preventDefault();
        var val = $(this).siblings('input.form-control').val();
        if(val){
            $('#mce-EMAIL').val(val);
            $('#mc-embedded-subscribe').click();
        }
    });
    $('.subscribe-modal,.subscribe-modal-en').click(function (e) {
        e.preventDefault();

        var val = $(this).siblings('.box-control').find('input.form-control').val();
        if(val){
            $('#mce-EMAIL').val(val);
            $('#mc-embedded-subscribe').click();
        }
    });
    window.cbSubscribe = function (text) {
        $('#presale').modal('hide');
        $('#thanks').find('.text').html(text);
        $('#thanks').modal('show');

    };
    var subscribeEmail = function (link) {
        $.ajax({
            url: link,
            type: 'GET',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data);
                if (data.result == "success"){
                    yaCounter46376631.reachGoal('subsrc');
                    $('.form-wrapper').hide()
                    $('#input_upper_text').text('You have successfully subscribed!').addClass('success_subscription')
                    $('#input_upper_text2').text('You have successfully subscribed!').addClass('success_subscription')
                }

            }
        });
    }
});