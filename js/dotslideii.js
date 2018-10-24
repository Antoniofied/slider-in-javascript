var fila=document.getElementsByClassName('fila');
var dot=document.getElementsByClassName('dot');
var capti=document.getElementsByClassName('capti');
fila[0].style.opacity='1';
fila[0].className='fila ggfg';
dot[0].className='dot uuy';
capti[0].style.opacity='1';
capti[0].className='capti uuy';


function chang(s) {
  for (var i = 0; i < fila.length; i++) {
    fila[i].style.opacity='0';
    fila[i].className='fila';
    dot[i].className='dot';
    capti[i].style.opacity='0';
    capti[i].className='capti';
  }
  fila[s].style.opacity='1';
  fila[s].className='fila ggfg';
  dot[s].className='dot uuy';
  capti[s].style.opacity='1';
  capti[s].className='capti uuy';
}


var back=0;
function swap() {
  if (back >= fila.length) {
    back=0;
  }
  chang(back);
  back++;
}
setInterval(swap, 6000);


var fila1=document.getElementsByClassName('fila1');
var dot1=document.getElementsByClassName('dot1');
var capti1=document.getElementsByClassName('capti1');

fila1[0].style.opacity='1';
fila1[0].className='fila1 ggfg';
dot1[0].className='dot1 uuy';
capti1[0].style.opacity='1';
capti1[0].className='capti1 uuy';

function changes(q){
  for (var i = 0; i < fila1.length; i++) {
    fila1[i].style.opacity='0';
    fila1[i].className='fila1';
    dot1[i].className='dot1';
    capti1[i].style.opacity='0';
    capti1[i].className='capti1';
  }
  fila1[q].style.opacity='1';
  fila1[q].className='fila1 ggfg';
  dot1[q].className='dot1 uuy';
  capti1[q].style.opacity='1';
  capti1[q].className='capti1 uuy';
}
 var backs=0;
 function swaps(){
   if (backs >= fila1.length) {
     backs=0;
    }
    changes(backs);
    backs++;
 }
 setInterval(swaps, 7000);


 var fila2=document.getElementsByClassName('fila2');
 var dot2=document.getElementsByClassName('dot2');
 var capti2=document.getElementsByClassName('capti2');

 fila2[0].style.opacity='1';
 fila2[0].className='fila2 ggfg';
 dot2[0].className='dot2 uuy';
 capti2[0].style.opacity='1';
 capti2[0].className='capti2 uuy';

 function chan(e){
   for (var i = 0; i < fila2.length; i++) {
     fila2[i].style.opacity='0';
     fila2[i].className='fila2';
     dot2[i].className='dot2';
     capti2[i].style.opacity='0';
     capti2[i].className='capti2';
   }
   fila2[e].style.opacity='1';
   fila2[e].className='fila2 ggfg';
   dot2[e].className='dot2 uuy';
   capti2[e].style.opacity='1';
   capti2[e].className='capti2 uuy';
 }
  var bas=0;
  function swas(){
    if (bas >= fila2.length) {
      bas=0;
     }
     chan(bas);
     bas++;
  }
  setInterval(swas, 6000);


  var fila3=document.getElementsByClassName('fila3');
  var dot3=document.getElementsByClassName('dot3');
  var capti3=document.getElementsByClassName('capti3');

  fila3[0].style.opacity='1';
  fila3[0].className='fila3 ggfg';
  dot3[0].className='dot3 uuy';
  capti3[0].style.opacity='1';
  capti3[0].className='capti3 uuy';

  function chans(u){
    for (var i = 0; i < fila3.length; i++) {
      fila3[i].style.opacity='0';
      fila3[i].className='fila3';
      dot3[i].className='dot3';
      capti3[i].style.opacity='0';
      capti3[i].className='capti3';
    }
    fila3[u].style.opacity='1';
    fila3[u].className='fila3 ggfg';
    dot3[u].className='dot3 uuy';
    capti3[u].style.opacity='1';
    capti3[u].className='capti3 uuy';
  }
   var bask=0;
   function swaks(){
     if (bask >= fila3.length) {
       bask=0;
      }
      chans(bask);
      bask++;
   }
   setInterval(swaks, 7000);
