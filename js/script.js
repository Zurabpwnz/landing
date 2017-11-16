$(window).on('load', function() {
    $('.preloader .load').fadeOut();
    $('.preloader').delay(200).fadeOut().remove();
});
$(document).ready(function(){
    $('.slide-group-next').on('click', function () {
        if (!$(this).hasClass('open')){
            $(this).parentsUntil('.slide-group').parent().find('.slide-group-next.open').removeClass('open').next().removeClass('open').hide();
            $(this).toggleClass('open').next().toggleClass('open').slideToggle();
        } else{
            $(this).toggleClass('open').next().toggleClass('open').slideToggle();
        }
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();

        if (scrollPos > $('header').outerHeight()-20) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    }

    onScroll();
    $(document).on("scroll", onScroll);

//    ---------------voropaev----------------
    new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
            // labels: ["Africa", "Asia", "Europe", "Latin America"],
            datasets: [
                {
                    label: "",
                    backgroundColor: ["#1e2465", "#f90059","#9b4dfe","#155afd","#25dafc"],
                    data: [51,21,19,6,3],
                    borderColor: [
                        "#040a52","#040a52","#040a52","#040a52","#040a52"
                    ],
                    borderWidth: 3
                }
            ]
        },
        options: {
            title: {
                display: false,
                text: 'Predicted world population (millions) in 2050'
            },
            tooltips: {
                enabled: false
            },
            cutoutPercentage: 70
        }
    });


    $(".getting-started")
        .countdown('2017/11/30 14:00:00', function(event) {
            var $this = $(this).html(event.strftime(''
                + '<span class="number">%D</span> : '
                + '<span class="number">%H</span> : '
                + '<span class="number">%M</span> : '
                + '<span class="number">%S</span>'));
        });

    $('.slide-lead').slick({
        arrows:true,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3,
                    variableWidth: true,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    variableWidth: true,
                    infinite: true
                }
            }
        ]
    });
    $('.slide-activity').slick({
        arrows:true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});