      if (z.attr("id") == "murl") {
//      if ($textBox.attr("id", "murl")) {  // Also, not working.
       $(this).css ({
            'background-color': 'green'
          });
      }
      else {
        $(this).css ({
            'background-color': 'yellow'
          });
      }

    });



  function test() {
 
    var $h1 = $("h1");
    
    $h1.mouseenter(function() {
      $(this).css ({
        'color': 'yellow'
      });
    });

/*
   var $textBox = $("input[type='text']");
   var $input = $("input");
    
    $input.focusout(function() {
      
    $(this).css ({
      background-color': 'orange'
     });

    });
*/

  };
  
  /*     
    if $input.attr("id") == "murl" {
       $(this).css ({
            'background-color': 'green'
          });
      }
      else {
        $(this).css ({
            'background-color': 'yellow'
          });
      }
*/


/*
  
  function multiEnter() {
  
   $(this).css({
    'color' : 'blue'
    });
    
   var $textBox = $("#murl");    
    
    $textBox.on('keypress', function(e) {
      if (e.which == 13) {
      $textBox.multiSubmit();
      }
    };
  };
*/


/*
        if ($("input").attr("id") == "murl") {
          multisubmit();
          console.log("You are closer to your goal.");
          return true;
        }
          
        else if ($("input").attr("id") == "rurl") {
          resizeSubmit();
          console.log("You are closer to your goal.");
          return true;
        }
          
        else if ($("input").attr("class") == "uInput"){
          userSubmit();
          console.log("You are closer to your goal.");
          return true;
        }
        
        else {
          console.log("Something isn't right.");
          return false;
        }
*/

/*

        if (this.is('#murl')) {
          multisubmit();
        }
          
        else if (this.is('#rurl')) {
          resizeSubmit();
        }
          
        else if (this.is('.uInput')){
          userSubmit();
        }
*/
/*     
        if $(id == 'murl') {
          multisubmit();
          }
          
        else if (id == 'rurl') {
          resizeSubmit();
          }
          
        else {
          userSubmit();
          }
*/

/*
        [id="murl"]
        [id="rurl"]
        [class^="uInput"]
        
        if (id == 'murl') {
          multisubmit();
          }
          
        else if (id == 'rurl') {
          resizeSubmit();
          }
          
        else {
          userSubmit();
          }
        
        
 
/* 
  function overrideEnter() {
  
    var $textBox = $("input[type='text']");
    
    $textBox.on('keypress', function(e) {
    if (e.which == 13) {
      e.preventDefault();
      
      if (input[class] === 'uInput') {
          
      else if (input[id] === 'murl') {
         multiSubmit();
      }
      else if (input[id] === 
      return false;
    }
   });
  };
*/

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
    