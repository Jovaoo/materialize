(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

$(document).ready(function(){
  $('.sidenav').sidenav();
});
      

var options = { "swipeable": true };
var el = document.getElementById('tabs');
var instance = M.Tabs.init(el, options);

var tabs = document.getElementById("tabs-swipe-demo");
var tabsInstance = M.Tabs.getInstance(tabs);
tabsInstance.select("tab2");