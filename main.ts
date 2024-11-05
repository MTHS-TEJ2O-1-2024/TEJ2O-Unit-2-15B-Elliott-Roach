/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott roach
 * Created on: nov 2024
 * This program moves a sprite in a square
*/

//setup
let sprite: game.LedSprite = null
let locationOneAxis = 0
let looplocationAllAxis = 0

basic.clearScreen()

//moving a sprite in a square
input.onButtonPressed(Button.A, function () {

    // setup to move sprite
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    while (looplocationAllAxis <= 19) {
        sprite.move(1)
        locationOneAxis = locationOneAxis + 1
        looplocationAllAxis = looplocationAllAxis +  1

        while (locationOneAxis == 5) {
            sprite.turn(Direction.Right, 90)
            locationOneAxis = 0
        }

        pause(500)
    }

    //clearing
    sprite.delete()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
