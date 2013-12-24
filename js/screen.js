// Screen Emulator

// Purpose: This is a screen emulator. It may be useful for web developers who need to test screen sizes not accessible to them with their current screen size, specifically when considering responsive design.



// Prepare document.

  $(document).ready (function() {
    resizableBox();
    overrideEnter();
    });

//  When a user adds site, 3 iframes update with different screen sizes.

  function multiSubmit() {

		// Update the url.
		$(".multiScreen").attr("src", $("#murl").val());
    };

    
// When user adds site, it displays in a resizable iframe.

  function resizableSubmit() {
	
		// Update the url.
		$("#rDisplay").attr("src", $("#rurl").val());
    };
 
 
// When user submits site, height, and width, site displays in iframe.
	  
	function formSubmit() {
		
		// Update the url.
		$("#displayPage").attr("src", $("#uurl").val());
		
		// Update the width and height of the frame.
		$("#displayPage").attr("width", $("#dWidth").val() + "px");
		$("#displayPage").attr("height", $("#dHeight").val() + "px");
		
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