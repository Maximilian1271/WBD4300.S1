// Make background slide in index.html
// Try using leftarrow/rightarrow!
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
				if($(this).data({direction: "left"})!=undefined){		//data-direction verwendet um zwischen links und rechts zu unterscheiden
					// alert("left")
					slideleft()
				}
				else if($(this).data({direction: "right"})){			//data-direction verwendet um zwischen links und rechts zu unterscheiden
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
		$(".h2__1").children().hide()
		var rand=Math.floor(Math.random() * ($(".h2__1").children().last().index()))
		console.log(rand)
		document.cookie="previousrand="+rand+";"
		if(document.cookie.split("=").splice(1)==rand){
			rand=Math.floor(Math.random() * ($(".h2__1").children().last().index()))
			console.log(rand)
		}
		else{
			$(".h2__1").children().eq(rand).show()
		}
		
	})
})(jQuery)