$(document).ready(function () {
    var $line1 = $('.cls-1');
    var $LINE1_LENGTH = 19091.802734375;
    var $circleout1 = $('.cls-2');
    var $circlein1 = $('.cls-3');

    var controller = new ScrollMagic.Controller();

    var tween = new TimelineMax()
        .add(TweenMax.to($line1, 1, {
            strokeDashoffset: $LINE1_LENGTH * (1-0.3/7.0),
            ease: Linear.easeNone
        }))
        .add(TweenMax.to($circleout1, 0.5, {
            attr: {
                r: 28
            },
            ease: Linear.easeNone
        }))
        .add(TweenMax.to($circlein1, 0.25, {
            attr: {
                r: 12.5
            },
            ease: Linear.easeNone
        }));

    var tween2 = new TimelineMax()
        .add(TweenMax.to($line1, 1, {
            strokeDashoffset: $LINE1_LENGTH * (1-0.9/7.0),
            ease: Linear.easeNone
        }));
        

    var scene = new ScrollMagic.Scene({
            triggerElement: '#trigger1',
            duration: 500,
            tweenChanges: true
        })
        .setPin('.section-main')
        .setTween(tween)
        .addIndicators()
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
            triggerElement: '#trigger2',
            duration: 1000,
            tweenChanges: true
        })
        .setTween(tween2)
        .addIndicators()
        .addTo(controller);

})