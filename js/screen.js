// Screen Emulator

// Purpose: This is a screen emulator. It may be useful for web developers who need to test screen sizes not accessible to them with their current screen size, specifically when considering responsive design.



  $(document).ready (function() {
    resizableBox();
    });
    
// When user submits site, height, and width, site displays in iframe.
	  
	function formSubmit() {
	
		// Setting values from form/user to usable variables.
		var $website = $("#uurl").val();
		var $height = $("#dHeight").val() + "px";
		var $width = $("#dWidth").val() + "px";
		
		// Update the url.
		$("#displayPage").attr("src", $("#uurl").val());
		
		// Update the width and height of the frame.
		$("#displayPage").attr("width", $("#dWidth").val());
		$("#displayPage").attr("height", $("#dHeight").val());
		
	};
	
  
// In a separate tab or page, when user adds site, it displays in a resizable iframe.

  function resizableSubmit() {
	
		// Update the url.
		$("#rDisplay").attr("src", $("#rurl").val());
    };

    
// In a separate tab or page, when a user adds site, 3 iframes all update of different screen sizes
    // mobile
    // tablet
    // desktop

  function multiSubmit() {

		// Update the url.
		$(".multiScreen").attr("src", $("#murl").val());
    };
  
  
// Resizable iframe
    // Creating a resizable iframe only does not work. It must be in a div.
  
  function resizableBox() {
  
    $("#rescaleDiv").resizable({
      alsoResize: '#rDisplay'
    });

    };
    
    
// Hide sections of page based on active tab.
