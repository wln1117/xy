$(document).ready(function() {

	var navWrap = $('.nav-wrap'); //获得导航条
	//获得导航条距离网页原点的偏移量
	var navPos = navWrap.offset().top;
	//获得导航条的实际高度
	var navHeight = navWrap.outerHeight();

	//点击topcontrol回到顶部
	$('#topcontrol').click(function(event) {
		$('html,body').animate({
			scrollTop: 0
		}, 1000);
	});


	//的滚动监听
	$(window).scroll(function(event) {
		/* 获得滚动条的位置 */
		var sTop = $(window).scrollTop();

		//判断如果滚动条超过100px就显示顶部按钮
		if (sTop >= 100) {
			$('#topcontrol').fadeIn('slow');

		} else {
			$('#topcontrol').fadeOut('slow');
		}

		//判断滚动条超过导航条的位置时，导航条设置fixed
		if (sTop >= navPos) {
			if (!navWrap.hasClass('fixed')) {
				navWrap.addClass('fixed');
				$('.banner').css('margin-bottom', navHeight); //用margin填补导航条的空白占位
			} 
		} else {
			if (navWrap.hasClass('fixed')) {
				navWrap.removeClass('fixed');
				$('.banner').css('margin-bottom', 0); //去掉margin
			}
		}

		//滚动监听高亮导航条
		var intro = {
			offsetTop: $('#post-intro').offset().top,
			height: $('#post-intro').outerHeight()
		}
		var usage = {
			offsetTop: $('#post-usage').offset().top,
			height: $('#post-usage').outerHeight()
		}
		var choiceness = {
			offsetTop: $('#choiceness').offset().top,
			height: $('#choiceness').outerHeight()
		}

		if (sTop >= intro.offsetTop - navHeight && sTop < intro.height + intro.offsetTop - navHeight) {
			if (!$('.intro').hasClass('active')) 
				$('.intro').addClass('active');

		} else {
			$('.intro').removeClass('active');
		}

		if (sTop >= usage.offsetTop - navHeight && sTop < usage.height + usage.offsetTop - navHeight) {			
			if (!$('.usage').hasClass('active')) 
				$('.usage').addClass('active');
		} else {
			$('.usage').removeClass('active');

		}

		if (sTop >= choiceness.offsetTop - navHeight && sTop < choiceness.height + choiceness.offsetTop - navHeight) {
			if (!$('.choice').hasClass('active')) 
				$('.choice').addClass('active');
		} else {
			$('.choice').removeClass('active');

		}

	});

	//锚点链接过渡
	$('.nav-wrap a').click(function(event) {

		var offsetTop = $(this.hash).offset().top - navHeight + 7; //获得对应的板块的偏移量

		$('html,body').animate({
			scrollTop: offsetTop
		}, 1000);

		return false;
	});

});