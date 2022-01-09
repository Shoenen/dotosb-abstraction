import { newEvent } from 'event.js';

class Funs{
    addoScale(sprite, timings, sizes, easing=easings.linear){
        sprite.add('S', 
        timings, 
        sizes,
        easingMap.get(easing));
    }
}

export const fun = new Funs();

export function addScale(sprite, timings, sizes, easing=easings.linear){
    sprite.add('S', 
    timings, 
    sizes,
    easingMap.get(easing))
}

export function addFade(sprite, timings, fadeValues, easing=easings.linear){
    sprite.add('F',
    timings,
    fadeValues,
    easingMap.get(easing))
}

export function addRotate(sprite, timings, rotationalValues, easing=easings.linear){
    sprite.add('R',
    timings,
    rotationalValues,
    easingMap.get(easing))
}

export function addMoveY(sprite, timings, moveValues, easing=easings.linear){
    sprite.add('MY',
    timings,
    moveValues,
    easingMap.get(easing))
}

export function addMoveX(sprite, timings, moveValues, easing=easings.linear){
    sprite.add('MX',
    timings,
    moveValues,
    easingMap.get(easing))
}

export function addMove(sprite, timings, moveValues, easing=easings.linear){
    sprite.add('M',
    timings,
    moveValues,
    easingMap.get(easing))
}

export function addColor(sprite, timings, RgbValues, easing=easings.linear){
    sprite.add('C',
    timings,
    RgbValues,
    easingMap.get(easing))
}

export function addVectorScale(sprite, timings, vectorSizes, easing=easings.linear){
    sprite.add('V',
    timings,
    vectorSizes,
    easingMap.get(easing)
    )
}

export function addParameter(sprite, startTime, endTime, typeOfParam){
    sprite.param(startTime,
    endTime,
    typeOfParam)
}

export function addScaleInLoop(timings, sizes, easing=easings.linear){
    newEvent('S',
    timings, 
    sizes,
    easingMap.get(easing))
}

export function addScaleInLoop(timings, sizes, easing=easings.linear){
    newEvent('S',
    timings, 
    sizes,
    easingMap.get(easing))
}

export function addFadeInLoop(timings, fadeValues, easing=easings.linear){
    newEvent('F',
    timings, 
    fadeValues,
    easingMap.get(easing))
}

export function addRotateInLoop(timings, rotationalValues, easing=easings.linear){
    newEvent('R',
    timings, 
    rotationalValues,
    easingMap.get(easing))
}

export function addMoveYInLoop(timings, moveValues, easing=easings.linear){
    newEvent('MY',
    timings, 
    moveValues,
    easingMap.get(easing))
}

export function addMoveXInLoop(timings, moveValues, easing=easings.linear){
    newEvent('MX',
    timings, 
    moveValues,
    easingMap.get(easing))
}

export function addMoveInLoop(timings, moveValues, easing=easings.linear){
    newEvent('M',
    timings, 
    moveValues,
    easingMap.get(easing))
}

export function addColorInLoop(timings, RgbValues, easing=easings.linear){
    newEvent('C',
    timings, 
    RgbValues,
    easingMap.get(easing))
}

export function addVectorScaleInLoop(timings, vectorSizes, easing=easings.linear){
    newEvent('V',
    timings, 
    vectorSizes,
    easingMap.get(easing))
}


export const easings = {
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

/*module.exports.easings=easings;
module.exports.addScale=addScale;
module.exports.addFade=addFade;
module.exports.addRotate=addRotate;
module.exports.addMoveX=addMoveX;
module.exports.addMoveY=addMoveY;
module.exports.addMove=addMove;
module.exports.addColor=addColor;
module.exports.addVectorScale=addVectorScale;
module.exports.addParameter=addParameter;
module.exports.addScaleInLoop=addScaleInLoop;
module.exports.addFadeInLoop=addFadeInLoop;
module.exports.addRotateInLoop=addRotateInLoop;
module.exports.addMoveXInLoop=addMoveXInLoop;
module.exports.addMoveYInLoop=addMoveYInLoop;
module.exports.addMoveInLoop=addMoveInLoop;
module.exports.addColorInLoop=addColorInLoop;
module.exports.addVectorScaleInLoop=addVectorScaleInLoop;*/