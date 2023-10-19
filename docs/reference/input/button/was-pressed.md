# was Pressed

Check if a button was pressed earlier.

```sig
input.buttonA.wasPressed()
```

The fact that a button was pressed earlier is remembered. Once **was pressed** is used, this fact is forgotten and
the result is `false` the next time you check with **was pressed** (button _state_ is reset). But, if you press the button again before you
check with **was pressed**, it will tell you `true`. 

## ~hint
**Touch**

If your board has pins or pads that work as touch inputs, then your code can use them just like buttons.
Instead of saying `button A` or `button B` as the input source, use a pin name like `pin A1`.

```block
if (input.pinA1.wasPressed()) {
    console.log("Hey, I was pressed.");
}
```

Read about [**touch sensors**](/reference/input/button/touch-sensors) and using the pins as touch buttons.
## ~

## Returns

* a [boolean](types/boolean): `true` if the button was pressed before, `false` if the button was not pressed before

## Example #example

Log a message telling whether button `A` or `B` was pressed.

```blocks
input.buttonB.onEvent(ButtonEvent.Click, function() {
    if (input.buttonA.wasPressed()) {
        console.log("Button A Pressed")
    } else {
        console.log("Button B Pressed")
    }
})
```

## See also #seealso

[is pressed](/reference/input/button/is-pressed),
[on event](/reference/input/button/on-event)

[Touch sensors](/reference/input/button/touch-sensors)