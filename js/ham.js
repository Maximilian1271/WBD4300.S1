//Animate Hamburger menu on every page where the <nav class="hamburger"> hive exsists
(function($, undefined){
	$(function(){
		function hamslidein(){																				//SlideIn function for easy calling
			let img="<img src='assets/ic_close_black_1024px.svg'></img>"
			$(".hampost").show().animate({left:0},300)
			// $(".hampre").append(img).css("background-image", "none").find("img").addClass("hamclose") 		//sloppy attempt to replace hamburger ico with close ico
			$(".hampre").toggleClass("active")

			$(".hampost").find("a").each(function(){														//Dynamically set "curr Page" dot by comparing file name with pathname
				if($(this).attr("href")==location.pathname.split('/').slice(-1)[0]){
					$(this).addClass("curr")
				}
				else if(location.pathname.split('/').slice(-1)[0]===""){
					if($(this).index()==0){
						$(this).addClass("curr")
					}
				}
			})
		}
		function hamslideoff(){																				//SlideOut function for easy calling
			$(".hampost").animate({left: "-100%"}, 300,function(){$(this).hide()})
				// $(".hampre").find("img").remove()
				// $(".hampre").removeAttr("style")
				$(".hampre").removeClass("active")
		}

		$(".hampre").click(function(){																		//click listener on hamburger ico
			if(!($(".hampost").is(":visible"))){
				hamslidein()
			}
			else{
				hamslideoff()
			}
		})
		$("html").on("keydown", function(_e){																//call SlideOut() on "esc" press for convenience
			switch(_e.key){
				case "Escape":
				if($(".hamclose").is(":visible")){
					hamslideoff()
					break
				}
			}
		})
		$("main").click(function(){
			hamslideoff()
		})
	})
})(jQuery)
