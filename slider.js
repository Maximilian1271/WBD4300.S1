(function($, undefined){
	$(function(){
		function slideleft(){
				$(".bgwrapper").animate({left: -($(".bgwrapper").find("div").first().width())}, function(){
						$(".bgwrapper").find("div").last().parent().after().append($(".bgwrapper").find("div").first())
						$(".bgwrapper").css("left", 0)
					})
			}
		function slideright(){
			$(".bgwrapper").prepend($(".bgwrapper").find("div").last()).css("left",-($(".bgwrapper").find("div").first().width()))
			$(".bgwrapper").animate({left: 0})
		}

		$(".slider").find("ul>li").each(function(){
			$(this).click(function(){
				if($(this).attr("left")!=undefined){
					// alert("left")
					slideleft()
				}
				else{
					slideright()
					//alert("right")
				}
			})
		})
		$("html").on("keydown", function(_e){
			// console.log(_e.key)
			switch(_e.key){
				case "ArrowLeft":
				slideleft()
				break
				case "ArrowRight":
				slideright()
				break
			}
		})
		setInterval(function(){slideleft()},10000)
	})
})(jQuery)