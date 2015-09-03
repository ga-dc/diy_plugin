// greenify plugin goes here
// see plugin tutorial: http://learn.jquery.com/plugins/basic-plugin-creation/

// IIFE
// Anonymous function that has three arguments.
//   These are "passed" in during the immediate execution, below.
// Provides local scoping and elminating namespace conflicts
(function(window, document, $) {

  // Your library code goes here
  // You can now reference the window, document, and jQuery objects in a local scope
  //   Using the variables you defined above.

  $.fn.greenify = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#bada55",
            backgroundColor: "white"
        }, options );

        // Greenify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });

    };

}(window, document, window.jQuery)); // The global window, document, and jQuery objects are passed into the anonymous function
