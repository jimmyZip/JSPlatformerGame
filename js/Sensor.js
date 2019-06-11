//센서를 정의
class Sensor extends GameObject{
  constructor(typeId,container,json,velX,velY,targetX,targetY,bg,src){
    //x,y,width,height를 집단형 json으로 적는다.
    super(typeId,container,json.x,json.y,json.width,json.height,velX,velY,targetX,targetY,bg,src);
  }

  //쥔님만 따라가자
  tick(x,y){
    this.x=x;
    this.y=y;
  }
}
