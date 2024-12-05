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
    function createSawBlade(x, y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25;
      obstacleImage.y = -25;
      sawBladeHitZone.rotationalVelocity = -8;
  }
    createSawBlade(300, 100);
    createSawBlade(500, 600);
    createSawBlade(400, 300);

  function createEnemy(x, y) {
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    enemy.velocityX = -2;
    enemy.rotationalVelocity = -2;
    game.addGameItem(enemy);
    enemy.onPlayerCollision = function () {
        game.changeIntegrity(-10);
    };
    enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
    };
}
enemy.onProjectileCollision = function() {
  game.increaseScore(100);
enemy.fadeOut();
}
 }
 createEnemy(400, groundY - 50)
 createEnemy(600, groundY - 50)
 createEnemy(800, groundY - 50)

 function createReward (x, y){
  
 }

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
      
      for (var i = 0; i < levelObjects.length; i++) {
          var gameObject = levelObjects[i];
          
          if (gameObject.type === "sawblade") {
              createSawBlade(gameObject.x, gameObject.y);
          } else if (gameObject.type === "enemy") {
              createEnemy(gameObject.x, gameObject.y);
          } else if (gameObject.type === "reward") {
              createReward(gameObject.x, gameObject.y);
          } else if (gameObject.type === "marker") {
              createMarker(gameObject.x, gameObject.y); // Add this if you have a createMarker function
          }
      }


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
