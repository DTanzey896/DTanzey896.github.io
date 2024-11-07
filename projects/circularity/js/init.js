var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
    
    window.opspark.makeGame = function() {
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle;
        var circles = [];

        // TODO 2 : Create a function that draws a circle 
        function drawCircle() { 
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
            physikz.addRandomVelocity(circle, canvas);
            view.addChild(circle);
            circles.push(circle);
        }

        // TODO 3 / 7 : Call the drawCircle() function 100 times
        for (let i = 0; i < 100; i++) {
            drawCircle(); // Call the drawCircle() function 100 times
        }
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // Loop through all circles and update their positions
            for (let i = 0; i < circles.length; i++) {
                physikz.updatePosition(circles[i]); // Move each circle
                game.checkCirclePosition(circles[i]); // Ensure each circle stays within bounds
            }
        }

        // TODO 6 : Loop from all sides
        game.checkCirclePosition = function(circle) {
            // Check if the circle is out of bounds and loop it back on the screen

            // Right side
            if (circle.x + circle.radius > canvas.width) {
                circle.x = 0; // Place circle on the left side
            }

            // Left side
            if (circle.x - circle.radius < 0) {
                circle.x = canvas.width; // Place circle on the right side
            }

            // Bottom side
            if (circle.y + circle.radius > canvas.height) {
                circle.y = 0; // Place circle on the top side
            }

            // Top side
            if (circle.y - circle.radius < 0) {
                circle.y = canvas.height; // Place circle on the bottom side
            }
        }

        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
