var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload(){
game.load.image('bob', '/img/acryl_bobablast.png');
game.load.image('cod', '/img/cod.jpg');
game.load.image('at', '/img/alpha-test.png');
game.load.atlasJSONHash('bot', 'img/running_bot.png', 'img/running_bot.json');
}
var s1, s2, s3;

function create(){
  var bot = game.add.sprite(400, 400, 'bot');
  bot.animations.add('run');
  bot.animations.play('run', 15, true);
 s1 = game.add.sprite(0, 0, 'bob');
s1.anchor.set(0.5)
 s2 = game.add.sprite(300,0, 'cod');
    s2.scale.setTo(0.5);
    s3 = game.add.sprite(0, 200, 'at');
    s3.scale.setTo(5);

game.physics.enable(s1, Phaser.Physics.ARCADE);
game.physics.enable(s2, Phaser.Physics.ARCADE);
game.physics.enable(s3, Phaser.Physics.ARCADE);
game.physics.enable(bot, Phaser.Physics.ARCADE);

s1.body.velocity.x=100;
//s2.body.velocity.y=50;
s3.body.velocity.x= 200;
bot.body.velocity.x= -200;

var text = "- phaser -\n with a sprinkle of \n pixi dust.";
var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
game.add.text(game.world.centerX-300, 0, text, style);

    var tween = game.add.tween(s2);
    tween.to({ x: 600 }, 2000);
    tween.start();

    var bottween = game.add.tween(bot);
    bottween.to({ x: 0 }, 2000);
    bottween.start();
}

function update(){
   if (game.physics.arcade.distanceToPointer(s1, game.input.activePointer) > 8)
    {
        game.physics.arcade.moveToPointer(s1, 300);
    }
    else
    {
        s1.body.velocity.set(0);
    }
}
