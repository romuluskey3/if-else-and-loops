var wrapperEle = document.body.querySelector(".wrapper");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

for(var i=0; i<animals.length; i++){
 createTest(animals[i]);
  }

function createTest(str){
    var ele = document.createElement("div");
  if(str==="dog"){
     ele.innerHTML="Borf Borf";
  }else if(str=="cat"){
    ele.innerHTML="I am a cat!";
  } else{
     ele.innerHTML="I'm an animal.";
  }
 
  wrapperEle.appendChild(ele);
}