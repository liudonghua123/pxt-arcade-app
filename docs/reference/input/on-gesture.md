# on Gesture

Run some code when you perform a **gesture**, like shaking the @boardname@.

```sig
input.onGesture(Gesture.Shake,() => {
})
```

## Parameters

* ``gesture``: the gesture to detect. A gesture is the way you hold or move the @boardname@. Gestures are:
> * `shake`: shake the board
> * `logo up`: the logo is facing up
> * `logo down`: the logo is facing down
> * `screen up`: the screen side is up
> * `screen down`: the screen side is down
> * `tilt left`: the board is tilted to the left
> * `tilt right`: the board is tilted to the right
> * `free fall`: the board is falling for a distance
> * `2g`: acceleration force of 2 g (works well for step detection)
> * `3g`: acceleration force of 3 g
> * `6g`: acceleration force of 6 g
* ``body``: code to run when the gesture event occurs

## Example: random number #example

Log a message when you shake the @boardname@.

```blocks
input.onGesture(Gesture.Shake, function() {}
    console.log("I'm shaking!")
})
```

## #seealso

```package
accelerometer
```