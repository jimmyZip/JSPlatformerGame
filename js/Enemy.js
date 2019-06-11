//타노스의 적군들(어벤저스)를 정의한다.
class Enemy extends GameObject{
  constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src){
    super(type,container,x,y,width,height,velX,velY,targetX,targetY,bg,src);
  }

  // tick(){
	// 	this.x=this.x+this.velX;
	// 	this.y=this.y+this.velY;
  //
  //   this.spiderPos();
	// }
  // spiderPos(){
  //   for(var i=0;i<objectManager.objectArray.length;i++){
  //     var obj = objectManager.objectArray[i];
  //     if(obj.typeId=="VILAIN"){
  //       if(this.src=="./images/vilain3.jpg"){
  //         this.y=0;
  //       }
  //     }
  //   }
  // }

}
