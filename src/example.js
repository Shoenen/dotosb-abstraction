/*The following code does NOT work because you need the dotosb library to properly use this library.
This library is just an abstraction layer.
The following code is done for the only purpose of showing example usecases.*/

import * as sc from "./sbCommands.js";

sc.addScale(sprite, 100, [0, 0.4], sc.easings.bounceInOut);
sprite.createLoop(0,100, [
    sc.addFadeInLoop([0,100],[1,0], sc.easings.circIn)
]);