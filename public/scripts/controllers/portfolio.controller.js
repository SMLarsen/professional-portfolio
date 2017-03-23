/*jshint esversion: 6 */
angular.module('app').controller('PortfolioController', ['$scope', '$window', '$mdDialog', function($scope, $window, $mdDialog) {
    console.log("Portfolio Controller Started");
    let self = this;
    self.showFAB = true;

    // self.goToTop = function() {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 'fast');
    // };
    //

    //===================================================================

    const techSpecs = [
        // Travelogger
        '<ul><li>html</li><li>css</li><li>JavaScript</li><li>jQuery</li><li>Bootstrap</li><li>Firebase (authentication)</li><li>Google Maps API (with ng-maps)</li><li>node.js</li><li>Express</li><li>AngularJS</li><li>MongoDB</li><li>SASS</li><li>xeditable library (edit in place)</li></ul>',
        // Travelogger Material
        '<ul><li>html</li><li>css</li><li>JavaScript (ES2015)</li><li>jQuery</li><li>Bootstrap</li><li>Firebase (authentication)</li><li>Google Maps API (with ng-maps)</li><li>Google Places API (with ng-maps)</li><li>node.js</li><li>Express</li><li>AngularJS</li><li>MongoDB</li><li>SASS</li></ul>',
        // Photo App
        '<ul><li>html</li><li>css</li><li>JavaScript (ES2015)</li><li>jQuery</li><li>node.js</li><li>Express</li><li>AngularJS</li><li>Angular-Material</li><li>PostgreSQL</li><li>Amazon Web Services SDK</li><li>AWS - S3, IAM, Cogito</li></ul>',
        // Fun Things
        '<ul><li>html</li><li>css</li><li>JavaScript (ES2015)</li><li>node.js</li><li>Express</li><li>AngularJS</li><li>MongoDB</li><li>Angular Material</li></ul>',
        // Travel Blog
        '<ul><li>Wordpress</li><li>Theme: Dazzling by colorlib</li><li>JetPack</li><li>Yoast SEO</li><li>Anti-spam</li><li>Local Time Clock</li><li>Mojo Marketplace</li><li>Ultimate Tag Cloud</li><li>W3 Total Cache</li></ul>',
        // Block Picker
        '<ul><li>html</li><li>css</li><li>JavaScript</li><li>jQuery</li><li>animate library</li></ul>',
        // Calculator
        '<ul><li>html</li><li>css</li><li>JavaScript</li><li>jQuery</li><li>Bootstrap</li><li>node.js</li><li>Express</li></ul>'
    ];

    const assignments = [
      '<p>You will be creating a little "pick the block" game with HTML, CSS, and jQuery!<p>On document load, append four (or more!) divs on to the DOM with jQuery, each colored with a different color. Each div needs to know which color it is.</p><p>Prompt the player to pick one of the color blocks you created at random.</p><p>When the player picks the correct color block, prompt the player to pick another block randomly and let them keep playing.</p><h5>Hard Mode</h5><p>What if we want to add a new block (or remove one)? Did you hard-code your blocks into the HTML or logic? Change your code to make it easy to add or change the number and color of blocks shown. Hint: One way to do this is to use an array to store the colors and base all your code off of this array.</p><h5>Pro Mode</h5><p>When the player clicks on the correct block, change the color of that block for an added visual cue. Then change it back after 2 seconds and resume the game. You will need to use the built in setTimeout() function for the timing. This function waits a given amount of time and then calls a function you specify.</p><h5>Super Fun Mode</h5><p>Add some jQuery effects or animations to your game! There are quite a few built in. See the Docs!</p>',
      '<p>We are going to be building a calculator application using jQuery, Node, and Express, all hosted on Heroku!</p><h5>Server Logic and Client Functionality</h5><p>IMPORTANT: The logic for the calculator needs to be housed on the Server.</p><p>The Client will take in the values (via 2 input fields) and the type of mathematical operation (selected using a button on the DOM). Each numerical value and the mathematical operator type will be bundled up in an object and then sent to the server via a POST request.</p><p>Once the Server receives it, create the logic to compute the numbers in 1 of 4 different ways: The server should be able to handle (1) addition, (2) subtraction, (3) multiplication, and (4) division. Once the result of the mathematical operation is determined, it should be sent back down to the Client where it will be displayed on the DOM.</p><p>Finally, build a clear button that resets the whole experience.</p><h5>HARD MODE</h5><p>Convert the input fields for the two values to buttons. This experience would allow the user to:</p><ul><li>click on a numerical button</li><li>click on a mathematical operator</li><li>click on a numerical button</li><li>click on an equal button that sends all of the information to the server</li></ul><h5>PRO MODE</h5><p>Style the whole experience using Bootstrap to resemble the design of a physical calculator. Then, include decimal points in your number logic. Finally, convert your logic to have the Client handle which mathematical operation is run. Once it determines this, it will use that to change the URL or the POST request to pair with a Server route that handles that type of mathematical operation.</p>'
    ];


    //===================================================================

    self.showDemo = function(ev) {
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Screenshot of S3 Demo App')
            .htmlContent('<img src="https://s3.amazonaws.com/app-documentation/my-photo-app-original.png" alt="original S3 demo">')
            .ariaLabel('Photo Demo Dialog')
            .ok('OK')
            .targetEvent(ev)
        );
    };

    self.showSpecs = function(ev, index) {
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Technologies Used')
            .htmlContent(techSpecs[index])
            .ariaLabel('Technologies Used Dialog')
            .ok('OK')
            .targetEvent(ev)
        );
    };

    self.showAssignment = function(ev, index) {
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Assignment')
            .htmlContent(assignments[index])
            .ariaLabel('Assignment Dialog')
            .ok('OK')
            .targetEvent(ev)
        );
    };

}]);
