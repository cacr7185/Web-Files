//console.log( document.getElementsByClassName("options") );
//console.log( document.getElementsByClassName("options")[0].innerHTML);

const images = ["pizza.jpg", "salad.jpg", "sushi.jpg"];
const title = ["pizza", "salad", "sushi"];

for(i=0;<document.getElementsByClassName('options').length;i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];

  document.getElementsByClassName("options")[i].innerHTML);
  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + ' ">';
}
