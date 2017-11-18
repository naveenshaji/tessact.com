$(document).ready(function(){
    function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css('stroke-dasharray', lineLength);
        $el.css('stroke-dashoffset', lineLength);
    }
    var $line1 = $('.cls-1');
    var $circleout1 = $('.cls-2');
    var $circlein1 = $('.cls-3');
    pathPrepare($line1);
    
    var controller = new ScrollMagic.Controller();
    
    var tween = new TimelineMax()
        .add(TweenMax.to($line1, 1, {strokeDashoffset: $line1[0].getTotalLength()/2, ease: Linear.easeNone }))
        .add(TweenMax.to($circleout1, 1, {attr:{r: 28}, ease: Linear.easeNone}))
        .add(TweenMax.to($circlein1, 0.5, {attr:{r: 12.5}, ease: Linear.easeNone}));
    
    var scene = new ScrollMagic.Scene({triggerElement: '#trigger1', duration: 500, tweenChanges: false})
                    .setPin('.section-main')
                    .setTween(tween)
                    .addIndicators()
                    .addTo(controller);

})