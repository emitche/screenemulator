// Make an app that displays a website based on selected screen size.

// Purpose: The purpose of the app is to be a screen emulator. It's use is for web developers who need to test screen sizes not accessible to them with their current screen sizes.

// TESTS FOR CORRECT FUNCTIONALITY
  // Test 1: The app is working if the iframe displays the correct site. COMPLETE
  // Test 2: The app is working if the iframe displays the correct width. COMPLETE
  // Test 3: The app is working if the iframe displays the correct height. COMPLETE
  // Test 4: The app is working if the iframe is updating each time the user hits submit with the correct url, height, and width. COMPLETE
  
  
// EXTRAS
  // User can select pixels or em for width.
  // 

// User input: website
// User input: height, width for resolution


// John's advice: Click event on button, id on each field COMPLETE


/* Steps
	1. Get the JS to recognize url, height, width values. DONE!
	2. Place url, height, width values into iframe.	Use css() to change width, height, and src. DONE!
	3. Update iframe with new values. DONE!
			
*/

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


  // NEXT STEPS
	// Change visual appearance of site.
	// Consider whether or not this should be responsive, whether the iframe should fit inside someone's browser or not.
	  
	function formSubmit() {
	
		// Setting values from form/user to usable variables.
		
		var website = $("#url").val();
		var height = $("#dHeight").val() + "px";
		var width = $("#dWidth").val() + "px";
		
		// Test to make sure values are correct.
		
		console.log("This successfully prints to the console.");
		console.log(width + ", " + height + ", " + website);
		
		// This successfully updates the size of the iframe.
		
/*		$("iframe").css({
			"width": width,
			"height": height
		});
*/
		
		// This does not successfully update the url.
		$("iframe").attr("src", $("#url").val());
		
		// These successfully update size of frame.
		$("iframe").attr("width", $("#dWidth").val());
		$("iframe").attr("height", $("#dHeight").val());
		
	};

// Form may be overriding what I want things to do. Look into submit button versus regular button.
	

	
/*	function $.ajax({
			$("iframe").css({
			"width": $width,
			"height": $height
			});
		});
*/
		
// updateFrame does not work yet. The reason may be that pixels still have not been added.

/*
	var updateFrame = function updateIframe(fheight, fwidth, furl) {
		$("iframe").css({
			"width":width,
			"height":height
			});
		};
*/
	
/*	  
	function formSubmit() {
		var website = $("#url").val();
		var height = $("#dHeight").val();
		var width = $("#dWidth").val();
		
		console.log("This successfully prints to the console.");
		console.log(width + ", " + height + ", " + website);
		
		append(height, width);
		updateFrame();
		
		console.log(width + ", " + height + ", " + website);
	};

	function append(height, width) {
		  width = width + "px";
		  height = height + "px";
		};
*/	
	
// updateFrame does not work yet. The reason may be that pixels still have not been added.

/*
	var updateFrame = function updateIframe(fheight, fwidth, furl) {
		$("iframe").css({
			"width":width,
			"height":height
			});
		};
	
*/	
		
/*	
	function updateIframe() {
		$("iframe").css
		};
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

function append(height, width) {
      width = width + "px";
      height = height + "px";
    };'

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
