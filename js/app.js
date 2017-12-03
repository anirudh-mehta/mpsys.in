(function($) {
  "use strict"; // Start of use strict

  var startYear = 1993;

  $('#years').text((new Date().getFullYear() - startYear) + $('#years').text());

})(jQuery); // End of use strict
