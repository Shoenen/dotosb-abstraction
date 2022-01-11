/**
 * @author Shoenen
 * A small library of (hopefully) helping functions and class that abstract a bit the dotosb syntax to generate commands
 */
 import { newEvent } from './event.js';
 import { Sprite } from './sprite.js';
 
 export class SpriteWrapper extends Sprite{
     constructor(storyboard, path, options) {
         super(path, options);
         this.storyboard=storyboard;
         storyboard.layers.get(options?.layer ?? "Background").push(this);        
     }
 
     /**
      * Adds a Scale command to the sprite.
      * If instead of an array is given only one parameter, it will behave as an array with that value twice
      * @param {Array<Integer>} timings 
      * @param {Array<Float>} sizes 
      * @param {easings} easing 
      */
     scale(timings, sizes, easing=easings.linear){
         super.add('S', 
         timings, 
         sizes,
         easing)
     }
     /**
      * Adds a Fade command to the sprite.
      * If instead of an array is given only one parameter, it will behave as an array with that value twice
      * @param {Array<Integer>} timings 
      * @param {Array<Float>} fadeValues 
      * @param {easings} easing 
      */
     fade(timings, fadeValues, easing=easings.linear){
         super.add('F', 
         timings, 
         fadeValues,
         easing)
     }
     /**
      * Adds a Rotate command to the sprite. The rotational values are in radiants.
      * If instead of an array is given only one parameter, it will behave as an array with that value twice
      * @param {Array<Integer>} timings 
      * @param {Array<Float>} rotationalValues 
      * @param {easings} easing 
      */
     rotate(timings, rotationalValues, easing=easings.linear){
         super.add('R',
         timings,
         rotationalValues,
         easing)
     }
     /**
      * Adds a MoveY command to the sprite.
      * If instead of an array is given only one parameter, it will behave as an array with that value twice
      * @param {Array<Integer>} timings 
      * @param {Array<Integer>} moveValues 
      * @param {easings} easing 
      */
     moveY(timings, moveValues, easing=easings.linear){
         super.add('MY', 
         timings, 
         moveValues,
         easing)
     }
     /**
      * Adds a MoveX command to the sprite.
      * If instead of an array is given only one parameter, it will behave as an array with that value twice
      * @param {Array<Integer>} timings 
      * @param {Array<Integer>} moveValues 
      * @param {easings} easing 
      */
     moveX(timings, moveValues, easing=easings.linear){
         super.add('MX', 
         timings, 
         moveValues,
         easing)
     }
     /**
      * Adds a Move command to the sprite.
      * If instead of an array is given only one parameter, it will behave as an array with that value twice
      * @param {Array<Integer>} timings 
      * @param {Array<Integer>} moveValues 
      * @param {easings} easing 
      */
     move(timings, moveValues, easing=easings.linear){
         super.add('M', 
         timings, 
         moveValues,
         easing)
     }
     /**
      * Adds a Color command to the sprite.
      * If instead of an array is given only one parameter, it will behave as an array with that value twice
      * @param {Array<Integer>} timings 
      * @param {Array<Integer>} RgbValues 
      * @param {easings} easing 
      */
     color(timings, RgbValues, easing=easings.linear){
         super.add('C', 
         timings, 
         RgbValues,
         easing)
     }
     /**
      * Adds a VectorScale command to the sprite.
      * If instead of an array is given only one parameter, it will behave as an array with that value twice
      * @param {Array<Integer>} timings 
      * @param {Array<Float>} vectorSizes 
      * @param {easings} easing 
      */
     vectorScale(timings, vectorSizes, easing=easings.linear){
         super.add('V', 
         timings, 
         vectorSizes,
         easing)
     }
     /**
      * Adds a Parameter command to the given sprite.
      * @param {Integer} startTime 
      * @param {Integer} endTime
      * @param {String} typeOfParam 
      */
     parameter(startTime, endTime, typeOfParam){
         super.param(startTime,
         endTime,
         typeOfParam)
     }
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
     easing)
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
     easing)
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
     easing)
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
     easing)
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
     return newEvent('MX',
     timings, 
     moveValues,
     easing)
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
     easing)
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
     easing)
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
     easing)
 }
 
 /**
  * A object that contains all the possible easings you can use in .osb storyboarding.
  */
 export const easings = {
     linear: 0,
     easeOut: 1,
     easeIn: 2,
     quadIn: 3,
     quadOut: 4,
     quadInOut: 5,
     cubicIn: 6,
     cubicOut: 7,
     cubicInOut: 8,
     quartIn: 9,
     quartOut: 10,
     quartInOut: 11,
     quintIn: 12,
     quintOut: 13,
     quintInOut: 14,
     sineIn: 15,
     sineOut: 16,
     sineInOut: 17,
     expoIn: 18,
     expoOut: 19,
     expoInOut: 20,
     circIn: 21,
     circOut: 22,
     circInOut: 23,
     elasticIn: 24,
     elasticOut: 25,
     elasticHalfOut: 26,
     elasticQuarterOut: 27,
     elasticInOut: 28,
     backIn: 29,
     backOut: 30,
     backInOut: 31,
     bounceIn: 32,
     bounceOut: 33,
     bounceInOut: 34
 }