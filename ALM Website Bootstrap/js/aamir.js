$(document).ready(function(){

	$("#arrow-1").animate({

		marginTop: "-14px"

	}, 1000);
	$("#arrow-2").animate({

		marginTop: "-14px"
		
	}, 1000);
	$("#arrow-3").animate({

		marginTop: "-14px"
		
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

		marginTop: "-14px"
		
	}, 200);
});

