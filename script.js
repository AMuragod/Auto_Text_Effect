const containerEl=document.querySelector(".container");

const akArray=["YouTuber","PhotoGrapher","Doctor","CameraMan"];

var index=0;
var charIndex=0;
updateText();

function updateText()
{
    charIndex++;
    containerEl.innerHTML=`<h1>I am ${akArray[index].slice(0,charIndex)}<h1>`
   
   if(charIndex===akArray[index].length)
   {
    index++;
    charIndex=0;

   }
   setTimeout(updateText,200);

}

    
   
  

 












