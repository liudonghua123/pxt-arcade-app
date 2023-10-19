# set Kind

Set the sprite kind.

```sig
sprites.create(null).setKind(0)
```

### Parameter

* **value**: a [number](/types/number) value that is the new kind to set for the sprite.

### Sprite kinds

To keep track of different types of sprites, you can assign a _kind_ to them. This is a value that will help identify them and decide what actions to take when events happen in the game. There are no particular rules or names for how you decide on what the kinds should be. The way to do it though is to assign a kind in the **SpriteKind** namespace.

```typescript
namespace SpriteKind {
    export const Star = SpriteKind.create()
    export const Comet = SpriteKind.create()
}
```

There are some default kinds that are already part of **SpriteKind**. These are:

* SpriteKind.Player
* SpriteKind.Enemy
* SpriteKind.Food
* SpriteKind.Projectile

When you create a sprite, you can optionally assign it a kind:

```block
let mySprite = sprites.create(img`
2 4
4 2
`, SpriteKind.Player)
```

```typescript-ignore
let mySprite = sprites.create(img`
2 4
4 2
`, SpriteKind.Player)
```

If you were making a space game, you might have kinds like this:

```typescript
namespace SpriteKind {
    export const Ship = SpriteKind.create()
    export const Planet = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
    export const moon = SpriteKind.create()
}
```

During the game, if you need a sprite to change to a different kind, say a ``Planet`` becomes an ``Asteriod``, you just set the new kind with **setKind**.

## Example #example

Make a ``Player`` sprite and two ``Friend`` sprites. Every 2 seconds, turn one of the friend sprites into an ``Enemy``. Every 10 seconds have the enemy sprites become friends again.

```blocks
namespace SpriteKind {
    export const Friend = SpriteKind.create()
}
let player: Sprite = null
let friend2: Sprite = null
let friend1: Sprite = null
let greenBlock: Image = null
greenBlock = image.create(16, 16)
greenBlock.fill(7)
player = sprites.create(greenBlock, SpriteKind.Player)
friend1 = sprites.create(greenBlock, SpriteKind.Friend)
friend1.x = scene.screenWidth() / 4
friend2 = sprites.create(greenBlock, SpriteKind.Friend)
friend2.x = scene.screenWidth() * 3 / 4
game.onUpdateInterval(10000, function () {
    friend1.setKind(SpriteKind.Friend)
    friend2.setKind(SpriteKind.Friend)
})
game.onUpdateInterval(2000, function () {
    if (friend1.kind() == SpriteKind.Friend) {
        friend1.setKind(SpriteKind.Enemy)
    } else if (friend2.kind() == SpriteKind.Friend) {
        friend2.setKind(SpriteKind.Enemy)
    }
})
```

## See also #seealso

[create](/reference/sprites/create), [kind](/reference/sprites/sprite/kind)
