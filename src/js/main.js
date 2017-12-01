$(document).ready(function () {
    var $SCALE = 1;
    var $line1 = $('.cls-1');
    var $LINE1_LENGTH = 19091.802734375;
    var $circleout1 = $('.cls-2');
    var $circlein1 = $('.cls-3');
    var $circleout2 = $('.cls-22');
    var $circlein2 = $('.cls-32');
    var $circleout3 = $('.cls-23');
    var $circlein3 = $('.cls-33');
    var $circleout4 = $('.cls-24');
    var $circlein4 = $('.cls-34');
    var controller = new ScrollMagic.Controller();



        

    var scene = new ScrollMagic.Scene({
            triggerElement: '#trigger1',
            duration: 150*$SCALE,
            tweenChanges: false
        })
        .setTween(new TimelineMax()
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
        })))
        .addIndicators()
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
            triggerElement: '#trigger2',
            duration: 500*$SCALE,
            offset: 150*$SCALE,
            tweenChanges: false
        })
        .setTween(new TimelineMax()
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
        })))
        .addIndicators()
        .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
            triggerElement: '#trigger3',
            duration: 1000*$SCALE,
            tweenChanges: false
        })
        .setTween(TweenMax.to($('.background-text-tessact'), 1, {
            y: 300,
            ease: Linear.easeNone
        }))
        .addIndicators()
        .addTo(controller);

    var scene4 = new ScrollMagic.Scene({
            triggerElement: '#trigger4',
            duration: 1300*$SCALE,
            offset: 0*$SCALE,
            tweenChanges: false
        })
        .setTween(TweenMax.to($('.background-text-about-us'), 1, {
            y: 300,
            ease: Linear.easeNone
        }))
        .addIndicators()
        .addTo(controller);

    var scene5 = new ScrollMagic.Scene({
        triggerElement: '#trigger5',
        duration: 1000*$SCALE,
        offset: 500*$SCALE,
        tweenChanges: false
    })
    .setTween(new TweenMax.to($('.body-text-about-tessact'), 1, {
        y: -300,
        ease: Linear.easeNone
    }))
    .addIndicators()
    .addTo(controller);

    var scene6 = new ScrollMagic.Scene({
        triggerElement: '#trigger6',
        duration: 300*$SCALE,
        offset: 650*$SCALE,
        tweenChanges: false
    })
    .setTween(new TweenMax.to($line1, 1, {
        strokeDashoffset: $LINE1_LENGTH * (1-1.27/7.0),
        ease: Linear.easeNone
    }))
    .addIndicators()
    .addTo(controller);

    var scene7 = new ScrollMagic.Scene({
        triggerElement: '#trigger7',
        duration: 1500*$SCALE,
        offset: 200*$SCALE,
        tweenChanges: false
    })
    .setTween(new TweenMax.to($('.background-text-features'), 1, {
        y: 400,
        ease: Linear.easeNone
    }))
    .addIndicators()
    .addTo(controller);

    var scene8 = new ScrollMagic.Scene({
        triggerElement: '#trigger8',
        duration: 150*$SCALE,
        offset: 950*$SCALE,
        tweenChanges: false
    })
    .setTween(new TimelineMax()
    .add(TweenMax.to($circleout3, 0.25, {
        attr: {
            r: 28
        },
        ease: Linear.easeNone
    }))
    .add(TweenMax.to($circlein3, 0.125, {
        attr: {
            r: 12.5
        },
        ease: Linear.easeNone
    })))
    .addIndicators()
    .addTo(controller);

    var scene9 = new ScrollMagic.Scene({
        triggerElement: '#trigger9',
        duration: 500*$SCALE,
        offset: 1100*$SCALE,
        tweenChanges: false
    })
    .setTween(new TweenMax.to($line1, 1, {
        strokeDashoffset: $LINE1_LENGTH * (1-2.4/7.0),
        ease: Linear.easeNone
    }))
    .addIndicators()
    .addTo(controller);

    var scene10 = new ScrollMagic.Scene({
        triggerElement: '#trigger10',
        duration: 400*$SCALE,
        offset: 1000*$SCALE,
        tweenChanges: false
    })
    .setTween(new TweenMax.staggerFrom($('.fitem'), 1, {
        left: "+=900",
        ease: Linear.easeNone
    }, 0.2))
    .addIndicators()
    .addTo(controller);

    var scene11 = new ScrollMagic.Scene({
        triggerElement: '#trigger11',
        duration: 150*$SCALE,
        offset: 1600*$SCALE,
        tweenChanges: false
    })
    .setTween(new TimelineMax()
    .add(TweenMax.to($circleout4, 0.25, {
        attr: {
            r: 28
        },
        ease: Linear.easeNone
    }))
    .add(TweenMax.to($circlein4, 0.125, {
        attr: {
            r: 12.5
        },
        ease: Linear.easeNone
    })))
    .addIndicators()
    .addTo(controller);

    var scene12 = new ScrollMagic.Scene({
        triggerElement: '#trigger12',
        duration: 800*$SCALE,
        offset: 1400*$SCALE,
        tweenChanges: false
    })
    .setTween(new TweenMax.to($('.background-text-use-cases'), 1, {
        y: 200*$SCALE,
        ease: Linear.easeNone
    }))
    .addIndicators()
    .addTo(controller);

})