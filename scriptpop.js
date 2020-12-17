$( document ).ready(function() {
  // load the overlay
  $('#myModal').modal({show:true});
  
  var year = 1000*60*60*24*365;
  var expires = new Date((new Date()).valueOf() + year);
  document.cookie = "expires=" + expires.toUTCString();

}); 