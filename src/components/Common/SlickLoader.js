import $ from 'jquery';
import "../../assets/js/plugins/jquery.slick.min.js";

const SlickLoader = (tag) => {
    if ($(tag)) {
        $(tag).each(function () {
            // Slick Variable
            var $ts = $(tag).find('.cs-slider_container');
            var $slickActive = $(tag).find('.cs-slider_wrapper');

            // Auto Play
            var autoPlayVar = parseInt($ts.attr('data-autoplay'), 10);
            // Auto Play Time Out
            var autoplaySpdVar = 3000;
            if (autoPlayVar > 1) {
                autoplaySpdVar = autoPlayVar;
                autoPlayVar = 1;
            }
            // Slide Change Speed
            var speedVar = parseInt($ts.attr('data-speed'), 10);
            // Slider Loop
            var loopVar = Boolean(parseInt($ts.attr('data-loop'), 10));
            // Slider Center
            var centerVar = Boolean(parseInt($ts.attr('data-center'), 10));
            // Slider Center
            var variableWidthVar = Boolean(
                parseInt($ts.attr('data-variable-width'), 10)
            );
            // Pagination
            var paginaiton = $(tag).children().hasClass('cs-pagination');
            // Slide Per View
            var slidesPerView = $ts.attr('data-slides-per-view');
            if (slidesPerView == 1) {
                slidesPerView = 1;
            }
            if (slidesPerView == 'responsive') {
                var slidesPerView = parseInt($ts.attr('data-add-slides'), 10);
                var lgPoint = parseInt($ts.attr('data-lg-slides'), 10);
                var mdPoint = parseInt($ts.attr('data-md-slides'), 10);
                var smPoint = parseInt($ts.attr('data-sm-slides'), 10);
                var xsPoing = parseInt($ts.attr('data-xs-slides'), 10);
            }
            // Fade Slider
            var fadeVar = parseInt($($ts).attr('data-fade-slide'));
            fadeVar === 1 ? (fadeVar = true) : (fadeVar = false);

            // Slick Active Code
            $slickActive.slick({
                autoplay: autoPlayVar,
                dots: paginaiton,
                centerPadding: '0',
                speed: speedVar,
                infinite: loopVar,
                autoplaySpeed: autoplaySpdVar,
                centerMode: centerVar,
                fade: fadeVar,
                prevArrow: $(tag).find('.cs-left_arrow'),
                nextArrow: $(tag).find('.cs-right_arrow'),
                appendDots: $(tag).find('.cs-pagination'),
                slidesToShow: slidesPerView,
                variableWidth: variableWidthVar,
                // slidesToScroll: slidesPerView,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: lgPoint,
                        },
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: mdPoint,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: smPoint,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: xsPoing,
                        },
                    },
                ],
            });
        });
    }
}
export default SlickLoader;