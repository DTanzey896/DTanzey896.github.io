var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    var hitZoneSize = 15;
    var damageFromObstacle = 25;

    function createBat(x,y){
      var batHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      batHitZone.x = x;
      batHitZone.y = y;
      game.addGameItem(batHitZone);

      var batImage = draw.bitmap("img/bat.png");
      batImage.scaleX = 0.35;
      batImage.scaleY = 0.35;
      batImage.x = -40;
      batImage.y = -40;
      batHitZone.addChild(batImage);
    }

    createBat(500,291);
    createBat(900,220);
    createBat(1500,220);
    createBat(1900,291);
    createBat(2500,220);
    createBat(2900,291);
    createBat(3700,291);
    createBat(4600,220);

    function createKnight(x,speed){
      var enemy = game.createGameItem("enemy", 35);
      enemy.x = x;
      enemy.y = 260;
      enemy.velocityX = -speed;
      game.addGameItem(enemy);

      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-25);
      };

      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();

      }

      var knight = draw.bitmap("img/knight.png");
      knight.x = 120;
      knight.y = -85;
      knight.scaleX = -0.2;
      knight.scaleY = 0.2;
      enemy.addChild(knight);
    }

    createKnight(800,6);
    createKnight(1500,7);
    createKnight(2200,7);
    createKnight(2900,6);
    createKnight(3700,5);
    createKnight(4400,6);
    createKnight(5700,7);
    createKnight(6600,5);
    createKnight(7100,7);

    function createCoin(x,y){
      var reward = game.createGameItem("reward", 25);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);

      reward.onPlayerCollision = function () {
        game.changeIntegrity(+25);
        reward.fadeOut();
      };

      reward.onProjectileCollision = function () {
        game.increaseScore(100);
        reward.fadeOut();

      }

      var coin = draw.bitmap("img/coin.png");
      coin.x = 0
      coin.y = 0
      coin.scaleX = 1
      coin.scaleY = 1
      enemy.addChild(coin);
    }

    createCoin(600,400);
    

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}