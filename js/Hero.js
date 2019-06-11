//hero 우리의 주인공 thㅏ노스를 정의한다.
class Hero extends GameObject{
  constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src){
    super(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src);

    this.num=0;//hero의 움직임 애니메이션 용도
    this.g=0.3;//중력효과
    this.jumping = false;

    //충돌검사를 위한 센서부착
    this.sensorArray=[];
    this.leftSensor=new Sensor("SENSOR",container,getSensorSize("LEFT",this.x,this.y,this.width,this.height),0,0,0,0,"#fff","");
    this.rightSensor=new Sensor("SENSOR",container,getSensorSize("RIGHT",this.x,this.y,this.width,this.height),0,0,0,0,"#fff","");
    this.topSensor=new Sensor("SENSOR",container,getSensorSize("TOP",this.x,this.y,this.width,this.height),0,0,0,0,"#fff","");
    this.bottomSensor=new Sensor("SENSOR",container,getSensorSize("BOTTOM",this.x,this.y,this.width,this.height),0,0,0,0,"#fff","");
    this.sensorArray.push(this.leftSensor);
    this.sensorArray.push(this.rightSensor);
    this.sensorArray.push(this.topSensor);
    this.sensorArray.push(this.bottomSensor);
  }

  tick(){
    /*---------------------------------------------
      충돌 카운트 배열
      0:left, 1:right, 2:top, 3:bottom
    ---------------------------------------------*/
    var hitCount=[0,0,0,0];
    var floorCount=0;
    var flameHit=0;
    var coinHit=0;
    var stoneHit=0;
    var obstaHit=0;
    var enemyHit=0;
    //충돌대상을 반복문 밖으로 빼냄
    var bottomTarget = null;
    var flameTarget=null;
    var coinTarget=null;
    var stoneTarget=null;
    var obstaTarget=null;
    var enemyTarget=null;


    //천장처리
    if(this.y<=0){
      this.velY=this.g*2;
    }

    /*대상별 충돌체크*/
    for(var i=0;i<objectManager.objectArray.length;i++){
      var obj=objectManager.objectArray[i];
      //바닥 :: 바탐센서가 플랫폼에 닿지 않으면 추락해야한다.
      if(obj.typeId=="FLOOR"){
        for(var a=0;a<this.sensorArray.length;a++){
          var s = this.sensorArray[a];
          if(hitTest(obj,s,this.velX,this.velY)){//충돌했다면
            hitCount[a]++;
            floorCount++;
            bottomTarget=obj;
          }
        }
      }
      //불꽃추돌
      if(obj.typeId=="FLAME"){
        for(var a=0;a<this.sensorArray.length;a++){
          var s = this.sensorArray[a];
          if(hitTest(obj,s,this.velX,this.velY)){//충돌했다면
            hitCount[a]++;
            flameHit++;
            flameTarget=obj;
          }
        }
      }
      //장애물추돌
      if(obj.typeId=="OBSTACLE"){
        for(var a=0;a<this.sensorArray.length;a++){
          var s = this.sensorArray[a];
          if(hitTest(obj,s,this.velX,this.velY)){//충돌했다면
            hitCount[a]++;
            obstaHit++;
            obstaTarget=obj;
          }
        }
      }
      //장애물추돌
      if(obj.typeId=="VILAIN"){
        for(var a=0;a<this.sensorArray.length;a++){
          var s = this.sensorArray[a];
          if(hitTest(obj,s,this.velX,this.velY)){//충돌했다면
            hitCount[a]++;
            enemyHit++;
            enemyTarget=obj;
          }
        }
      }
      //동전추돌
      if(obj.typeId=="COIN"){
        for(var a=0;a<this.sensorArray.length;a++){
          var s = this.sensorArray[a];
          if(hitTest(obj,s,this.velX,this.velY)){//충돌했다면
            coinHit++;
            coinCount++;
            c_score_result+=1;
            coinTarget=obj;
          }
        }
      }
      //스톤수집
      if(obj.typeId=="STONE0"||obj.typeId=="STONE1"||obj.typeId=="STONE2"||obj.typeId=="STONE3"||obj.typeId=="STONE4"||obj.typeId=="STONE5"){
        for(var a=0;a<this.sensorArray.length;a++){
          var s = this.sensorArray[a];
          if(hitTest(obj,s,this.velX,this.velY)){//충돌했다면
            stoneHit++;
            s_score_result+=1;
            stoneTarget=obj;
          }
        }
      }
    }

    //체크한 충돌에 대한 처리
    //동전먹기
    if(coinHit>0){
      objectManager.removeObject(coinTarget);
      if(coinCount>=2000){
        stageCount++;
        stageClear();
      }
    }
    //스톤먹기
    if(stoneHit>0){
      //console.log("stone의 index삼을 것 : "+stoneTarget.typeId.slice(-1));
      miniStone[parseInt(stoneTarget.typeId.slice(-1))].style.opacity=1;
      objectManager.removeObject(stoneTarget);
      if(miniStone[0].style.opacity==1&&miniStone[1].style.opacity==1&&miniStone[2].style.opacity==1
      &&miniStone[3].style.opacity==1&&miniStone[4].style.opacity==1&&miniStone[5].style.opacity==1&&isFever==false){
        alert("finger snap!! fever");
        isFever=true;
        feverInterval = setInterval(goFeverMode(),500);

        feverTimeout = setTimeout(function(){
          clearInterval(feverInterval);
          isFever=false;
          for(var o=0;o<miniStone.length;o++){
            miniStone[o].style.opacity=0;
          }
        },10000);
      }
    }
    //바닥충돌
    if(floorCount>0){
      //console.log("바닥과 닿았다. 바닥은"+bottomTarget.typeId);
      this.jumping=false;
      this.y=bottomTarget.y-this.height;
      for(var a=0;a<this.sensorArray.length-1;a++){
        this.sensorArray[a].y=this.y;
      }
      this.sensorArray[3].y=this.y+this.height;
    }
    //불꽃
    if(flameHit>0&&hitCount[3]>0){
      death();
    }
    //장애물 추돌
    if(obstaHit>0){
      if(isFever==true){
        objectManager.removeObject(obstaTarget);
      }else{
        death();
        objectManager.removeObject(obstaTarget);
      }
    }
    //적군 추돌
    if(enemyHit>0&&hitCount[3]>0){
      objectManager.removeObject(enemyTarget);
    }else if(enemyHit>0&&(hitCount[1]>0||hitCount[2]>0)){
      if(isFever!=true){
        death();
        objectManager.removeObject(enemyTarget);
      }else{
        objectManager.removeObject(enemyTarget);
      }
    }


    //tick의 기본동작 승계
    this.x+=this.velX;
    this.velY+=this.g;
    this.y+=this.velY;

    //sensor는 objectManager에 등록하지 않았으므로,
    //sensor가 hero와 함께 움직이도록 tick(), render()를 hero에서 호출해준다.
    for(var i=0;i<this.sensorArray.length;i++){
      var s = this.sensorArray[i];
      s.tick(s.x+this.velX,s.y+this.velY);
      s.render();
    }

    this.walk();//걸어가는 효과
    this.showScore();
  }

  //점프 명령 수행 메서드
  jump(){//index로부터 hero클래스의 jump메서드가 호출되면
    this.velY=-10;//-값이므로 수직방향으로 상승시킴
  }

  //주인공 걷는 애니메이션 스프라이트 이미지 변경 메서드
  walk(){
    if(gameFlag==true){
      this.num+=1;
      if(this.num>5){
        this.num=0;
      }
      this.img.src="./images/thanos_"+this.num+".png";
    }
  }
  //죽었을 때 hero이미지 변경
  changeSrc(){
    //walk()에서 이미지교체 반복문을 수행중이므로
    //이미지 교체도 반복문으로 수행하고 멈춰줘야 교체가 됨
    for(var i=0;i<=5;i++){
      this.img.src="./images/dead_thanos.png";
    }
  }

  //점수처리
  showScore(){
    r_score_result++;
    c_score.innerText=parseInt(c_score_result);
    s_score.innerText=parseInt(s_score_result);
    r_score.innerText=parseInt(r_score_result);
    t_score_result=1000*parseInt(c_score_result)+100*parseInt(s_score_result)+parseInt(r_score_result);
    t_score.innerText=t_score_result;
  }

  //죽었다 부활
  resetHero(){
    this.x=50;
    this.y=345;
    this.img.src="./images/thanos_0.png";
    //sensor 역시 hero의 재시작 위치를 따라와야 한다.
    stage.removeChild(this.sensorArray[0].div);
    stage.removeChild(this.sensorArray[1].div);
    stage.removeChild(this.sensorArray[2].div);
    stage.removeChild(this.sensorArray[3].div);
    this.sensorArray.pop(this.leftSensor);
    this.sensorArray.pop(this.rightSensor);
    this.sensorArray.pop(this.topSensor);
    this.sensorArray.pop(this.bottomSensor);
    this.leftSensor=new Sensor("SENSOR",stage,getSensorSize("LEFT",this.x,this.y,this.width,this.height),0,0,0,0,"#fff","");
    this.rightSensor=new Sensor("SENSOR",stage,getSensorSize("RIGHT",this.x,this.y,this.width,this.height),0,0,0,0,"#fff","");
    this.topSensor=new Sensor("SENSOR",stage,getSensorSize("TOP",this.x,this.y,this.width,this.height),0,0,0,0,"#fff","");
    this.bottomSensor=new Sensor("SENSOR",stage,getSensorSize("BOTTOM",this.x,this.y,this.width,this.height),0,0,0,0,"#fff","");
    this.sensorArray.push(this.leftSensor);
    this.sensorArray.push(this.rightSensor);
    this.sensorArray.push(this.topSensor);
    this.sensorArray.push(this.bottomSensor);
  }
}
