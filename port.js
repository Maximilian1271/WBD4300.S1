//used to build "overlay" in 3.html with correct images
(function($, undefined){
	$(function(){
		$(".hamclose").click(function(){									//remove .stage children
			$(this).parent().fadeOut()
			$(".stage").children().remove()
			// $(".overlay>img[alt=\"portrait\"]").remove()
		})
		var content1="<p>"
		$(".port").find("div").each(function(){								//find correct image and mount in .stage
			$(this).click(function(){
				$(".hamclose").parent().fadeIn()
				$(".stage").append("<img>").find("img").attr("src", $(this).find("img").attr("src")).attr("alt", "portrait")
			})
			
			// $(this).click(function(){console.log($(this))})
		})
		$("html").on("keyup", function(_e){
			// console.log(_e.key)
			switch (_e.key) {
				case "Escape":
					$(".hamclose").trigger("click")
				break;
			}
		})
	})
})(jQuery)