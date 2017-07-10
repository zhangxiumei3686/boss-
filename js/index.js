$(function(){
	var index=0;
	var indexfev=0;
	var lenght=$('.lastlist>li').length-1;
	var listlenght=$('.contentLeft>.list').length-1;
	var height=0;
	var timer=null;
	$('.contentLeft>.list').hover(function(){
		var height=0;
		var _this=this;
		indexfev=$(this).index();
		$(this).find('.list-item-all li').css({'height':(parseInt($(this).css('height'))+40),'lineHeight':(parseInt($(this).css('height'))+40)/18});
		$(this).find('.item').css('height',parseInt($(this).find('.list-item-all').css('height'))-40);
		$(this).parent().find('.all-top').css('marginTop',(parseInt($(this).css('height'))+41)*($(this).get(0).indexc==undefined?0:$(this).get(0).indexc));
			
		$('.copContentLeft .list').css({'display':'none'});
		$(this).find('.copContentLeft .list').eq(indexfev).css({'display':'block'});
		$(this).find('.copContentLeft').css({'top':height-1});
		
		if(indexfev==listlenght){
			$('.lastlist').css('top',-parseInt($(_this).find('.item').css('height'))+65);
			$(_this).find('.item').css('top',-1);
			$(_this).find('.item').eq($(_this).get(0).indexc==undefined?0:$(_this).get(0).indexc).css({'display':'block'});
		}else if(indexfev==1){
			
			$(_this).find('.item').css('top',-60);
			$(_this).find('.item').eq($(_this).get(0).indexc==undefined?0:$(_this).get(0).indexc).css({'display':'block'});
		}else if(indexfev==0){
			$(_this).find('.item').css('top',-1);
			$(_this).find('.item').eq($(_this).get(0).indexc==undefined?0:$(_this).get(0).indexc).css({'display':'block'});
		}else{
			timer=setInterval(function(){
				if(($(_this).find('.copContentLeft').offset().top-$(document).scrollTop())<60){
					$(_this).find('.item').css('top',-1);
				}else if(($(_this).find('.copContentLeft').offset().top-$(document).scrollTop())>parseInt($(_this).find('.item').css('height'))){
					$(_this).find('.item').css('top',-(parseInt($(_this).find('.item').css('height'))-parseInt($(_this).find('.copContentLeft').css('height'))+43));
				}else{
					$(_this).find('.item').css('top',-60);
				}
				$(_this).find('.item').eq($(_this).get(0).indexc==undefined?0:$(_this).get(0).indexc).css({'display':'block'});
			},0)
		}

		$(this).find('.list-item-all').css('display','block');				
		$(this).find('.all-top li').eq($(this).get(0).indexc==undefined?0:$(this).get(0).indexc).css({'display':'block'});
		
		$(this).find('.list-item-all>li').mousedown(function(event){
		 	index=$(this).index();
		 	$(this).parent().parent().get(0).indexc=index;
		 	$(this).parent().find('.all-top li').css({'display':'none'});
		 	$(this).parent().find('.all-top li').eq($(this).parent().parent().get(0).indexc==undefined?0:$(this).parent().parent().get(0).indexc).css({'display':'block'});
		 	$(this).parent().find('.item').css({'display':'none'});
		 	$(this).find('.item').css({'display':'block'});
			if(index==1&&indexfev==0){
				$(this).parent().find('.all-top').css('marginTop',(parseInt($(this).css('height'))+1)*($(this).parent().parent().get(0).indexc==undefined?0:$(this).parent().parent().get(0).indexc));
			}else{
				$(this).parent().find('.all-top').css('marginTop',(parseInt($(this).css('height')))*($(this).parent().parent().get(0).indexc==undefined?0:$(this).parent().parent().get(0).indexc));

			}
			event.preventDefault();
		})	
		

		
	},function(){
		clearInterval(timer);
		$('.copContentLeft dl').css({'display':'none'});
		$(this).find('.list-item-all').css('display','none');
		$(this).find('.item').css({'display':'none'});
	})


	$('.text').val('搜索职位，公司').css({'color':'#e0e0e0','fontWeight':500});
	$('.ser').hover(function(){
		$('.ser').css({'border':'1px solid #55CBC4'});
	},function(){
		$('.ser').css({'border':'1px solid #F2F2F5'});
	})
	$('.text').focus(function(){
		$('.text').val('').css({'color':'#000'});
		$('.ser').css({'boxShadow':'#55CBC4 0 0 5px'})
	})
	$('.text').blur(function(){
		$('.text').val('搜索职位，公司').css({'color':'#e0e0e0','fontWeight':500});
		$('.ser').css({'boxShadow':'#55CBC4 0 0 0px'})
	})


	var count=0;
	var selectindex=0;
	var eleindex=0;
	
	$('.select').click(function(e){
		selectul=$('.selectItemRight ul').eq(selectindex).find('li');
		if(count%2==0){
			$(this).find('i').css('backgroundPosition','2px -88px');
			$('.selectItem,.selectItemRight').css('display',"block");
		}else{
			$(this).find('i').css('backgroundPosition','2px -54px');
			$('.selectItem,.selectItemRight').css('display',"none");
		}
		
		count++;
		$('.selectItem li').eq(selectindex).css('backgroundColor','#F1F3F6');
		$('.selectItemRight ul').eq(selectindex).css('display','block');
		$('.selectItemRight ul').eq(selectindex).find('li').css('backgroundColor','#F8F9FA');
		selectul.each(function(index,element){
			if(element.selectItemRightindex!=undefined){
				eleindex=index;
				return false;
			}
		})
		selectul.eq(eleindex).css('backgroundColor','#F1F3F6');


		$('.selectItem li').hover(function(){
			selectindex=$(this).index();
			selectul1=$('.selectItemRight ul').eq(selectindex).find('li');
			$('.selectItemRight ul').css('display',"none");
			$('.selectItem li').css('backgroundColor','#fff');
			$(this).css('backgroundColor','#F1F3F6');
			
			$('.selectItemRight ul').eq(selectindex).css('display','block');
			selectul1.css('backgroundColor','#F8F9FA');
			selectul1.eq(eleindex).css('backgroundColor','#F1F3F6');
		},function(){
			$(this).css('backgroundColor','#F1F3F6');
		})

		$('.selectItemRight li').hover(function(){
			$(this).css('backgroundColor','#F1F3F6')
		},function(){
			$(this).css('backgroundColor','#F8F9FA')
		})
		$('.selectItemRight li').click(function(){
			$('.selectItem,.selectItemRight').css('display',"none");
			$('.select').find('i').css('backgroundPosition','2px -54px');
			$('.select>span').text($(this).text());
			count=0;
			$('.selectItemRight li').each(function(index,element){
				delete element.selectItemRightindex;
			})
			$(this).get(0).selectItemRightindex=$(this).index();
			
		})
		e.preventDefault();
	})

	$('.job-page em').eq(0).css('display','none');
	$('.job-page span').each(function(index,element){
		if(index>=3){
			$(element).css('display','none');
		}				
	})
	$('.job-page span').click(function(){
		
	})
	$('.top,.bot').hover(function(){

	},function(){

	})
})




