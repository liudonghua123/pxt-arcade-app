# light Level

Find the light level (how bright or dark it is) where you are.
The light level ``0`` means darkness and ``255`` means bright light.

```sig
input.lightLevel();
```

The first time you use it, this function will say ``0``.
After that, it will say the real light level.
This is because the _light sensor_ (the part on the board that looks for light)
has to be turned on first.

## Returns

* a [number](/types/number) that is a light level from ``0`` (dark) to ``255`` (bright).

## Examples #example

### Show light level #ex1

When you press button `A` on the @boardname@, this
program changes the brightness of the pixels accordingly.

```blocks
let pixels = light.createStrip();

input.buttonA.onEvent(ButtonEvent.Click, function() {
    let level = input.lightLevel();
    pixels.setBrightness(level);
    pixels.setAll(0xff0000);
});
```

### Chart light level #ex2

This program shows the light level with a [graph](/reference/light/graph) on the @boardname@ with the LEDs.
If you carry the @boardname@ around to different places with different light levels, the graph will change.

```blocks
let pixels = light.createStrip();

forever(function() {
    pixels.graph(
        input.lightLevel(),
        0
    );
});
```

## See also #seealso

[acceleration](/reference/input/acceleration)

