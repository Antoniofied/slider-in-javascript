var dove=document.getElementsByClassName('dove');
var yan = document.getElementsByClassName('propi');
var caption=document.getElementsByClassName('caption');
dove[0].style.opacity="1";
caption[0].className="caption";
yan[0].className= "propi";

function change(x){
  for (var i = 0; i < dove.length; i++) {
    dove[i].style.opacity="0";
    caption[i].className="caption";
    yan[i].className= "propi";
  }
  dove[x].style.opacity="1";
  caption[x].className="caption uuy";
  yan[x].className= "propi ggfg";
}

var pos=0;
function autochange(){
  if (pos>= dove.length) {
    pos=0;

  }
  change(pos);
  pos++;

}
setInterval(autochange,5000);
