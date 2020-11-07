$("document").ready(function() {
  // =========================================================================
  //             SPINNER CONTROL
  // =========================================================================

  // BASIC SPINNER
  $("#spinnerCtrl1").spinner();
  $("#spinnerCtrl1").spinner("value", 1);

  // SPINNER MIN, max
    $("#spinnerCtrl2").spinner({
      min: 0,
      max: 500,
      step: 10, // step and page multiply 10x10 = 100 when up and down arrow.
      page: 10,
       icons: { down: "custom-down-icon", up: "custom-up-icon" },
      // Create Event Handler

      spin: function(evt, elem) {
        if(evt.metaKey) // metaKey mens window key in keybord
        return false; // if window key is pressed[hold] it is not increase the value.
      }

    });
    $("#spinnerCtrl2").spinner("value", 50);

    // =========================================================================
    //             SLIDER CONTROL
    // =========================================================================

    // Basic slider
    $("#sliderControl1").slider({
      	animate: "fast"
    });

    // Slider 2
    $("#sliderControl2").slider({
        value: 75, // initial value slider should be.
        min: 0,
        max: 200,
        step: 25,
        slide: function(evt, elem) {
            $("#amt").text(elem.value);
        },
        start: function(evt, elem) {
            $("#amt").addClass("heavytext")
        },
        stop: function(evt, elem) {
            $("#amt").removeClass("heavytext")
        }
    });
    $("#amt").text($("#sliderControl2").slider("value"));

    // Slider 3 Range slider
    $("#sliderControl3").slider({
        range: true,
        min: 500,
        max: 5000,
        values: [1500, 3000],
        slide: function(evt, elem) {
            $("#sl3Val1").text(elem.values[0]);
            $("#sl3Val2").text(elem.values[1]);
        }
    });
    $("#sl3Val1").text($("#sliderControl3").slider("values", 0));
    $("#sl3Val2").text($("#sliderControl3").slider("values", 1));

    // =========================================================================
    //             MENU CONTROL
    // =========================================================================

    $("#selmenu1").selectmenu();
    $("#selmenu2").selectmenu();
    $("#selmenu3").selectmenu().selectmenu("menuWidget").addClass("fixedHeight");

    // =========================================================================
    //             ACCORDIAN CONTROL
    // =========================================================================

     // build a basic accordion control
    // $("#accordionCtrl").accordion();

     // allow all sections to collapse. By default, the
     // Accordion always keeps at least one section open.
     // You can override this behavior to enable all the
     // sections to be closed.
     // also, set an option to toggle the headers by a hover event
     $("#accordionCtrl").accordion( {
         collapsible: true,
         active: false,
         event: "click"
         // event: "click mouseover"
     });

     // customize the icons
     // $("#accordionCtrl").accordion({
     //     icons: {
     //         header: "ui-icon-circle-triangle-e",
     //         activeHeader: "ui-icon-circle-triangle-s"
     //     }
     // });

     // ========================================================================
     //             PROGRESSBAR CONTROL
     // ========================================================================

     // instantiate a basic spinner control
     $("#progress1").progressbar({
         value: 40
     });

     $("#progress2").progressbar({
          value: 70,
          complete: function(evt, elem) {
              alert("Download complete!");
          }
      });
      $("#btnIncr").click(function() {
          var elem =  $("#progress2");
          var val = elem.progressbar( "value" ) || 0;
          elem.progressbar( "value", val + 10 );
          return false;
      });
      $("#progress3").progressbar({
          value: false
      });

     // ========================================================================
     //             DATEPICKER CONTROL
     // ========================================================================

     $("#datepick1").datepicker({
       // Adding next prev icon
       buttonText: "<i class='fa fa-calendar'></i>",
      // start with monday
       firstDay: 1,
       // Add to buttons
       showButtonPanel: true,
       currentText: "Today",
       closeText: "Close",
       // Correspond the format of the date
       constrainInput: true,
       // Save the 3 days in future
       defaultDate: 3,
       // Chose date within certain ranges
       minDate: 0,
       maxDate: "+3M", // 3M means 3 months.
       // Add popup menu choose an year
       changeMonth: true,
       changeYear: true,
       // Show one calender
       numberOfMonths: 1,
       // Disabled the weekand
       beforeShowDay: onBeforeShowDay
     });

     function onBeforeShowDay(theDate) {
         // Day 0 is Sunday, 6 is Saturday
         if (theDate.getDay() == 0 || theDate.getDay() == 6)
             return [false, "", "Weekends disabled"];

         return [true, ""];
     }

     $("#datepick2").datepicker({
       // Show one calender
       numberOfMonths: 3
     });

});




























