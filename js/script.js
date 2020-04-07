$('.page-scroll').click(function(e){
	const tujuan = $(this).attr('href');
	const elemenTujuan = $(tujuan);
	$('html').animate({
		scrollTop : elemenTujuan.offset().top - 50
	}, 1500, 'easeInOutExpo');

	e.preventDefault();
});

$(window).scroll(function(){
	const wScroll = $(this).scrollTop();

	$('.jumbotron .container').css({
		'transform' : 'translate(0, '+ wScroll/2.5 +'%)'
	});

	if(wScroll > $('.about').offset().top-300){
		$('.about #imgAbout').addClass('imgAppear');
	}

	if(wScroll > $('.about').offset().top-150){
		$('.about #pLeft').addClass('pAppear');
		$('.about #pRight').addClass('pAppear');
	}

	if(wScroll > $('.portfolio').offset().top-250){
		$('.portfolio .img-thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .img-thumbnail').eq(i).addClass('thumbnailAppear');
			}, 300 * (i+1));
		});
	}

	if(wScroll >= $('.about').offset().top-60 && wScroll < $('.portfolio').offset().top-70){
		$('#sectionAbout').addClass('active');
	}
	else{
		$('#sectionAbout').removeClass('active');
	}

	if(wScroll >= $('.portfolio').offset().top-70 && wScroll < $('footer').offset().top-670){
		$('#sectionPortfolio').addClass('active');
	}
	else{
		$('#sectionPortfolio').removeClass('active');
	}

	if(wScroll > 1410){
		$('#sectionContact').addClass('active');
	}
	else{
		$('#sectionContact').removeClass('active');
	}


});

