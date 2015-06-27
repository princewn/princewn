	var onMouseOverCount=1;						   

function bottomImg(){
	//alert(window.screen.width);
	if($(window).width()>=768){
		$("#bottomImg").css({"width":$(window).width(),
		});
	}
	else{
		//alert("小于768");
		$("#bottomImg").css({"width":900
							
		});
	}
	if($(window).height()>window.screen.height*3/4){
		$("#bottomImg").css({
			"height":$(window).height()
		});
	}
	else{
		$("#bottomImg").css({
			 "height":window.screen.height*3/4,
			 "overflow":"hidden"
		});
	}	
	

}
function opcityBlock(){
	$("#opcityBlock").css({
	 	"height":window.screen.availHeight
	});
}

function picItem(){
    $(function(){
        var aLi = $('.picInfor');            
        var aSpan = aLi.find('.inforItem');
        var aImg = aLi.find('.picItem');
		var flag=0;
        aLi.each(function(index){
            $(this).mouseenter(function(){
				console.log(flag);
				if(flag==0){					   
					aImg.eq(index).stop();
					aSpan.eq(index).stop();
					aImg.eq(index).animate({
						height:0,
						top:0
					},20,'',function(){
						$(this).hide();
						aSpan.eq(index).css({"visibility":"visible",
											 "zIndex":100}).show().animate({
							height:400,
							top:0
						},20)
					})
				}
				flag=1;
            })
            $(this).mouseleave(function(){
				flag=0;
                aImg.eq(index).stop();
                aSpan.eq(index).stop();
                aSpan.eq(index).animate({
                    height:0,
                    top:38
                },20,'',function(){
                    $(this).hide();
                    aImg.eq(index).css({"visibility":"visible",
										"zIndex":100
										}).show().animate({
                        height:400,
                        top:0
                    },20)
                })
            })
        })
    })
}
function rotatePicOff(target){
	//alert("rotatePicOff");
	target.removeClass("rotatePic").addClass("rotatePicOff");
}
function rotatePicOn(target){
	//alert("rotatePicOn");
	target.removeClass("rotatePicOff").addClass("rotatePic");
}
function rotatePicInicial(){//js bind 函数 使用闭包保存执行上下文，否则bind完成后this指的是html，所以加载时引发自动执行
	$(".myPic").hover(function(){
							   //alert("on it");
							    rotatePicOff($(this));
							    },function(){
											rotatePicOn($(this))
											});
	$(".myPic").click(function(){
								   //alert($(this).index());
								   console.log($("#dcim").offset().top);
								   //window.scrollTo($("#dcim").offset().top,0);

								   $("#dcim").height(window.availHeight).width(window.availWidth).removeClass("hidden").fadeIn(2000);
								   $(".unifySize").height(window.availHeight-$("#navbar").height()-100).width(window.availWidth-$("#navbar").width()-100);
								   window.scrollTo($("#dcim").offset().top+$("#dcim").height(),5000);//必须位于上一句之后，否则隐藏元素无法找到
								   var num=$(this).index();
								   $("#dcim ol li:eq("+num+")").click();
							   });


}
function divAnimate(){
	document.querySelector('.inforInnerLeft').style.width = '100%';
	document.querySelector('.inforInnerLeft').style.background = '#eee';
	document.querySelector('.inforInnerLeft').classList.add('inforChangeLeft');
	
	document.querySelector('.inforInnerRight').style.width= '100%';
	document.querySelector('.inforInnerRight').style.left= '0%';
	document.querySelector('.inforInnerRight').style.background = '#eee';
	document.querySelector('.inforInnerRight').classList.add('inforChangeRight');	
	
};	
function overviewDetact(){
/*表达式结果如果为true,则 #item 不在可视区域内.反之则在可视区域内.*/
	//alert("可视范围");
	$(document).scroll(function() {
		if(!(
				 jQuery(window).scrollTop()>( jQuery('#overviewDetact').offset().top+jQuery('#overviewDetact').outerHeight() )
			 
		    ||
		   
			 	(jQuery(window).scrollTop()+jQuery(window).height())<jQuery('#overviewDetact').offset().top 
		     )
		   )
		{
			divAnimate();//块的变色滑动
		}
		else{
			console.log("不在可视范围内");
		}
	});
}

function changpian(){
	//var x = $("audio").controls;
	var x = document.getElementById("music");//用JQuery标签类都报错，五次方法，大概没有封装
	//alert(x);
	$("#musicStop").click(function(){
		//$(this).style.display="none";	
		x.pause();
		$(this).css({"display":"none"});
		$("#changpian").removeClass("icon-spin");
		$("#musicContinue").css({"display":"inline"});
	});
	$("#musicContinue").click(function(){
		$(this).css({"display":"none"});
		$("#changpian").addClass("icon-spin");
		$("#musicStop").css({"display":"inline"});
		x.play();
	});	
	
}
function idearotateX90(){
	$("#ideaRotateX90").click(function(){
		$("#ideaLeft").addClass("rotateX90");
		$("#ideaLeft").addClass("ideaRight");
		//setTimeout($("#ideaRight").css({"display":"none"}),1000);		
		function ideaRight2Slide(){
			$("#ideaRight2").css({"display":"block"});
			//$("#ideaRight2").addClass("ideaRight2Slide");
  			$("#ideaRight2").animate({"top":"-30px"});
			
			$("#ideaRight2").animate({
			  position:"relative",
			  top:'-50px',
			  opacity:'1',
			  //height:'150px'
			},1000);			
		}
		ideaRight2Slide();
		//setTimeout(,1000);
		

	});
}
$(document).ready(function(){
	bottomImg();//背景大小自适应
	$(window).resize(function(){
		bottomImg();
	});	
	opcityBlock();//设置透明框宽高
	picItem();//图片翻转
	rotatePicInicial();//倾斜图片时间绑定
	overviewDetact();//overview是否在可视范围内
	changpian();//唱片转动，音乐播放暂停
	//idearotateX90();//立方体形式旋转
	//alert(window.screen.availHeight);
});
