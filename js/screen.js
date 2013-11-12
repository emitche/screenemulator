// Screen Emulator

// Purpose: This is a screen emulator. It may be useful for web developers who need to test screen sizes not accessible to them with their current screen size, specifically when considering responsive design.
	  
	function formSubmit() {
	
		// Setting values from form/user to usable variables.
		var $website = $("#url").val();
		var $height = $("#dHeight").val() + "px";
		var $width = $("#dWidth").val() + "px";
		
		// Update the url.
		$("iframe").attr("src", $("#url").val());
		
		// Update the width and height of the frame.
		$("iframe").attr("width", $("#dWidth").val());
		$("iframe").attr("height", $("#dHeight").val());
		
	};