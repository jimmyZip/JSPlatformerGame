class ObjectManager{
	constructor(){
		this.objectArray=[];//게임에 등장할 모든 종류의 오브젝트들을 모아놓은 배열
	}
	//의뢰받은 객체를 objectArray라는 명단에 넣기
	addObject(obj){
		this.objectArray.push(obj);
	}
	//의뢰받은 객체를 objectArray에서 제거하기
	removeObject(obj){
		//console.log(obj);
		//console.log("지웠다!!");
		stage.removeChild(obj.div);//화면에서 지우기
    this.objectArray.splice(this.objectArray.indexOf(obj),1);
	}

	//관리하는 객체들의 tick,render를 일괄호출
	tick(){
		for(var i=0;i<this.objectArray.length;i++){
			this.objectArray[i].tick();
			if(this.objectArray[i].x+this.objectArray[i].width<=0){
				this.removeObject(this.objectArray[i]);
			}
		}
	}
	render(){
		for(var i=0;i<this.objectArray.length;i++){
			this.objectArray[i].render();
		}
	}
}
