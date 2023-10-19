# Input

Events and data from sensors

## Accelerometer #acceleration

```cards
input.onGesture(Gesture.Shake, () => {

})
input.setAccelerometerRange(AcceleratorRange.OneG)
input.acceleration(Dimension.X)
input.rotation(Rotation.Pitch)

```

## Light sensor #lightsensor

```cards
input.onLightConditionChanged(LightCondition.Dark, () => {

})
input.lightLevel()
```

## Buttons #buttons

```cards
input.buttonA.isPressed()
input.buttonA.wasPressed()
input.onSwitchMoved(SwitchDirection.Left, () => {

})
input.buttonA.onEvent(ButtonEvent.Click, () => {

})
```

## Microphone #microphone

```cards
input.soundLevel();
input.onLoudSound(() => {});
input.setLoudSoundThreshold(0)
```

```package
microphone
```

## Thermometer #thermometer

```cards
input.onTemperatureConditionChanged(TemperatureCondition.Hot, 15, TemperatureUnit.Celsius, () => {
	
})
input.temperature(TemperatureUnit.Celsius)
```

