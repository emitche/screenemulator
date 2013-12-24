﻿// Screen Emulator

// Purpose: This is a screen emulator. It may be useful for web developers who need to test screen sizes not accessible to them with their current screen size, specifically when considering responsive design.



// Prepare document.

  $(document).ready (function() {
    resizableBox();
    overrideEnter();
    });
 
 
// When user submits site, height, and width, site displays in iframe.
	  
	function formSubmit() {
  
		// Setting values from form/user to usable variables.
      // var $website = $("#uurl").val();
      // var $height = $("#dHeight").val() + "px";
      // var $width = $("#dWidth").val() + "px";
		
		// Update the url.
		$("#displayPage").attr("src", $("#uurl").val());
		
		// Update the width and height of the frame.
		$("#displayPage").attr("width", $("#dWidth").val() + "px");
		$("#displayPage").attr("height", $("#dHeight").val() + "px");
		
	};

// In a separate section, when a user adds site, 3 iframes all update of different set screen sizes.

  function multiSubmit() {

		// Update the url.
		$(".multiScreen").attr("src", $("#murl").val());
    };

    
// In a separate section, when user adds site, it displays in a resizable iframe.

  function resizableSubmit() {
	
		// Update the url.
		$("#rDisplay").attr("src", $("#rurl").val());
    };
 
 
// Create resizable iframe.
  
  function resizableBox() {
  
    $("#rescaleDiv").resizable({
      alsoResize: '#rDisplay'
    });
    };
    
    
 // Handle enter key.
 
  // If enter is pushed, override default behavior.
  
  function overrideEnter() {
    
    $("input[type='text']").on('keypress', function(e) {
    if (e.which == 13) {
      e.preventDefault();
    }
   });
  };
  
  // If enter is pushed, perform function that would be done when pushing update buttons.
  
  // When in __ text input, when enter is pressed (13), perform respective function.
  
    // $(#murl).keypress(function() {
    //    multisubmit();
    //    });