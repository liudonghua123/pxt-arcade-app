# is Pressed

Check if a button is being pressed or not.

```sig
input.buttonA.isPressed()
```

## ~hint
**Touch**

If your board has pins or pads that work as touch inputs, then your code can use them just like buttons.
Instead of saying `button A` or `button B` as the input source, use a pin name like `pin A1`.

```block
if (input.pinA1.isPressed()) {
    console.log("Hey, I feel pressed.");
}
```
Read about [**touch sensors**](/reference/input/button/touch-sensors) and using the pins as touch buttons.
## ~

## Returns

* a [boolean](types/boolean): `true` if the button is pressed, `false` if the button is not pressed

## Example #example

Log a message when button `A` is pressed.

```blocks
forever(function() {
    if (input.buttonA.isPressed()) {
        console.log("Button A is pressed")
    }
    pause(300)
})
```

## See also #seealso

[was pressed](/reference/input/button/was-pressed),
[on event](/reference/input/button/on-event)

[Touch sensors](/reference/input/button/touch-sensors)