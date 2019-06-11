

//종료
function exitGame(){
  if(confirm("정말로 종료하시겠습니까?")){
    var parentwin = window.self;
    parentwin.opener = window.self;
    parentwin.close();
  }
}

//다음 스테이지, NextStage
function nextStage(){
  localStorage.setItem("stageScore",t_score_result);
  alert("version 2.0에서 구현 준비중입니다.");
}

//goMain, 메인으로
function goMain(){
  localStorage.setItem("finalScore",t_score_result);
  location.href="./landing.html";
}
