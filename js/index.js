(function() {

  window.onload = function() {
    $('body').removeClass('hide');

    $('#window-1')
      .parallax({
        imageSrc: 'imgs/developer.jpg'
      });

    $('#window-2')
      .parallax({
        imageSrc: 'imgs/code.jpg'
      });

    $('#window-3')
      .parallax({
        imageSrc: 'imgs/webapp.jpg'
      });
  };

}());