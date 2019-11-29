# Plugin for Miro - hide frames

This plugin allows to easily hide all frames to have "Prezi" like presentation experience. 
![hide frames showcase](docs/miro-hide-frames.gif)

## Installation
[CLICK HERE](https://miro.com/oauth/authorize/?response_type=token&client_id=3074457347050574725&redirect_uri=https://kaszaq.github.io/miro-hide-frames/installComplete.html) to install plugin in Miro.

## Why
Prezi allows cool zoom in/out/rotation of entire board presentation experience. 
In Miro it is already possible to switch between frames like this [excluding rotation]. Unfortunetly in this "flow" presentation mode
users can see "frames" objects. The only way to not see them is to start presentation, however then entire "flow" presentation experience gets lost.

With this plugin it is possible to hide frames hence they no longer interfere with presentation in "flow" mode.

## Use case

To have "Prezi" like presentation experience.

## Known issues & upcoming features
* authentication doesn't work as expected. Even when user is authenticated he is forced to reload the board. With multiple plugins that would require such action from the user it could be a bad UX.