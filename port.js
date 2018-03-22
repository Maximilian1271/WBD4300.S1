//used to build "overlay" in 3.html with correct images
(function($, undefined){
	$(function(){
		$(".hamclose").click(function(){									//remove .stage children
			$(this).parent().fadeOut()
			$(".stage").children().remove()
			// $(".overlay>img[alt=\"portrait\"]").remove()
		})
			var contentpa="<p class=\"overlaycontent\" data-name=\"Ola Hvermannsen\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
			var contentpb="<p class=\"overlaycontent\" data-name=\"Maria Svenne\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
			var contentpc="<p class=\"overlaycontent\" data-name=\"Morten Menigmand\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
		$(".port").find("div").each(function(){								//find correct image and mount in .stage
			$(this).click(function(){
				$(".hamclose").parent().fadeIn()
				$(".stage").append("<img>").find("img").attr("src", $(this).find("img").attr("src")).attr("alt", "portrait")
				var curclick=$(this).find("img").attr("src")
				console.log(curclick)
				$(".stage").after("<div class=\"substage\"></div>").before("<div class=\"substage\"></div>")
				// console.log($(this).find("img").attr("alt"))
				switch($(this).find("img").attr("alt")){
					case "Ola Hvermannsen" :
					$(".stage").find("img").after(contentpa)
					break
					case "Maria Svenne":
					$(".stage").find("img").after(contentpb)
					break
					case "Morten Menigmand":
					$(".stage").find("img").after(contentpc)
					break
				}
			})
			
			// $(this).click(function(){console.log($(this))})
		})
		$(".slider").find("ul>li").each(function(){
			$(this).click(function(){
				if ($(this).data({direction: "left"})) {
				}
			})
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