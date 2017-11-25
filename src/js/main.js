$(document).ready(function () {
    var $line1 = $('.cls-1');
    var $LINE1_LENGTH = 19091.802734375;
    var $circleout1 = $('.cls-2');
    var $circlein1 = $('.cls-3');
    var $circleout2 = $('.cls-22');
    var $circlein2 = $('.cls-32');

    var controller = new ScrollMagic.Controller();

    var tween = new TimelineMax()
        .add(TweenMax.to($line1, 0.25, {
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
            strokeDashoffset: $LINE1_LENGTH * (1-0.825/7.0),
            ease: Linear.easeNone
        })).add(TweenMax.to($circleout2, 0.25, {
            attr: {
                r: 28
            },
            ease: Linear.easeNone
        }))
        .add(TweenMax.to($circlein2, 0.125, {
            attr: {
                r: 12.5
            },
            ease: Linear.easeNone
        }));

    var tween3 = new  TimelineMax()
        .add(TweenMax.to($('.background-text'), 1, {
            y: 300,
            ease: Linear.easeNone
        }));

    var tween4 = new  TimelineMax()
        .add(TweenMax.to($('.background-text-about-us'), 1, {
            y: 300,
            ease: Linear.easeNone
        }));
        

    var scene = new ScrollMagic.Scene({
            triggerElement: '#trigger1',
            duration: 150,
            tweenChanges: false
        })
        .setTween(tween)
        .addIndicators()
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
            triggerElement: '#trigger2',
            duration: 600,
            offset: 150,
            tweenChanges: false
        })
        .setTween(tween2)
        .addIndicators()
        .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
            triggerElement: '#trigger3',
            duration: 1000,
            tweenChanges: false
        })
        .setTween(tween3)
        .addIndicators()
        .addTo(controller);

    var scene4 = new ScrollMagic.Scene({
            triggerElement: '#trigger4',
            duration: 1000,
            offset: 300,
            tweenChanges: false
        })
        .setTween(tween4)
        .addIndicators()
        .addTo(controller);

})