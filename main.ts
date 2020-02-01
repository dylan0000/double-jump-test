namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
}
scene.onHitWall(SpriteKind.Player, function (sprite2) {
    if (canJump == false) {
        mySprite.vy = 0
        double_jump = true
    }
    if (equipgun == true) {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . c . . . . 
. . . . . . f f f f . 1 c . . . 
. . . . . f f f f f 1 . e . . . 
. . . . . f f f f f f . e . . . 
. . . . f . f f f f 1 . c . . . 
. . . . . . f f f f . c . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (projectile) {
        sprite.destroy()
        enemyHP += -1
        if (enemyHP <= 0) {
            sprite.destroy()
            otherSprite.destroy()
            enemyHP = 5
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (equipgun == true) {
        for (let index = 0; index <= 4; index++) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 . . . . . a . . . 
. . . . . . e e e e e e a a . . 
. . . . . 1 1 . . . . . a . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 150, 0)
            projectile.ay = 30
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . c c . . . 
. . . . . . f f f f c . 1 . . . 
. . . . . f f f f f f . 1 . . . 
. . . . f c f f f f . f . . . . 
. . . . c . f f f f 1 f . . . . 
. . . . c . f f f f . . . . . . 
. . . . . 1 f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.ashes, 100)
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . f . . . . . . . 
`)
    if (canJump == true) {
        if (mySprite.vy == 0) {
            mySprite.vy = -150
            pause(50)
            mySprite.vy = 0
            double_jump = true
        }
    } else {
        if (double_jump == true) {
            double_jump = false
            pause(50)
            mySprite.vy = -150
        }
    }
})
let projectile: Sprite = null
let double_jump = false
let canJump = false
let enemyHP = 0
let enemi: Sprite = null
let equipgun = false
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
`, SpriteKind.Player)
mySprite.ay = 350
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b f b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b 2 b b b b f b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b f b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b f b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b f b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b f b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b f b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b f b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b 4 b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b 4 b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.setTile(15, img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c 3 c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
`, true)
scene.setTile(4, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, false)
scene.setTile(2, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f 1 f f f f 1 f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 f f f f f f f f f f f f f f 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, false)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 28))
equipgun = true
for (let value of scene.getTilesByType(4)) {
    enemi = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f f f 1 f f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    scene.place(value, enemi)
    enemi.vx = 100
    enemi.setFlag(SpriteFlag.BounceOnWall, true)
}
enemyHP = 5
game.onUpdate(function () {
    if (equipgun == false) {
        if (mySprite.vx > 0) {
            animation.runImageAnimation(
            mySprite,
            [img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . f . . . f . . . . . . 
`],
            20,
            true
            )
        } else if (mySprite.vx == 0) {
            mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f 1 f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f . . f . . . . . . 
. . . . . . f . . f . . . . . . 
`)
        }
    }
})
