function Generate(){

  // var tab=[];
  var res = document.getElementById('resultat');
  var textarea = document.getElementById('textarea');


  var data= (textarea.value).toString();  // recupere le texte dans le texte area
  const tab = data.split('\n'); 

  var max = tab.length-1;
  var min = 0;
  var rand = Math.floor(Math.random()*(max-min +1))+min ;

  res.innerText=tab[rand];

  //console.log(res.innerText);
  //console.log(rand);
  // }



}
function Reinitialiser(){
  var res = document.getElementById('resultat');
  var textarea = document.getElementById('textarea');
  textarea.value="";


}
