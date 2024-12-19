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
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = 
    game.createObstacle(
      hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = 410;
      sawBladeHitZone.y = 200;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25
      obstacleImage.y = -25


      function createMarker(x, y) {
        var marker = game.createGameItem("marker", 32);
        var flag = draw.bitmap("img/street-light.png");
        flag.x = -32;
        flag.y = -32;
        marker.addChild(flag);
        marker.x = x;
        marker.y = y;
        game.addGameItem(marker);
        marker.velocityX = -2;
  
        marker.onPlayerCollision = function () {
          marker.fadeOut();
          startLevel();
        };
        marker.onProjectileCollision = function () {
          marker.fadeOut();
          startLevel();
        };
      }
      
      function createReward(x, y) {
        var reward = game.createGameItem("reward", 32);
        var gem = draw.bitmap("img/reward.png");
        gem.x = -32;
        gem.y = -32;
        reward.addChild(gem);
        reward.x = x;
        reward.y = y;
        game.addGameItem(reward);
        reward.velocityX = -2;
        reward.rotationalVelocity = 4;
  
        reward.onPlayerCollision = function () {
          game.changeIntegrity(25);
          game.increaseScore(300);
          reward.fadeOut();
        };
      }
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