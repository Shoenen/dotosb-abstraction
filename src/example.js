/*The following code does NOT work because you need the dotosb library to properly use this library.
The paths used are just for example purposes!
This library is just an abstraction layer.
The following code is done for the only purpose of showing example usecases.*/

import { Storyboard } from "./src/storyboard.js";
import { SpriteWrapper, easings, addFadeInLoop, addColorInLoop, addMoveXInLoop } from "./src/sbCommands.js";

//Create a new storyboard
const storyboard = new Storyboard();

//Create a new SpriteWrapper object. It NEEDS to store the reference of the storyboard object!
const sprite=new SpriteWrapper(storyboard, "boh.png");

//Add a Scale command to the sprite, it looks like this in the .osb: S,6,0,100,1,1.4
sprite.scale([0,100],[1, 1.4], easings.cubicIn);

//Create a loop and that repeats 3 times and starts at 100ms
sprite.createLoop(100,3,[
    //Add a Fade command inside the loop, it looks like this in the .osb:  F,18,0,100,1,0
    addFadeInLoop([0,100], [1,0], easings.expoIn),
    //Add a Color command inside the loop, it looks like this in the .osb:  C,29,50,,255,255,255
    addColorInLoop(50, [255,255,255], easings.backIn),
    //Add a MoveX command inside the loop, it looks like this in the .osb:  MX,0,1,,30
    addMoveXInLoop(1, 30)

    /*The whole loop will look like this in the .osb:
        L,100,3
         F,18,0,100,1,0
         C,29,50,,255,255,255
         MX,0,1,,30
     */
])

//writes the storyboard to the file "test.osb"
storyboard.write('test.osb')