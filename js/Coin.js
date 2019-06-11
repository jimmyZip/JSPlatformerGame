//코인을 정의
class Coin extends GameObject{
  constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src){
    super(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src);
  }

  tick(){
    this.x=this.x+this.a*(this.targetX-this.x);
		this.y=this.y+this.a*(this.targetY-this.y);
  }
}
