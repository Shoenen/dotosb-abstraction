function addScale(sprite, timings, size, easing){
    sprite.add('S', 
    Array.isArray(timings)?timings:[timings,timings], 
    Array.isArray(size)?size:[size,size],
    easing)
}

let easeIn="easeIn";
let linear="linear";
const easingMap = new Map();
easingMap.set(linear, 0);
easingMap.set(linear, 0);
easingMap.set(linear, 0);
easingMap.set(linear, 0);
easingMap.set(linear, 0);
easingMap.set(linear, 0);
easingMap.set(linear, 0);
easingMap.set(linear, 0);
easingMap.set(linear, 0);
easingMap.set(linear, 0);
easingMap.set(linear, 10);
easingMap.set(linear, 10);
easingMap.set(linear, 10);
easingMap.set(linear, 10);
easingMap.set(linear, 10);
easingMap.set(linear, 10);
easingMap.set(linear, 10);
easingMap.set(linear, 10);
easingMap.set(linear, 10);
easingMap.set(linear, 10);
easingMap.set(linear, 20);
easingMap.set(linear, 21);
easingMap.set(linear, 22);
easingMap.set(linear, 23);
easingMap.set(linear, 24);
easingMap.set(linear, 25);
easingMap.set(linear, 26);
easingMap.set(linear, 27);
easingMap.set(linear, 28);
easingMap.set(linear, 29);
easingMap.set(linear, 30);
easingMap.set(linear, 31);
easingMap.set(linear, 32);
easingMap.set(linear, 33);
easingMap.set(linear, 34);

console.log(easingMap.get(easeIn))
module.exports.addScale=addScale;