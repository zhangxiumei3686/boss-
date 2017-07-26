$(function(){
	$('#login').css('width',$(window).width());
	$('#login').css('height',$(window).height());

	var count=0;
	$('.cite').click(function(e){
		stopPropagation(e); 
		if(count%2==0){
			$('.cite em').css('background-position','2px -86px');
			$('.input1 ul').css('display','block');
		}else{
			$('.cite em').css('background-position','2px -54px');
			$('.input1 ul').css('display','none');
		}
		count++;
		e.preventDefault();
	})
	$(document).click(function(){
		if($('.input1 ul').css('display')=='block'){
			count++;
		}
		
		$('.cite em').css('background-position','2px -54px');
		$('.input1 ul').css('display','none');
	})

	function stopPropagation(e) {
		if (e.stopPropagation)
			e.stopPropagation();
		else
			e.cancelBubble = true;
	} 
	$('.form1').eq(0).css('display','block');
	$('.login-list li').eq(0).css({'fontSize':'16px','color':'#000','borderBottom':'2px solid #62D5C8'});
	$('.login-list li').click(function(){
		var index=$(this).index();
		$('.form1').each(function(index,element){
			$(element).css('display','none');
		})
		$('.login-list li').each(function(index,element){
			$(element).css({'fontSize':'14px','color':'#9fa3b0','borderBottom':'2px solid #F2F5F9'});
		})
		$(this).css({'fontSize':'16px','color':'#000','borderBottom':'2px solid #62D5C8'});
		$('.form1').eq(index).css('display','block');
	})

	var num=0;
	$('.scan-help-top ul li').eq(num).addClass('active');
	$('.scan-help-down li').eq(num).css('display','block');

	$('.form2').hover(function(){
		$('.codeRight').animate({
			opacity:100,
			left:421
		})
	},function(){
		$('.codeRight').animate({
			opacity:0,
			left:367
		})
	})
	$('.scan-help-top ul li').click(function(){
		$('.scan-help-top ul li').each(function(index,element){
			$(element).removeClass('active');
		})
		var index=$(this).index();
		num=index;
		$(this).addClass('active');
		$('.scan-help-down li').each(function(index,element){
			$(element).css('display','none');
		})
		$('.scan-help-down li').eq(index).css('display','block');
	})
})