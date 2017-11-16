$(document).ready(function(){
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

    var entries = [

        { label: 'Dev Blog', url: 'http://niklasknaack.blogspot.de/', target: '_top' },
        { label: 'Flashforum', url: 'http://www.flashforum.de/', target: '_top' },
        { label: 'jQueryScript.net', url: 'http://www.jqueryscript.net/', target: '_top' },
        { label: 'Javascript-Forum', url: 'http://forum.jswelt.de/', target: '_top' },
        { label: 'JSFiddle', url: 'https://jsfiddle.net/user/NiklasKnaack/fiddles/', target: '_top' },
        { label: 'CodePen', url: 'http://codepen.io/', target: '_top' },
        { label: 'three.js', url: 'http://threejs.org/', target: '_top' },
        { label: 'WebGLStudio.js', url: 'http://webglstudio.org/', target: '_top' },
        { label: 'JS Compress', url: 'http://jscompress.com/', target: '_top' },
        { label: 'TinyPNG', url: 'https://tinypng.com/', target: '_top' },
        { label: 'Can I Use', url: 'http://caniuse.com/', target: '_top' },
        { label: 'URL shortener', url: 'https://goo.gl/', target: '_top' },
        { label: 'HTML Encoder', url: 'http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx', target: '_top' },
        { label: 'Twitter', url: 'https://twitter.com/niklaswebdev', target: '_top' },
        { label: 'deviantART', url: 'http://nkunited.deviantart.com/', target: '_top' },
        { label: 'Gulp', url: 'http://gulpjs.com/', target: '_top' },
        { label: 'Browsersync', url: 'https://www.browsersync.io/', target: '_top' },
        { label: 'GitHub', url: 'https://github.com/', target: '_top' },
        { label: 'Shadertoy', url: 'https://www.shadertoy.com/', target: '_top' },
        { label: 'Starling', url: 'http://gamua.com/starling/', target: '_top' },
        { label: 'jsPerf', url: 'http://jsperf.com/', target: '_top' },
        { label: 'Foundation', url: 'http://foundation.zurb.com/', target: '_top' },
        { label: 'CreateJS', url: 'http://createjs.com/', target: '_top' },
        { label: 'Velocity.js', url: 'http://julian.com/research/velocity/', target: '_top' },
        { label: 'TweenLite', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_top' },
        { label: 'jQuery', url: 'https://jquery.com/', target: '_top' },
        { label: 'jQuery Rain', url: 'http://www.jqueryrain.com/', target: '_top' },
        { label: 'jQuery Plugins', url: 'http://jquery-plugins.net/', target: '_top' },

    ];

    var settings = {

        entries: entries,
        width: 420,
        height: 420,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#fff',
        opacityOver: 1.00,
        opacityOut: 0.1,
        opacitySpeed: 6,
        fov: 800,
        speed: 0.5,
        fontFamily: 'GothamProMedium, Arial, sans-serif',
        fontSize: '16',
        fontColor: '#3dbdf4',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#3dbdf4',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#cloud' ).svg3DTagCloud( settings );


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

    $("#getting-started")
        .countdown('2017/11/30', function(event) {
            var $this = $(this).html(event.strftime(''
                + '<span class="number">%d</span> : '
                + '<span class="number">%H</span> : '
                + '<span class="number">%M</span> : '
                + '<span class="number">%S</span>'));
        });
});