*Button Implementation Guide:*
    Each button should have a script that manages the states of the button and governs the manner in which they react to mouse interactions. The three functions that we'll care about are:
    
*  OnMouseOver - Should provide some subtle highlights.
*  OnMouseDown - Should provide some less subtle highlights.
*  OnMouseUp   - Move the game to the target state.


After that, each menu/state/screen can be put into a prefab, inclusive of camera.


States
======

Main Menu
---------
**Assets:**
* *Title*
* *Credits*

**Buttons:**
* *Start*
* *Score*
* *Controls*
* *Quit*

Game
----

Controls/Intro
--------------
**Assets:**
* *Controls/Guide* Explanation of commands.



Result
------
Tabular presentation of the results for the current run- possibly contrasted to the high score.
* Kills
* Distance
* Combo
* etc.

High Score
----------
List of most recent scores. Maybe just the calculated score and no other additional features.

Quit
----
Splash out and exit.

Splash
------
**Assets:**
* *Title*
* *Press Any Key!*
* *Credits*
