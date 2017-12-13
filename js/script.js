$(window).on('load', function () {
    $('.preloader .load').fadeOut();
    $('.preloader').delay(200).fadeOut().remove();
    AOS.init();
});
$(document).ready(function () {
    $('.btn-menu').on('click', function () {
        $(this).toggleClass('open');
        $('.navbar-collapse').toggleClass('open').slideToggle();
        $('body').toggleClass('open');
    });
    $('.video .btn-play').on('click', function () {
        $(this).fadeOut().parent('.video').addClass('open').find('.video-image').fadeOut();
        $(this).parent('.video').find('.video-iframe').html('<iframe autoplay width="' + $(this).data('width') + '" height="' + $(this).data('height') + '" src="' + $(this).data('iframe') + '?autoplay=1' + '" frameborder="0" allowfullscreen></iframe>');
    });
    $('.slide-group-next').on('click', function () {
        $(this).toggleClass('open').next().toggleClass('open').slideToggle();
    });

    $(".flipster").flipster({
        style: 'carousel',
        start: 0,
        click: true
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        if (scrollPos > $('header').outerHeight() - 20) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    }
//------------------scroll--------------
    onScroll1();
    function onScroll1(e) {
        var winScT = $(window).scrollTop();
        var wrT = $('.wrapper').offset().top;
        ( winScT > wrT + 400) ? $('.box-scrolling').addClass('scroll') : $('.box-scrolling').removeClass('scroll');

        if (winScT>($('footer').offset().top-$(window).height())){
            $('.box-scrolling').removeClass('scroll');
        }
    }
    $(window).scroll(onScroll1);
    $('.scrolling-button').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
//------------------/scroll--------------
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
                borderColor: ["#131A75", "#131A75", "#131A75", "#131A75", "#131A75"],
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
                backgroundColor: ["#f8004f", "#9044fe", "#1350fd", "#20d5fc", "#ff8c38","#8fd45c", "#fed444" , "#ffffff"],
                data: [33, 30, 18, 14, 2,1,1,1],
                borderColor: ["#131A75", "#131A75", "#131A75", "#131A75", "#131A75","#131A75","#131A75" ,"#131A75"],
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

    $(".getting-started").countdown('2017/12/15 14:00:00', function (event) {
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
            settings: { centerMode: true, slidesToShow: 3, variableWidth: true, infinite: true}
        }, {
            breakpoint: 768,
            settings: { centerMode: true, slidesToShow: 3, variableWidth: true, infinite: true}
        }, {
            breakpoint: 480,
            settings: { centerMode: true, slidesToShow: 1, variableWidth: true, infinite: true}
        }]
    });
    $('.slide-activity').slick({
        arrows: true,
        centerMode: false,
        slidesToShow: 3,
        variableWidth: true,
        responsive: [{
            breakpoint: 1040,
            settings: { slidesToShow: 1, centerMode: false, variableWidth: true}
        }, {
            breakpoint: 768,
            settings: { slidesToShow: 1, centerMode: true, variableWidth: true}
        }, {breakpoint: 480, settings: { slidesToShow: 1, centerMode: true, variableWidth: true}}]
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
            settings: {arrows: false, slidesToShow: 1,  infinite: true, variableWidth: true}
        }, {
            breakpoint: 768,
            settings: {arrows: false, slidesToShow: 1, variableWidth: true, infinite: true}
        }, {
            breakpoint: 480,
            settings: {arrows: false, slidesToShow: 1, variableWidth: true, infinite: true}
        }]
    });
    var cbSubscribe = function (text,text_small) {
        $('#presale').modal('hide');
        $('#thanks').find('.text').html(text);
        $('#thanks').find('.name').html(text_small);
        $('#thanks').modal('show');

    };
    window.language = $('body').data('lang') || 'ru';
    $('.subscribe').click(function (e) {
        e.preventDefault();
        var val = $(this).siblings('input.form-control').val();
        if( val )
        {
            var fd = new FormData();
            fd.append('email', val);
            fd.append('lang', window.language);
            subscribeEmail(fd);
        }
    });
    $('.subscribe-modal, .subscribe-modal-en').click(function (e)
    {
        e.preventDefault();

        var val = $(this).siblings('.box-control').find('input.form-control').val();
        if(val)
        {
            var fd = new FormData();
            fd.append('email', val);
            fd.append('lang', window.language);
            subscribeEmail(fd);
        }
    });
    var subscribeEmail = function (fd) {
        $.ajax({
            url: '/email.php',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (data) {
                console.log(data);
                data = JSON.parse(data);
                if(data && data.status=='subscribed'){
                    try {
                        yaCounter46376631.reachGoal('subsrc');
                    }
                    catch (e){
                        console.log('yandex counter not found');
                    }
                    if(window.language && window.language.toLowerCase() != "en" )
                    {
                        window.location.href = '/'+ window.language.toLowerCase() + '/thanks';
                    }
                    else
                    {
                        window.location.href = '/thanks';
                    }
                }
                else
                {
                    switch( window.language.toLowerCase() )
                    {
                        case "jp":
                            cbSubscribe('Вы написали ваш email с ошибкой или вы уже подписаны на наши новости.','Ошибка!');
                            break;

                        case "kr":
                            cbSubscribe('Вы написали ваш email с ошибкой или вы уже подписаны на наши новости.','Ошибка!');
                            break;

                        case "ru":
                            cbSubscribe('Вы написали ваш email с ошибкой или вы уже подписаны на наши новости.','Ошибка!');
                            break;

                        default:
                            cbSubscribe('You wrote your email with an error or you are already subscribed to our news.','Error!');
                    }
                }
            },
            error: function() {
                cbSubscribe('You wrote your email with an error or you are already subscribed to our news.','Error!');
            }
        });
    };
  $(".href-dropdown").on('click', function () {
    $(this).toggleClass('open');
    $(".menu-dropdown").slideToggle(0)
  });
});