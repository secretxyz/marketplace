import $ from 'jquery';

let timers = new Map();

const CountLoader = (tag) => {
    if ($(tag)) {
        $(tag).each(function () {
            var _this = this;
            var key = $(_this).data('key');
            if (timers.has(key)){
                let x = timers.get(key);
                clearInterval(x);
            }

            var el = $(_this).data('countdate');
            var countDownDate = new Date(el).getTime();
            var x = setInterval(function () {
                var now = new Date().getTime();
                var distance = countDownDate - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                $(_this).find('.cs-count_days').html(days);
                $(_this).find('.cs-count_hours').html(hours);
                $(_this).find('.cs-count_minutes').html(minutes);
                $(_this).find('.cs-count_seconds').html(seconds);

                if (distance < 0) {
                    clearInterval(x);
                    $(_this).find('.cs-count_days').html(0);
                    $(_this).find('.cs-count_hours').html(0);
                    $(_this).find('.cs-count_minutes').html(0);
                    $(_this).find('.cs-count_seconds').html(0);
                }
            }, 1000);
            timers.set(key, x);
        });
    }
}
export default CountLoader;