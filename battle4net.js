/* Code/demo at http://codepen.io/thedod/pen/jzFhg */
((function(){
  var url = 'https://www.battleforthenet.com/embed.html/';
  
  function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value + "; path=/";
  };
  
  function getCookie(c_name){
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
  };
  
  if(getCookie('_dp_b4tn')){  return;  };
  
  (function(window, document, version, callback) {

    var j, d;
    var loaded = false;
    if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";
        script.onload = script.onreadystatechange = function() {
            if (!loaded && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                callback((j = window.jQuery).noConflict(1), loaded = true);
                j(script).remove();
            }
        };
        document.documentElement.childNodes[0].appendChild(script)
    }

  })(window, document, "1.7", function($, jquery_loaded) {

    $(document).ready(function() {
      var speed = 300;
      var over = $('<div>').css({
        zIndex : 9998,
        position : 'fixed',
        top : 0,
        left : 0,
        width: '100%',
        height: 480
      }).attr('id','b4tn').html('<iframe src="https://www.battleforthenet.com/embed.html"'+
              ' frameborder="0" scrolling="no" allowTransparency="true"'+
              ' style="width: 100%; height: 480px;"></iframe>');
      $('body').prepend(over);
      
      var close = $('<a>').css({
        background : "url(https://thedod.github.io/close.png)",
        width: 30,
        height: 30,
        position:'absolute',
        top: 0,
        left : $('#b4tn').width()/2-260,
        cursor : 'pointer'
      }).click(function(){
        setCookie('_dp_b4tn', '1', 1000);
        over.remove();
      });
      over.append(close);
    });
  });
})());
