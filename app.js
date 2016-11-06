'use strict';
$(document).ready(function(){
	
	function heightPage(){//height page
		if(screen.width > 600){	
			$('.container').css('height', $(window).height());
		}
	};
	heightPage();

	function heightItem(){
		if(screen.width >= 600){//for a square form
			$('.container__item').css('height', $(window).height()/2); 
			$('.container__item').css('width', $('.container__item').css('height'));
		}
			if(screen.width <= 600){
			$('.container__item').css('height', $(window).width());
			$('.container__item').css('width', $(window).width());
		}
	}
	heightItem();

	function contHeight(){
		if(screen.width >= 600){//for a square form
			$('.container').css('width',  $('.container__item').width()*2);
			
		}
	}
	contHeight();

	$(window).resize(function(){
		heightPage();
		heightItem();
		contHeight();
	});
	
});

angular.module('oldmenTest', []);
