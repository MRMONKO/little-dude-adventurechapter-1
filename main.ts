namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const oicture = SpriteKind.create()
    export const THAT = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile1`)) {
        if (RUN == 0) {
            game.showLongText("It's A Cardboard Box Person Holding a sign.", DialogLayout.Bottom)
            game.showLongText("It says: Welcome To-", DialogLayout.Bottom)
            game.showLongText("The Rest Is Glazed in ice.", DialogLayout.Bottom)
        } else if (RUN == 1) {
            game.showLongText("It's A Waste Of Space", DialogLayout.Bottom)
            game.showLongText("If It Was Living", DialogLayout.Bottom)
            game.showLongText("It Would Be Dead At Your Hands", DialogLayout.Bottom)
        } else {
            game.showLongText("It's A Cardboard Box Person Holding a sign.", DialogLayout.Bottom)
            game.showLongText("It says: Welcome To-", DialogLayout.Bottom)
            game.showLongText("The Rest Is Glazed in ice.", DialogLayout.Bottom)
        }
    } else if (RUN == 2) {
    	
    }
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile4`)) {
        game.showLongText("It's A Tree", DialogLayout.Bottom)
        game.showLongText("It's Made Of Wood", DialogLayout.Bottom)
        game.showLongText("It's Cold", DialogLayout.Bottom)
        game.showLongText("What Did You Expect?", DialogLayout.Bottom)
    }
    if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile4`)) {
        game.showLongText("It's A Tree", DialogLayout.Bottom)
        game.showLongText("It's Made Of Wood", DialogLayout.Bottom)
        game.showLongText("It's Cold", DialogLayout.Bottom)
        game.showLongText("What Did You Expect?", DialogLayout.Bottom)
    }
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile4`)) {
        game.showLongText("It's A Tree", DialogLayout.Bottom)
        game.showLongText("It's Made Of Wood", DialogLayout.Bottom)
        game.showLongText("It's Cold", DialogLayout.Bottom)
        game.showLongText("What Did You Expect?", DialogLayout.Bottom)
    }
    if (mySprite.overlapsWith(SNOWYMAN)) {
        game.showLongText("Hello There!", DialogLayout.Bottom)
        game.showLongText("I Am Cold!", DialogLayout.Bottom)
        game.showLongText("I Have Lost My Mouth.", DialogLayout.Bottom)
        game.showLongText("How Am I Talking?", DialogLayout.Bottom)
        game.showLongText("Good Question.", DialogLayout.Bottom)
    }
    if (mySprite.overlapsWith(CAr)) {
        if (RUN == 1) {
            if (Officer_Dead != 1) {
                game.showLongText("Hey Man, I-", DialogLayout.Bottom)
                game.showLongText("Uh, You Good", DialogLayout.Bottom)
                game.showLongText("What are you...", DialogLayout.Bottom)
                game.showLongText("Stay back!", DialogLayout.Bottom)
                game.showLongText("I'm a Officer Of the law!", DialogLayout.Bottom)
                Officer_Dead = 1
                Sins += 1
                CAr.setImage(assets.image`myImage5`)
            }
        } else if (RUN == 2) {
            game.showLongText("Hey There!", DialogLayout.Bottom)
            game.showLongText("How Are You?", DialogLayout.Bottom)
            game.showLongText("What Happened To My Car?", DialogLayout.Bottom)
            game.showLongText("Uh... It Got...", DialogLayout.Bottom)
            game.showLongText("Shot! Yeah Shot!", DialogLayout.Bottom)
            game.showLongText("Yep, Shot.", DialogLayout.Bottom)
        } else {
        	
        }
    }
    if (mySprite.overlapsWith(Big_Mouth)) {
        if (RUN == 2) {
            game.showLongText("HELLO", DialogLayout.Bottom)
            game.showLongText("I AM BIG MOUTH", DialogLayout.Bottom)
            game.showLongText("WE WILL BE FRIENDS", DialogLayout.Bottom)
            game.showLongText("YAY FRIEND", DialogLayout.Bottom)
        } else if (RUN == 1) {
            if (BMDED == 0) {
                game.showLongText("HELLO", DialogLayout.Bottom)
                game.showLongText("WHAT ARE YOU DO", DialogLayout.Bottom)
                game.showLongText("NO HURT BIG MOUTH", DialogLayout.Bottom)
                Big_Mouth.setImage(assets.image`myImage8`)
                Sins += 1
                BMDED = 1
            }
        }
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 f 1 f 1 1 1 . . . . . 
        . . . . 1 f 1 f 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 f 1 f 1 . . . . . 
        . . . . 1 1 1 f 1 f 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 f 1 f 1 1 . . . . . 
        . . . . 1 1 f 1 f 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . 1 1 . 1 1 1 . 1 1 . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . 1 1 . 1 1 . . . . . . 
        `)
})
let Cutscene1played = 0
let Snowzone = 0
let BMDED = 0
let Sins = 0
let Officer_Dead = 0
let RUN = 0
let Big_Mouth: Sprite = null
let CAr: Sprite = null
let SNOWYMAN: Sprite = null
let mySprite: Sprite = null
info.setLife(5)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 f 1 f 1 . . . . . 
    . . . . 1 1 1 f 1 f 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . 1 1 . 1 1 1 . 1 1 . . . . 
    . . . 1 1 . 1 1 1 . 1 1 . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 8))
game.setDialogTextColor(1)
game.setDialogCursor(img`
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
scene.cameraFollowSprite(mySprite)
game.setDialogFrame(img`
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    ffffffffffffffffffffffff
    `)
let Box = sprites.create(assets.image`myImage`, SpriteKind.NPC)
tiles.placeOnTile(Box, tiles.getTileLocation(18, 6))
SNOWYMAN = sprites.create(assets.image`myImage2`, SpriteKind.NPC)
tiles.placeOnTile(SNOWYMAN, tiles.getTileLocation(23, 17))
let Bot = sprites.create(assets.image`myImage1`, SpriteKind.NPC)
tiles.placeOnTile(Bot, tiles.getTileLocation(16, 23))
CAr = sprites.create(assets.image`myImage4`, SpriteKind.NPC)
tiles.placeOnTile(CAr, tiles.getTileLocation(4, 21))
let PHONE = sprites.create(assets.image`myImage6`, SpriteKind.THAT)
tiles.placeOnTile(PHONE, tiles.getTileLocation(8, 20))
Big_Mouth = sprites.create(assets.image`myImage7`, SpriteKind.NPC)
tiles.placeOnTile(Big_Mouth, tiles.getTileLocation(7, 36))
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        Snowzone = 1
    } else {
        Snowzone = 0
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
            Snowzone = 1
        } else {
            Snowzone = 0
        }
    }
    if (Snowzone == 1) {
        effects.blizzard.startScreenEffect()
    } else {
        effects.blizzard.endScreenEffect()
    }
    if (mySprite.tileKindAt(TileDirection.Center, sprites.swamp.swampTile16)) {
        controller.moveSprite(mySprite, 60, 60)
    } else {
        controller.moveSprite(mySprite, 85, 85)
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile7`)) {
        if (Cutscene1played < 1) {
            controller.moveSprite(mySprite, 0, 0)
            game.showLongText("*Engaging First Meet Protocol*", DialogLayout.Bottom)
            game.showLongText("Hola! Soy Compua-Dora! Can You Say bienvenidos a 01001000 01101111 01101100 01100101?", DialogLayout.Bottom)
            game.showLongText("Ha! I'm Hilarious! ", DialogLayout.Bottom)
            game.showLongText("But Seriously, Before We Go Any Further,", DialogLayout.Bottom)
            game.showLongText("I Must Know Your Goals.", DialogLayout.Bottom)
            story.showPlayerChoices("I Want To Kill Everyone", "I Want To Be Friends")
            if (story.checkLastAnswer("I Want To Kill Everyone")) {
                game.showLongText("Excuse Me?!?!", DialogLayout.Bottom)
                game.showLongText("Just Kidding. Let's See Some Bloodshed!", DialogLayout.Bottom)
                game.showLongText("See You Around.", DialogLayout.Bottom)
                RUN = 1
            } else if (story.checkLastAnswer("I Want To Be Friends")) {
                game.showLongText("Great! Me Too!", DialogLayout.Bottom)
                game.showLongText("Yep, Sure, Positively!", DialogLayout.Bottom)
                game.showLongText("See You, Buddy.", DialogLayout.Bottom)
                RUN = 2
            }
            Cutscene1played = 1
            Bot.destroy()
        }
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile7`)) {
        Snowzone = 1
    } else {
        Snowzone = 0
    }
})
game.onUpdateInterval(500, function () {
	
})
