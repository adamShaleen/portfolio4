$("#face").click(function() {
  	$(this).addClass('spin').one("animationend", function() {
    	$(this).removeClass('spin');
    });
  });
