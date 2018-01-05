$(document).ready(function(){



			$.ajax({
				type:"GET",
				url :"http://localhost:8080/privateBlog/sample/getMenuList.do",
				dataType :"jsonp",
				error : function(data){
					alert("수신 실패");
				},
				success : function(data){							
					// console.log(data);
					for (var i = 0; i < data.menuList.length; i++){ 
						$(".navMenus").append('<li><a href="#" id="'+data.menuList[i].BM_IDNUM+'">'+data.menuList[i].BM_NAME+'</a></li>');
						
						// console.log('data.menuList['+i+'].BM_NAME : ' + data.menuList[i].BM_NAME);
						// console.log('data.menuList['+i+'].BM_LEV : ' + data.menuList[i].BM_LEV);
						// console.log('data.menuList['+i+'].BM_STEP : ' + data.menuList[i].BM_STEP);
						// console.log('data.menuList['+i+'].ROWNUM : ' + data.menuList[i].ROWNUM);
						// console.log('data.menuList['+i+'].BM_REF : ' + data.menuList[i].BM_REF);
						// console.log('data.menuList['+i+'].BM_ISDEL : ' + data.menuList[i].BM_ISDEL);
						// console.log('data.menuList['+i+'].BM_IDNUM : ' + data.menuList[i].BM_IDNUM);
					};
					$(".navMenus a").on("click",function(){
						alert('move!');
					});
					for (var i = 0; i < data.menuList.length; i++){
						$(".kategories").append('<option>'+data.menuList[i].BM_NAME+'</option>');
					};	
				}
			});


			$(".makingButton").on("click",function(){
				location.href = "./makingContents.html";
			});

			$(".logoImg").on("click",function(){
				alert('move home!');
				location.href = "file:///C:/dev_sourse/Front/privateBlog/html/privateBlog.html";
			});

			$("#fbIcon").on("click",function(){
				alert('move facebook!');
				location.href = "https://www.facebook.com/?sk=welcome";
			});

			$("#twIcon").on("click",function(){
				alert('move twitter!');
				location.href = "https://twitter.com/hbk9865";
			});

			$("#ghIcon").on("click",function(){
				alert('move my Github!');
				location.href = "https://github.com/HANSangYeal/";
			});

			$("#aboutMe100").on("click",function(){
				location.href = "./aboutResume.html";
			});

			$("#contentMenus001").on("click",function(){
				location.href = "./read.html";
			});
			// nav-menu 클래스에 마우스 호버링 시
			$(".navMenus li").hover(function(){
				// 해당 li 태그에 속한 ul 태그를 보여준다
				$("ul:first",this).show();
			}, function(){
				// 마우스 뗐을 때 : 숨긴다.
				$("ul:first",this).hide();
			});
		});

	