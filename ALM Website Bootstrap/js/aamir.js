/* This entire section is for animating the page scroll button */
	$(document).ready(function(){

		$("#arrow-1").animate({

			marginTop: "-14px"

		}, 0);
		$("#arrow-2").animate({

			marginTop: "-14px"
			
		}, 0);
		setTimeout(
		  function() 
		  {
		  	$("#arrow-3").animate({

				top: "0px"
				
			}, 700);
	 	}, 1000);
		

	});

	$("#page-scroll-button").hover(function(){
		$("#arrow-1").animate({

			marginTop: "0px"

		}, 200);
		$("#arrow-2").animate({

			marginTop: "14px"
			
		}, 200);
		$("#arrow-3").animate({

			marginTop: "28px"
			
		}, 200);
	});

	$("#page-scroll-button").mouseleave(function(){
		$("#arrow-1").animate({

			marginTop: "-14px"

		}, 200);
		$("#arrow-2").animate({

			marginTop: "-14px"
			
		}, 200);
		$("#arrow-3").animate({

			marginTop: "0px"
			
		}, 200);
	});
/* end page scroll */
