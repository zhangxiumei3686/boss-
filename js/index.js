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

	var number=0;

	$('.job-page em').eq(0).css('display','none');
	$('.job-page span').eq(0).addClass('active');
	$('.job-page span').hover(function(){
		if($(this).index('.job-page span')==number){
			$(this).css({'color':'#fff'});
		}
	},function(){
		if($(this).index('.job-page span')==number){
			$(this).css({'color':'#fff'});
		}		
	})
	
	$('.job-page span').each(function(index,element){
		if(index>=3){
			$(element).css('display','none');
		}				
	})
	$('.job-page span').click(function(){
		$('.job-page span').removeClass('active').css('color','#61687c');
		$(this).addClass('active');
		number=$(this).index('.job-page span');

		$('.job-page span').hover(function(){
			if($(this).index('.job-page span')==number){
				$(this).css({'color':'#fff'});
			}
		},function(){
			if($(this).index('.job-page span')==number){
				$(this).css({'color':'#fff'});
			}		
		})
		if(number>=5){

		}
		$('.job-page em').eq($('.job-page em').length-1).css('display','');
		$('.job-page em').eq(0).css('display','none');
		if(number>=$('.job-page span').length-3){
			$('.job-page em').eq($('.job-page em').length-1).css('display','none');
		}
		if(number>=3&&number<=$('.job-page span').length-3){
			$('.job-page em').eq(0).css('display','');
			$('.job-page span').each(function(index,element){
				if(number>index){
					$(element).css('display','none');
				}
				$('.job-page span').eq(0).css('display','');
				$('.job-page span').eq(number-1).css('display','');
				$('.job-page span').eq(number-2).css('display','');
			})
		}else if(number>$('.job-page span').length-3){
			$('.job-page em').eq(0).css('display','');
		}
		$('.job-page span').eq(number+1).css('display','');
		$('.job-page span').eq(number+2).css('display','');
		$('.job-page span').each(function(index,element){
			if(number+3<=$('.job-page span').length-1&&number+3<=index){
				$(element).css('display','none');
			}
		})
	})
	$('.top').hover(function(){
		if(number!=0){
			$(this).css({'backgroundPosition':'9px -856px','cursor':'pointer'})
		}
	},function(){
		$(this).css({'backgroundPosition':'9px -830px','cursor':'default'})
	})
	$('.bot').hover(function(){
		if(number!=$('.job-page span').length-1){
			$(this).css({'backgroundPosition':'10px -912px','cursor':'pointer'})
		}
	},function(){
		$(this).css({'backgroundPosition':'10px -883px','cursor':'default'})
	})

	var clickNum=0;
	var clickdd=0;
	var flag=true;
	$('.job-list dd').click(function(){
		flag=true;
		if($(this).get(0).className.indexOf('limit')!=-1){
			$(this).parent().find('dd').removeClass('active');
			$(this).addClass('active');
		}else{
			$(this).parent().find('dd').eq(0).removeClass('active');
			if($(this).get(0).className.indexOf('active')!=-1){
				$(this).removeClass('active');
			}else{
				$(this).addClass('active');
			}
		}
		$(this).parent().find('dd').each(function(index,element){
			if(index>=1 && element.className.indexOf('active')!=-1){
				flag=false;
				return;
			}
		})
		if(flag){
			$(this).parent().find('dd').eq(0).addClass('active');
		}

	})
	$('.totledd').click(function(){
		if(clickNum%2==0){
			$('.totledd').css('color','#fc6c38');
			$('.jobTotlei').css('backgroundPosition','1px -87px');
			$('.otherjob').css('display','block');
		}else{
			$('.totledd').css('color','#4a4160');
			$('.jobTotlei').css('backgroundPosition','2px -54px');
			$('.otherjob').css('display','none');
		}
		clickNum++;
	})

	var jobIndex=0;
	var jobIndexNext=0;
	//存储上一个dd脚标
	var tempCo=0;
	//临时交换脚标
	var tempnum=0;
	//记录两次点击的dd是否为一个dd
	var obj=null;
	
	$('.job-listfir .job-listfir,.job-listfir .job-list').css('display','none');
	$('.job-top>dd').click(function(){
		var temp=$(this).text();
		if($(this).get(0).ind==undefined){

			var tempindex=$(this).index()-1;
			//alert(tempindex)
			$(this).get(0).ind=tempindex;
			//alert($(this).get(0).ind)
		}
		
		
		$(this).text($('.prespan').text());
		$('.prespan').text(temp);
		$(this).parent().find('i').eq(0).css('display','inline-block');

		if(obj!=this&&obj!=null){
			$('.listLimitpre').text('不限');
			$('.listLimitnext').css('display','none');
			$('.job-top i').eq(1).css('display','none');
		}

		if($('.prespan').text()=='全国'){
			$('.job-listse').find('.job-listfir').each(function(index,element){
				$(element).css('display','none');
			})
			$('.job-listse').find('.job-list').each(function(index,element){
				$(element).css('display','none');
			})
			$('.listLimitpre').css('display','none');
			$('.listLimitnext').css('display','none');
			$('.job-top i').css('display','none');
			return;
		}

		$('.listLimitpre').css('display','inline-block');
		$('.job-listse').find('.job-listfir').each(function(index,element){
			$(element).css('display','none');
		})
		$('.job-listse').find('.job-list').each(function(index,element){
			$(element).css('display','none');
		})
		$('.job-listse').each(function(index,element){
			$(element).css('display','none');
		})
		//alert($(this).get(0).ind)
		$('.job-listse').eq($(this).get(0).ind).css('display','block');
		$('.job-listse').eq($(this).get(0).ind).find('.job-listfir').css('display','block');
		
		$('.job-listse').eq($(this).get(0).ind).find('.job-listfir dd').click(function(){
			$('.job-top i').eq(1).css('display','inline-block');
			$('.listLimitnext').css('display','inline-block');
			
			if($(this).text()!='不限'){
				$(this).parent().css('display','none');
				$('.job-listse').eq(tempindex).find('.job-list').css('display','block');
			}else{
				$('.listLimitnext').css('display','none');
				$('.job-top i').eq(1).css('display','none');
			}		
			$('.job-listse').eq(tempindex).find('.job-listfir dd').each(function(index,element){
				$(element).removeClass('active');
			})
			$(this).addClass('active');	
			$('.listLimitpre').text($(this).text());
			jobIndex=$(this).index()-1;
		})
		$('.job-listse').eq(tempindex).find('.job-list dd').click(function(){			
			$('.job-listse').eq(tempindex).find('.job-list dd').each(function(index,element){
				$(element).removeClass('active');
			})
			$(this).addClass('active');
			$('.listLimitnext').text($(this).text());
			jobIndexNext=$(this).index();
		})

		$('.listLimitpre').click(function(index,element){
			$('.job-listse').find('.job-listfir').each(function(index,element){
				$(element).css('display','none');
			})
			$('.job-listse').eq(tempindex).find('.job-listfir').css('display','block');
			$('.job-listse').eq(tempindex).find('.job-list').css('display','none');
			$('.job-listse').eq(tempindex).find('.job-listfir dd').removeClass('active');
			$('.job-listse').eq(tempindex).find('.job-listfir dd').eq(jobIndex).addClass('active');
		})

		$('.listLimitnext').click(function(index,element){
			$('.job-listse').eq(tempindex).find('.job-listfir').css('display','none');
			$('.job-listse').eq(tempindex).find('.job-list').css('display','block');
			$('.job-listse').eq(tempindex).find('.job-list dd').removeClass('active');
			$('.job-listse').eq(tempindex).find('.job-list dd').eq(jobIndexNext).addClass('active');
		})

		$('.prespan').click(function(){
			$('.job-listse').eq(tempindex).find('.job-listfir dd').removeClass('active');
			$('.job-listse').eq(tempindex).find('.job-listfir dd').eq(0).addClass('active');
			$('.job-listse').eq(tempindex).find('.job-list dd').removeClass('active');
			$('.job-listse').eq(tempindex).find('.job-list dd').eq(0).addClass('active');
			$('.job-listse').eq(tempindex).find('.job-listfir').css('display','block');
			$('.job-listse').eq(tempindex).find('.job-list').css('display','none');
			$('.job-top i').eq(1).css('display','none');
			$('.listLimitpre').text('不限');
			$('.listLimitnext').css('display','none').text('不限');
			jobIndexNext=0;
			jobIndex=0;
		})
		
		tempnum=tempCo;
		tempCo=$(this).get(0).ind;
		$(this).get(0).ind=tempnum;

		obj=this;

	})

	var setInteCount=0;
	var appcount=0;
	var appcount1=0;
	var appcount2=0;
	var appcount3=0;
	var appcount4=0; 
	var timer1=null;

	app();

	function setInte(){		
		timer1=setInterval(function(){
			$('.newpen li').eq(setInteCount).find('.img1').css('display','block').addClass('imgs');
			$('.newpen li').eq(setInteCount).find('.img2').css('display','none');
			setInteCount++;
			if(setInteCount>4){
				clearInterval(timer1);
			} 
		},1000)

	}
	$('.newpen li').hover(function(){
		$(this).find('.img1').css('display','none');
		$(this).find('.img2').css('display','block');
	},function(){
		$(this).find('.img1').css('display','block').removeClass('imgs');
		$(this).find('.img2').css('display','none');
	})

	

	$(window).scroll(function(){
		app();
	})
	function app(){
		if($('.app-one').offset().top<=$(document).scrollTop()+$(window).height() && $('.app-one').offset().top+$('.app-one').height()>=$(document).scrollTop() && appcount4==0){
			$('.appOneLeft').addClass('appOneLeftani');
			$('.app-phone').addClass('appphoneani');
			$('.appOneRight').addClass('appOneRightani');	
			appcount4++;		
		}

		if($('.company-pen').offset().top<=$(document).scrollTop()+$(window).height() && $('.company-pen').offset().top+$('.company-pen').height()>=$(document).scrollTop() && appcount==0){
			$('.pen-title').addClass('pentitle');
			$('.pen-logo').addClass('penlogo');
			$('.pen-phone').addClass('penphone');	
			if(timer1==null){
				$('.newpen li').addClass('lis');
				var timer=setTimeout(function(){
					setInte();		
					clearTimeout(timer);
				},2000);
			}
			appcount++;		
		}
		if($('.resume').offset().top<=$(document).scrollTop()+$(window).height() && $('.resume').offset().top+$('.resume').height()>=$(document).scrollTop() && appcount1==0){
			$('.resumeLeft').addClass('resumeleftani');
			$('.resumetoke').addClass('resumetokeani');
			$('.resumepdf').addClass('resumepdfani');
			$('.resumeRight').addClass('resumeRightani');
			appcount1++;
		}
		if($('.othercompany').offset().top<=$(document).scrollTop()+$(window).height() && $('.othercompany').offset().top+$('.othercompany').height()>=$(document).scrollTop() && appcount2==0){
			$('.bigCompany').addClass('pentitle');
			$('.bigComputer').addClass('penphone');
			$('.bigList li').addClass('bigListLi');
			appcount2++;
		}
		if($('.salary').offset().top<=$(document).scrollTop()+$(window).height() && $('.salary').offset().top+$('.salary').height()>=$(document).scrollTop() && appcount3==0){
			$('.salary-right').addClass('salaryrightani');
			$('.salary-right ul').addClass('salaryulani');
			$('.salary-left').addClass('salaryleftani');
			$('.salary-right li').each(function(index,element){
				$(element).addClass('cart-'+(index+1));
			})
			appcount3++;
		}
	}
	var ulCount=1;
	//var appCount=0;
	var apptimer=null;
	
	var ulLenght=$('.himover ul').width()/$('.himover').width();
	appfun();
	function appfun(){

		apptimer=setInterval(function(){
			if(ulLenght-1==ulCount){
				ulCount=1;
				$('.himover ul').css('left',0);
			}
			$('.himover ul').animate({
				left:-980*ulCount
			})
			ulCount++;
			
		},3000);
	}
	
})




