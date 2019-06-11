/***********************************************
	getRandom 호출 시 당신이 원하는 수를 넣으세요
	ex) getRandma(5)를 넣으면 0~4를 반환 받습니다.
**********************************************/

function getRandom(num){
		var r = Math.random();//자바에서도 Math.random()이다.
		//자바스크립트에게 랜덤한 값을 요청한다.
		//내장객체 : Array, Math, Date 등
			//w3school에서 학습하기
			//자바스크립트에서는 개발자가 개발 시 사용빈도가 높은 기능들을 이미 잘 만들어서 제공해놓은 객체를 지원
				//이들을 가리켜 내장객체라함


		//인덱스는 length-1을 넘어가면 안됨
		//document.write("오늘의 추천 점심메뉴 : "+food[0]+"<br>");
		//document.write(r);//0~1 사이의 실수, 만약 3을 곱하면 최대 정수가 2가 된다.(곱해준 수를 넘어서지 못하는 정수)
		//document.write(r*3);//이제 0~2.xxxx의 실수가 나오는데 소수점을 버리려면 parseInt
		//document.write(parseInt(r*food.length)+"<br>");//이제 length로 바꿔줌
		//document.write("오늘의 추천 점심메뉴 : "+food[n]+"<br>");

		//var n = parseInt(r*food.length);//food.length마저도 변하게 변수로 만들어서 호출할때 결정하도록
		var n = parseInt(r*num);
		return n;
			//함수 중 return에 값을 명시하여, 호출한 자가 그 값을 반환 받도록 처리하는 함수를 반환값이 있는 함수라 한다.
	}

	/***********************************************
	getRandRange 호출 시 당신이 원하는 수를 넣으세요
	ex) getRandRange(min,max)를 넣으면 min~max-1를 반환 받습니다.
	ex) getRandRange(2,7)을 넣으면 2~6이 나옴
**********************************************/
function getRandomByRange(min,max){
	return parseInt(Math.random()*(max-min))+min;
}


/***********************************************
시간의 문자열 처리 함수
인수로 넘긴 n이 10보다 작으면, 앞에 0 문자를 조합해서
결과를 반환하자.
**********************************************/
function getTimeString(n){
	if(n<10){
		n="0"+n;
	}
	return n;
}



/***********************************************
사후 충돌체크
/*
	인수 1 : 나 객체
	인수 2 : 상대방 객체

	논리연산자로 논리값을 반환합니다.
*/
//me.  target. 등 인거니까 인스턴스로 넘겨야

/**********************************************/
function collisionCheck(me, target) {

	 //나의 너비가 상대의 범위에 있는지 체크

	 var horizon1=me.x+me.width >= target.x;
	 	//좌측에서 우측으로 접근시
	 var horizon2=me.x <= target.x+target.width;
	 	//우측에서 좌측으로 접근시

	 //나의 높이가 상대의 범위에 있는지 체크
	 var vertical1=(me.y+me.height >= target.y);  //위에서 아래로 접근시
	 var vertical2=(me.y <= target.y+target.height); //아래에서 위로 접근시

	 return (horizon1 && horizon2) && (vertical1 && vertical2);
}

/*######################################################################
	사전 충돌체크(다음에 움직이면 충돌할지 판단)
	collisionCheck에서 nextX,nextY가 추가

	me_x+nextX >= target_x
	현재 나의 x에 다음에 움직일 x값을 미리 더해 타겟과 비교
######################################################################*/
//old version hitTest
// function hitTest(me, target , nextX , nextY) {
// 	//두물체간 충돌 여부 판단
// 	me_x= parseInt(me.div.style.left);
// 	me_y= parseInt(me.div.style.top);
// 	me_width=parseInt(me.div.style.width);
// 	me_height=parseInt(me.div.style.height);
//
// 	target_x= parseInt(target.div.style.left);
// 	target_y= parseInt(target.div.style.top);
// 	target_width=parseInt(target.div.style.width);
// 	target_height=parseInt(target.div.style.height);
//
// 	nextX=parseInt(nextX);
// 	nextY=parseInt(nextY);
//
//
// 	var result1=(me_x+nextX >= target_x) && (me_x+nextX <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단
// 	var result2=((me_x+me_width+nextX) >= target_x) && ((me_x+me_width+nextX) <= (target_x+target_width)); 	//나의 가로폭이 타겟의 가로폭 내에 있는지 판단
//
// 	var result3=((me_y+nextY) >= target_y) && ((me_y+nextY) <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
// 	var result4=((me_y+me_height+nextY) >= target_y) && ((me_y+me_height+nextY) <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
//
// 	//타겟의 위치부터 너비,높이폭이 me(hero)의 너비높이 폭보다 작을 때 문제
// 	//var result5=((target_y+target_height)<=(me_y+me_height)) || ((target_x+target_width)<=(me_x+me_width));
//
// 	return (result1 || result2) && (result3 || result4);// && result5;
// }

