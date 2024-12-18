var background = function (window) {
  'use strict';
  
  window.opspark = window.opspark || {};
  var draw = window.opspark.draw;
  var createjs = window.createjs;
  
  /*
   * Create a background view for our game application
   */
  window.opspark.makeBackground = function(app,ground) {
      /* Error Checking - DO NOT DELETE */
      if(!app) {
          throw new Error("Invalid app argument");
      }
      if(!ground || typeof(ground.y) == 'undefined') {
          throw new Error("Invalid ground argument");
      }
      
      // useful variables
      var canvasWidth = app.canvas.width;
      var canvasHeight = app.canvas.height;
      var groundY = ground.y;
      
      // container which will be returned
      var background;
      
      //////////////////////////////////////////////////////////////////
      // ANIMATION VARIABLES HERE //////////////////////////////////////
      //////////////////////////////////////////////////////////////////
      // TODO (several):
    
      var walls = [];
      var blocks = [];
      var snow = [];
      var upperWalls = [];
      var upperBlocks = [];
      var block;
      var wall;
      var upperBlock;
      var upperWall;
      var tree;
      var tree1;
      var tree2;
      var snowFlake;

    
      // called at the start of game and whenever the page is resized
      // add objects for display in background. draws each image added to the background once
      function render() {
          background.removeAllChildren();

          // TODO 1:
          // this currently fills the background with an obnoxious yellow;
          // you should modify both the height and color to suit your game
          var backgroundFill = draw.rect(canvasWidth,canvasHeight,'midnightBlue');
          background.addChild(backgroundFill);


          
          // TODO 2: - Add a moon and starfield

          for(var count = 0; count <= 275; count++){
              var circle = draw.circle(Math.random(), "seaShell", "bisque", 2);
              circle.x = canvasWidth * Math.random();
              circle.y = groundY * Math.random();
              background.addChild(circle);
          }

          var moon = draw.bitmap("img/moon.png");
          moon.x = 1100;
          moon.y = 50;
          moon.scaleX = 0.25;
          moon.scaleY = 0.25;
          background.addChild(moon);
  

          
          // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
          
          



          // TODO 3: Part 1 - Add a tree

          for(var i = 0; i < 3; i++){
              upperWall = draw.bitmap("img/wallTextureDark.png");
              upperWall.x = canvasWidth - i * 1080;
              upperWall.y = 187.5;
              upperWall.scaleX = 0.75;
              upperWall.scaleY = 0.75;
              background.addChild(upperWall);
              upperWalls.push(upperWall);
          }
          
          for(var i = 0; i < 10; i++){
              upperBlock = draw.bitmap("img/wallBlockDark.png");
              if(i === 0){upperBlock.x = canvasWidth - 67.5}
                  else{upperBlock.x = upperBlocks[i - 1].x - 67.5 * 2}
              upperBlock.y = 120;
              upperBlock.scaleX = 0.75;
              upperBlock.scaleY = 0.75;
              background.addChild(upperBlock);
              upperBlocks.push(upperBlock);
          }

          for(var i = 0; i < 3; i++){
              wall = draw.bitmap("img/wallTexture.png");
              wall.x = canvasWidth - i * 1080;
              wall.y = groundY;
              wall.scaleX = 0.75;
              wall.scaleY = 0.75;
              background.addChild(wall);
              walls.push(wall);
          }
          
          for(var i = 0; i < 10; i++){
              block = draw.bitmap("img/wallBlock.png");
              if(i === 0){block.x = canvasWidth - 67.5}
                  else{block.x = blocks[i - 1].x - 67.5 * 2}
              block.y = groundY - 67.5;
              block.scaleX = 0.75;
              block.scaleY = 0.75;
              background.addChild(block);
              blocks.push(block);
          }

              tree = draw.bitmap("img/tree1.png");
              tree.x = 400;
              tree.y = 400;
              tree.scaleX = 0.75;
              tree.scaleY = 1;
              background.addChild(tree);

              tree2 = draw.bitmap("img/tree1.png");
              tree2.x = 1000;
              tree2.y = 330;
              tree2.scaleX = 0.75;
              tree2.scaleY = 0.75;
              background.addChild(tree2);

              tree1 = draw.bitmap("img/tree1.png");
              tree1.x = 0;
              tree1.y = 285;
              tree1.scaleX = 1;
              tree1.scaleY = 1;
              background.addChild(tree1);

              for(var count = 0; count <= 275; count++){
                  snowFlake= draw.circle(Math.random(), "white", "snow", 2);
                  snowFlake.x = canvasWidth * Math.random();
                  snowFlake.y = canvasHeight * Math.random();
                  background.addChild(snowFlake);
                  snow.push(snowFlake)
              }



      } // end of render function - DO NOT DELETE
      
      
      // Perform background animation
      // called on each timer "tick" - 60 times per second
      function update() {
          // useful variables
          var canvasWidth = app.canvas.width;
          var canvasHeight = app.canvas.height;
          var groundY = ground.y;
          
          // TODO 3: Part 2 - Move the tree!
          
          for(var i = 0; i < walls.length; i++){
              walls[i].x -= 4;
              if(walls[i].x < -1080){
                  walls[i].x = canvasWidth;
              }
          }

          for(var i = 0; i < blocks.length; i++){
              blocks[i].x -= 4;
              if(blocks[i].x < -67.5){
                  blocks[i].x = canvasWidth;
              }
          }

          for(var i = 0; i < upperWalls.length; i++){
              upperWalls[i].x -= 2;
              if(upperWalls[i].x < -1080){
                  upperWalls[i].x = canvasWidth;
              }
          }

          for(var i = 0; i < upperBlocks.length; i++){
              upperBlocks[i].x -= 2;
              if(upperBlocks[i].x < -67.5){
                  upperBlocks[i].x = canvasWidth;
              }
          }

              tree.x -= 6 ;
              if(tree.x < -600){
                  tree.x = canvasWidth;
              }

              tree1.x -= 9 ;
              if(tree1.x < -800){
                  tree1.x = canvasWidth;
              }

              tree2.x -= 8 ;
              if(tree2.x < -600){
                  tree2.x = canvasWidth;
              }

              for(var i = 0; i < snow.length; i++){
                  snow[i].y += 1;
                  if(snow[i].y > canvasHeight){
                      snow[i].y = 0;
                  }
              }

          // TODO 4: Part 2 - Parallax
          

      } // end of update function - DO NOT DELETE
      
      
      
      /* Make a createjs Container for the background and let it know about the render and upate functions*/
      background = new createjs.Container();
      background.resize = render;
      background.update = update;
      
      /* make the background able to respond to resizing and timer updates*/
      app.addResizeable(background);
      app.addUpdateable(background);
      
      /* render and return the background */
      render();
      return background;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  // here, export any references you need for tests //
  module.exports = background;
}