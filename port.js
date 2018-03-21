(function($, undefined){
	$(function(){
		$(".hamclose").click(function(){
			$(this).parent().fadeOut()
		})
		$(".port").find("div").each(function(){
			$(this).click(function(){$(".hamclose").parent().fadeIn()})
			
			// $(this).click(function(){console.log($(this))})
		})
	})
})(jQuery)