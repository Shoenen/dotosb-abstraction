function addScale(sprite, easing, timings, sizes){
    sprite.add('S', 
    timings, 
    sizes,
    easingMap.get(easing))
}

function addFade(sprite, easing, timings, fadeValues){
    sprite.add('F',
    timings,
    fadeValues,
    easingMap.get(easing))
}

function addRotate(sprite, easing, timings, rotationalValues){
    sprite.add('R',
    timings,
    rotationalValues,
    easingMap.get(easing))
}

function addMoveY(sprite, easing, timings, moveValues){
    sprite.add('MY',
    timings,
    moveValues,
    easingMap.get(easing))
}

function addMoveX(sprite, easing, timings, moveValues){
    sprite.add('MX',
    timings,
    moveValues,
    easingMap.get(easing))
}

function addMove(sprite, easing, timings, moveValues){
    sprite.add('M',
    timings,
    moveValues,
    easingMap.get(easing))
}

function addColor(sprite, easing, timings, RgbValues){
    sprite.add('C',
    timings,
    RgbValues,
    easingMap.get(easing))
}

const easings = {
    linear: "linear",
    easeOut:"easeOut",
    easeIn:"easeIn",
    quadIn:"quadIn",
    quadOut:"quadOut",
    quadInOut:"quadInOut",
    cubicIn:"cubicIn",
    cubicOut:"cubicOut",
    cubicInOut:"cubicInOut",
    quartIn:"quartIn",
    quartOut:"quartOut",
    quartInOut:"quartInOut",
    quintIn:"quintIn",
    quintOut:"quintOut",
    quintInOut:"quintInOut",
    sineIn:"sineIn",
    sineOut:"sineOut",
    sineInOut:"sineInOut",
    expoIn:"expoIn",
    expoOut:"expoOut",
    expoInOut:"expoInOut",
    circIn:"circIn",
    circOut:"circOut",
    circInOut:"circInOut",
    elasticIn:"elasticIn",
    elasticOut:"elasticOut",
    elasticHalfOut:"elasticHalfOut",
    elasticQuarterOut:"elasticQuarterOut",
    elasticInOut:"elasticInOut",
    backIn:"backIn",
    backOut:"backOut",
    backInOut:"backInOut",
    bounceIn:"bounceIn",
    bounceOut:"bounceOut",
    bounceInOut:"bounceInOut"
}

const easingMap = new Map();
counter=0;
for(easing in easings){
    easingMap.set(easing, counter);
    counter++;
}

module.exports.easings=easings;
module.exports.addScale=addScale;
module.exports.addFade=addFade;
module.exports.addRotate=addRotate;
module.exports.addMoveX=addMoveX;
module.exports.addMoveY=addMoveY;
module.exports.addMove=addMove;
module.exports.addColor=addColor;
