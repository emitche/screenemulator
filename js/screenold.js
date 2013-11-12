// Make an app that displays a website based on selected screen size.

// Purpose: The purpose of the app is to be a screen emulator. It's use is for web developers who need to test screen sizes not accessible to them with their current screen sizes.

// TESTS FOR CORRECT FUNCTIONALITY
  // Test 1: The app is working if the iframe displays the correct site.
  // Test 2: The app is working if the iframe displays the correct width.
  // Test 3: The app is working if the iframe displays the correct height.
  // Test 4: The app is working if the iframe is updating each time the user hits submit with the correct url, height, and width.
  
  
// EXTRAS
  // User can select pixels or em for width.
  // 

// User input: website
// User input: height, width for resolution


// John's advice: Click event on button, id on each field

/*
// Website as a string
 
	var website = $("#url").val();
	console.log(website);
 
 // Height and width in pixels

	var height = $("#dHeight").val();
	var width = $("#dWidth").val();
*/

  // Additional functionality 
  
    // Users can select pixels or ems (base 16px) for their measurement. 
      // There should be some conversion
	  
	function formSubmit() {
	var website = $("#url").val();
	var height = $("#dHeight").val();
	var width = $("#dWidth").val();
	console.log("This successfully prints to the console.");
	console.log(width + ", " + height + ", " + website);
	};

/*	
	var test = function formSubmit() {
	console.log(width + ", " + height + ", " + website)
	};

$(document).ready(function() {
	$("button").click(function() {
	$(this).css({"background-color":"blue"})
	});
	});
*/
	
// The src of the iframe will be set to $("#userInput input[name=url]").val()
// The width of the iframe will be set to $("#userInput input[name=displayWidth]").val()
// The height of the iframe will be set to $("#userInput input[name=displayHeight]").val()


/*

// onClick of submit, the script will do the following:

// 1. Grab user information from form.

    function formSubmit = console.log(width + ", " + height + ", " + website);

	formSubmit();
    // This can be specified with a loop using the attr possibly.
    // for each loop.

      // Grab the height of the iframe.
      // Grab the width of the iframe.
      // Grab the url of the iframe.
  
// 2. Add appropriate unit to the end of height and width.

/*    function append(height, width) {
      width = width + "px";
      height = height + "px";
    };'
*/

/*	
	function appendUnit(i) {
		i = i + "px";
		}
	
	appendUnit(height);
	appendUnit(width);
	
	formSubmit();
 */ 
 
// 3. Insert width, height, and url values into iframe.

// 4. Reload iframe.
