
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
});	