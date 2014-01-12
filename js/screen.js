﻿// Screen Emulator

// Purpose: This is a screen emulator. It may be useful for web developers who need to test screen sizes not accessible to them with their current screen size, specifically when considering responsive design.



// Prepare document.

  $(document).ready (function() {
        
    resizableBox();
    overrideEnter();
    
//    test();
    
  });
  
  
  function test() {
  
    var $h1 = $("h1");
    
    $h1.mouseenter(function() {
      $(this).css ({
        'color': 'yellow'
      });
    });
  };
    
// When user submits site, height, and width, site displays in iframe.
	  
	function userSubmit() {
		
    var $uurl = $("#uurl").val();
    
    var $uwidth = $("#dWidth").val() + "px";
    var $uheight = $("#dHeight").val() + "px";
    
		// Update the url.
		$("#displayPage").attr("src", $uurl);
		
		// Update the width and height of the frame.
		$("#displayPage").attr("width", $uwidth);
		$("#displayPage").attr("height", $uheight);
		
	};

// In a separate section, when a user adds site, 3 iframes all update of different set screen sizes.

  function multiSubmit() {
  
    var $murl = $("#murl").val();

		// Update the url.
		$(".multiScreen").attr("src", $murl);
  
  };

    
// In a separate section, when user adds site, it displays in a resizable iframe.

  function resizableSubmit() {
  
    var $rurl = $("#rurl").val();
	
		// Update the url.
		$("#rDisplay").attr("src", $rurl);
  
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
  
    var $textBox = $("input[type='text']");
    
    $textBox.on('keypress', function(e) {
    if (e.which == 13) {
      e.preventDefault();
      multiSubmit();
      return false;
    }
   });
  };
  
/* 
     $("input").bind("keydown", function(event) {
      // track enter key
      var keycode = (event.keyCode ? event.keyCode : (event.which ? event.which : event.charCode));
      if (keycode == 13) { // keycode for enter key
         // force the 'Enter Key' to implicitly click the Update button
         document.getElementById('defaultActionButton').click();
         return false;
      } else  {
         return true;
      }
   }); // end of function
*/
  
  // When enter is pushed in a textbox, perform the respective function.
  
    // The DRY option:
      // Use a loop.
      // Loop may access the id of the form and use the respective function form submit.
      
    // The lengthier, easier option:
      // Spell out what should happen for each.
      
      // If text box id gets murl, multiSubmit()
      
   // #murl.multiSubmit();
    
      
      // If text box id gets rurl, resizableSumit()
      
      // If text box class gets uInput, userSubmit()
    
    
   //   input[class='uInput'].
      
   //   input[id^='u'].
    