$(document).ready(function(){
	
	//상단메뉴 배경색 조절
	//휴대폰에서는 배경색 보임
	if($(window).width() <= 600 ){
		$("nav").addClass('act');
	}
	//휴대폰보다 큰 화면일때는 스크롤 높이에 따라 배경색을 조절함
	else {
		const change = $("#top").height()-100;
		$(window).scroll(function(){
			if( $(window).scrollTop() >= change ){
				$("nav").addClass('act');
			} else {
				$("nav").removeClass('act');
			}
		});
	}
	
	//타자치는 효과
	const $typing = "다채롭게 변화하는 디자이너\n 황인희의 포트폴리오 입니다";
	//console.log( $typing[7]  );
	const tyLen  = $typing.length;
	// console.log( tyLen ); //21개
	let i = 0;
	let txt = "";
	function type(){
		if( i < tyLen ){
			txt += $typing[i];
			//$("#typing").html(  txt );
			document.querySelector("#typing").innerText = txt;
			i++;
			setTimeout( type, 100);
		}
	}
	type();	

	//상단 메뉴 호버 활성화 유지
	$("#menu a").click(function(){
		$(this).addClass('act').siblings().removeClass('act');
	});
	
	
	//콘텐츠의 top값을 절대값으로 얻어온다. /상대값은 position().top
	//절대값은 기준이 윈도우 / 상대값은 기준이 부모
	const homeTop = $("body").offset().top;
	const aboutTop = $("#about").offset().top;
	const port1Top = $("#port1").offset().top - 400;
	const port2Top = $("#port2").offset().top - 400;
	const port3Top = $("#port3").offset().top - 400;
	const port4Top = $("#port4").offset().top - 400;
	const eventTop = $("#event").offset().top - 400;
	const contactTop=$("#contact").offset().top - 200;
	
	let st = 0;
	let pos = 0;
	//스크롤바를 내렸을때의 효과 (스크롤이벤트 감지!)
	$(window).scroll(function(){
		st = $(window).scrollTop();
		// console.log(st);
		if(st>= homeTop && st < aboutTop){
			pos = 0;
		}
		if( st>= aboutTop && st<port1Top){
			//About에서 오른쪽 "skill" bar 애니메이션
			$("#photo progress").animate({value : 90});
			$("#html progress").delay(100).animate({value : 70});
			$("#jquery progress").delay(200).animate({value : 70});
			$("#oven progress").delay(300).animate({value : 70});	
			pos = 1;		
		}
		if( st>= port1Top ){
			$("#port1").addClass("act");
			pos = 2;
		}
		if( st>= port2Top ){
			$("#port2").addClass("act");
		}
		if( st>= port3Top ){
			$("#port3").addClass("act");
		}
		if( st>= port4Top ){
			$("#port4").addClass("act");
		}
		if( st>= eventTop && st<contactTop ){
			pos = 3;
		}
		if( st>= contactTop ){
			pos = 4;
		}
		$("#menu a").eq(pos).addClass('act').siblings().removeClass('act');
	});

	// 이벤트이미지 클릭시 popup 나오기
	$("#event>div>div").click(function(){
		const thumb = $(this).children("img").attr("src");
		const change = thumb.replace('.', '_big.');
		$("#popup img").attr("src" ,  change);		
		
		// const alt = $(this).children("img").attr("alt");
		// $("#popup h3").text( alt );
		
		$("#popup").fadeIn();
});
	
	// 팝업창 닫기
	$("#popup").click(function(){
		$("#popup").fadeOut();
	});
		
});//////////////all end











