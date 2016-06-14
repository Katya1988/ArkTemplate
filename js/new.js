$(document).ready(function(){
      $('.slider').slider();
      $('.parallax').parallax();
      $('.modal-trigger').leanModal();
      $(".button-collapse").sideNav();
      $("#up").hide();
		$(window).scroll(function() {
    	var height = $(window).scrollTop();
    	if(height  > $("#about").offset().top) {
        $("#up").show();
   		 }
	
		else {
		$("#up").hide();
		}
	});	

    $( "#up" ).click(function( event ) {
      event.preventDefault();
      $("html, body").animate({scrollTop: 0}, "slow");
    });
    // validation of forms

  // contact form
    $("#cont-form").validate({

       rules:{

            firstname:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },

            email:{
                required: true,
                minlength: 6,
                email: true,
                
            },
       },

       messages:{

            firstname:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 2 символа",
                maxlength: "Максимальное число символов - 16",
            },

            email:{
                required: "Это поле обязательно для заполнения",
                minlength: "Email должен быть минимум 6 символа",
                email: "Неверный формат адреса",
                
            },

       }

    });


    
});


