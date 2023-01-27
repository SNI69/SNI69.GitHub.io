  var urlObj = new window.URL(window.location.href);
  var url = "https://ejvd3326248pklq0mtj313irgbc2vsrb-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/s035r8h4/1v1.xml";
  if (url) {
    var win;
    document.querySelector('div.1v1').onclick = function() {
      {
        win = window.open();
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        var iframe = win.document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.margin = '0';
        iframe.src = url;
        win.document.body.appendChild(iframe);

      }
    }
  }
