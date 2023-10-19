# create Strip

Create a controller for a programmable LED strip.

```sig
light.createStrip();
```
When you connect a pixel strip to your @boardname@, you have to give your program a way
to work with it. You tell your program that there is a pixel strip you want to use with
``||create strip||``.

To use ``||create strip||``, you need to know which pin the strip is attached to and
how many pixels (LEDs) are on the strip. Also, some pixel strips have different types LEDs.
If you know the exact type, you can set it in the pixel mode. 

## Parameters

* **pin**: [DigitalInOutPin](/reference/pins), the pin where the neopixel strip is connected.
* **numleds**: the [number](/types/number) of LEDs in the strip, such as: 10, 30, 60, or 64.

## Returns

* a new **NeoPixelStrip** controller for the neopixels on a strip connected to the board.

## Example

Connect a pixel strip to the pin `A1`. Make all pixels light up `green`.

```typescript
const strip = light.createStrip(pins.A1, 10);
strip.setAll(0x00ff00)
```

## See Also

[``||range||``](/reference/light/neopixelstrip/range), [``||set mode||``](/reference/light/neopixelstrip/set-mode)

```package
light
```
