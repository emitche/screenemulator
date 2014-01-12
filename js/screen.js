// Screen Emulator

// Purpose: This is a screen emulator. It may be useful for web developers who need to test screen sizes not accessible to them with their current screen size, specifically when considering responsive design.



// Prepare document.

  $(document).ready (function() {
     
    resizableBox();
        
    userSubmit();
    multiSubmit();
    resizableSubmit();

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

        if ($textBox.attr("id") == "murl") {
          multisubmit();
          console.log("You are closer to your goal.");
          return true;
        }
          
        else if (this.attr("id") == "rurl") {
          resizeSubmit();
          console.log("You are closer to your goal.");
          return true;
        }
          
        else if (this.attr("class") == "uInput"){
          userSubmit();
          console.log("You are closer to your goal.");
          return true;
        }
        
        else {
          console.log("Something isn't right.");
          return false;
        }
      }
    
    });
   
  };