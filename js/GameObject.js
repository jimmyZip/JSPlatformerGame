//게임에 등장하는 모든 객체의 상위클래스
class GameObject{
  constructor(typeId,container,x,y,width,height,velX,velY,targetX,targetY,bg,src){
    this.typeId=typeId;
    this.container=container;
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.velX=velX;
    this.velY=velY;
    this.targetX=targetX;
    this.targetY=targetY;
		this.bg=bg;
		this.src=src;
		this.a=0.1;

    this.div=document.createElement("div");
    this.img=document.createElement("img");
    this.div.style.position="absolute";
    this.div.style.left=x+"px";
    this.div.style.top=y+"px";
    this.div.style.width=this.width+"px";
    this.div.style.height=this.height+"px";
    this.div.style.overflow="hidden";
    this.div.style.backgroundColor=this.bg;

    if(this.src!=""){
      this.img.src=this.src;
      this.img.display="block";
      this.img.style.width=this.width+"px";
      this.img.style.height=this.height+"px";
      this.img.style.overflow="hidden";
      this.div.appendChild(this.img);//div에 img붙이기
    }

    this.container.appendChild(this.div);
  }

  tick(){//객체의 단위동작
    //this.x=this.x+this.a*(this.targetX-this.x);
		//this.y=this.y+this.a*(this.targetY-this.y);
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
	}

	render(){//객체의 화면상 구현
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
	}
}