/*----------------------------------------------------
인수1 : 나 객체
인수2 : 상대방 객체
인수3: 예측된  x좌표
인수4: 예측된 y좌표
----------------------------------------------------*/
function hitTest(me, target , nextX , nextY) {
	//두물체간 충돌 여부 판단
	nextX=parseInt(nextX);
	nextY=parseInt(nextY);
	//var result1=(me_x+nextX >= target_x) && (me_x+nextX <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단
	//var result2=((me_x+me_width+nextX) >= target_x) && ((me_x+me_width+nextX) <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단
	//var result3=((me_y+nextY) >= target_y) && ((me_y+nextY) <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
	//var result4=((me_y+me_height+nextY) >= target_y) && ((me_y+me_height+nextY) <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
	var result=((me.x+me.width >=target.x) && (me.x <=target.x+target.width) ) &&  ( (me.y+me.height >= target.y) && (me.y<=target.y+target.height) )
	return result;
}

/*#####################################################
	원하는 달이 몇일까지 있는지 구하는 함수
	ex) 유저가 알고싶은 월이 2018년 5월일 경우
	getLastDateOfMonth(2018,4)//0부터 세니까
#######################################################*/
function getLastDateOfMonth(year,month){
	var d = new Date();
	//조작
	d.setFullYear(year);
	d.setMonth(month+1);
	d.setDate(0);

	//함수 호출자에게 원하는 데이터 반환
	return d.getDate();
}

/*#####################################################
	해당 월의 시작 요일 구하기
	ex) 5월이 알고싶으면
	Date 객체를 5월로 세팅, 날짜는 1일로 세팅한 후 요일을 물어본다.
	주의) "호출 시 5월이 궁금하다면 4를 인자로 넘겨야한다."는게 선생님 버전
	하지만 나는 5월이 궁금하면 5를 넘긴다.
#######################################################*/
function getStartDayOfMonth(year,month){
	var d=new Date();//현재
	d.setFullYear(year);
	d.setMonth(month);
	d.setDate(1);

	return d.getDay();
}



/*----------------------------------------------------
어떤 대상이든, 방향만 넘겨주면 알아서 크기 정보를 생성한다
side : left, right, up, down
----------------------------------------------------*/
function getSensorSize(side , x, y, width, height ){
	var border=8; //막대들의 두께
	var colTypePadding=2//세로형 막대 들여쓰기 퍼센트 %

	var rowTypePadding=2//가로형 막대 들여쓰기 퍼센트 %
	var rowTypeWidth=96 //가로형 막대 너비 퍼센트 %

	var json={};

	json["type"]=side;
	//좌측일 경우
	if(side =="LEFT"){ //세로형
		json["x"]=x-1; //2픽셀 바깥으로
		json["y"]=y+(height*(colTypePadding/100)); //2% 밑으로
		json["width"]=border;
		json["height"]=height*(96/100); //96%
	}else if(side =="RIGHT"){//세로형
		json["x"]=x+width;
		json["y"]=y+(height*(colTypePadding/100)); //2% 밑으로
		json["width"]=border;
		json["height"]=height*(96/100); //96%
	}else if(side =="TOP"){//가로형
		json["x"]=x+(width*(rowTypePadding/100)); //들여쓰기 정도
		json["y"]=y-border; //위쪽으로 2픽셀
		json["width"]=width*(rowTypeWidth/100);
		json["height"]=border;
	}else if(side =="BOTTOM"){//가로형
		json["x"]=x+(width*(rowTypePadding/100)); //들여쓰기 정도
		json["y"]=(y+height); //아래로 2픽셀
		json["width"]=width*(rowTypeWidth/100);
		json["height"]=border;
	}
	//console.log(json);
	return json;
}
