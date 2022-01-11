/**
 * @author Shoenen
 * A small library of (hopefully) helping functions that abstract a bit the dotosb syntax to generate commands
 */
import { newEvent } from './event.js';

/**
 * Adds a Scale command to the given sprite.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Sprite} sprite 
 * @param {Array<Integer>} timings 
 * @param {Array<Float>} sizes 
 * @param {easings} easing 
 */
export function addScale(sprite, timings, sizes, easing=easings.linear){
    sprite.add('S', 
    timings, 
    sizes,
    easingMap.get(easing))
}
/**
 * Adds a Fade command to the given sprite.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Sprite} sprite 
 * @param {Array<Integer>} timings 
 * @param {Array<Float>} fadeValues 
 * @param {easings} easing 
 */
export function addFade(sprite, timings, fadeValues, easing=easings.linear){
    sprite.add('F',
    timings,
    fadeValues,
    easingMap.get(easing))
}
/**
 * Adds a Rotate command to the given sprite. The rotational values are in radiants.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Sprite} sprite 
 * @param {Array<Integer>} timings 
 * @param {Array<Float>} rotationalValues 
 * @param {easings} easing 
 */
export function addRotate(sprite, timings, rotationalValues, easing=easings.linear){
    sprite.add('R',
    timings,
    rotationalValues,
    easingMap.get(easing))
}
/**
 * Adds a MoveY command to the given sprite.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Sprite} sprite 
 * @param {Array<Integer>} timings 
 * @param {Array<Integer>} moveValues
 * @param {easings} easing 
 */
export function addMoveY(sprite, timings, moveValues, easing=easings.linear){
    sprite.add('MY',
    timings,
    moveValues,
    easingMap.get(easing))
}
/**
 * Adds a MoveX command to the given sprite.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Sprite} sprite 
 * @param {Array<Integer>} timings 
 * @param {Array<Integer>} moveValues
 * @param {easings} easing 
 */
export function addMoveX(sprite, timings, moveValues, easing=easings.linear){
    sprite.add('MX',
    timings,
    moveValues,
    easingMap.get(easing))
}
/**
 * Adds a Move command to the given sprite.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Sprite} sprite 
 * @param {Array<Integer>} timings 
 * @param {Array<Integer>} moveValues
 * @param {easings} easing 
 */
export function addMove(sprite, timings, moveValues, easing=easings.linear){
    sprite.add('M',
    timings,
    moveValues,
    easingMap.get(easing))
}
/**
 * Adds a Color command to the given sprite.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Sprite} sprite 
 * @param {Array<Integer>} timings 
 * @param {Array<Integer>} RgbValues
 * @param {easings} easing 
 */
export function addColor(sprite, timings, RgbValues, easing=easings.linear){
    sprite.add('C',
    timings,
    RgbValues,
    easingMap.get(easing))
}
/**
 * Adds a VectorScale command to the given sprite.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Sprite} sprite 
 * @param {Array<Integer>} timings 
 * @param {Array<Float>} vectorSizes
 * @param {easings} easing 
 */
export function addVectorScale(sprite, timings, vectorSizes, easing=easings.linear){
    sprite.add('V',
    timings,
    vectorSizes,
    easingMap.get(easing)
    )
}
/**
 * Adds a Parameter command to the given sprite.
 * @param {Sprite} sprite 
 * @param {Integer} startTime 
 * @param {Integer} endTime
 * @param {String} typeOfParam 
 */
export function addParameter(sprite, startTime, endTime, typeOfParam){
    sprite.param(startTime,
    endTime,
    typeOfParam)
}
/**
 * Generate a Scale command that goes into a .osb Loop.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Array<Integer>} timings
 * @param {Array<Float>} sizes
 * @param {easings} easing
 * @returns {NewEvent} The generated loop event
 */
export function addScaleInLoop(timings, sizes, easing=easings.linear){
    return newEvent('S',
    timings, 
    sizes,
    easingMap.get(easing))
}
/**
 * Generate a Fade command that goes into a .osb Loop.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Array<Integer>} timings
 * @param {Array<Float>} fadeValues
 * @param {easings} easing
 * @returns {NewEvent} The generated loop event
 */
export function addFadeInLoop(timings, fadeValues, easing=easings.linear){
    return newEvent('F',
    timings, 
    fadeValues,
    easingMap.get(easing))
}
/**
 * Generate a Rotate command that goes into a .osb Loop. The rotational values are in radiants.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Array<Integer>} timings
 * @param {Array<Float>} rotationalValues
 * @param {easings} easing
 * @returns {NewEvent} The generated loop event
 */
export function addRotateInLoop(timings, rotationalValues, easing=easings.linear){
    return newEvent('R',
    timings, 
    rotationalValues,
    easingMap.get(easing))
}
/**
 * Generate a MoveY command that goes into a .osb Loop.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Array<Integer>} timings
 * @param {Array<Integer>} moveValues
 * @param {easings} easing
 * @returns {NewEvent} The generated loop event
 */
export function addMoveYInLoop(timings, moveValues, easing=easings.linear){
    return newEvent('MY',
    timings, 
    moveValues,
    easingMap.get(easing))
}
/**
 * Generate a MoveX command that goes into a .osb Loop.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Array<Integer>} timings
 * @param {Array<Integer>} moveValues
 * @param {easings} easing
 * @returns {NewEvent} The generated loop event
 */
export function addMoveXInLoop(timings, moveValues, easing=easings.linear){
    newEvent('MX',
    timings, 
    moveValues,
    easingMap.get(easing))
}
/**
 * Generate a Move command that goes into a .osb Loop.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Array<Integer>} timings
 * @param {Array<Integer>} moveValues
 * @param {easings} easing
 * @returns {NewEvent} The generated loop event
 */
export function addMoveInLoop(timings, moveValues, easing=easings.linear){
    return newEvent('M',
    timings, 
    moveValues,
    easingMap.get(easing))
}
/**
 * Generate a Color command that goes into a .osb Loop.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Array<Integer>} timings
 * @param {Array<Integer>} RgbValues
 * @param {easings} easing
 * @returns {NewEvent} The generated loop event
 */
export function addColorInLoop(timings, RgbValues, easing=easings.linear){
    return newEvent('C',
    timings, 
    RgbValues,
    easingMap.get(easing))
}
/**
 * Generate a VectorScale command that goes into a .osb Loop.
 * If instead of an array is given only one parameter, it will behave as an array with that value twice
 * @param {Array<Integer>} timings
 * @param {Array<Float>} vectorSizes
 * @param {easings} easing
 * @returns {NewEvent} The generated loop event
 */
export function addVectorScaleInLoop(timings, vectorSizes, easing=easings.linear){
    newEvent('V',
    timings, 
    vectorSizes,
    easingMap.get(easing))
}

/**
 * A object that contains all the possible easings you can use in .osb storyboarding.
 */
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

//Create the map and then populate it
const easingMap = new Map();
counter=0;
for(easing in easings){
    easingMap.set(easing, counter);
    counter++;
}