var chico = ["WREC","Bidwell Park","Downtown","Chico Museum","Science Museum"];
var index = 1000;
function shuffleGallery()
{
  var arrayLength = chico.length;
  var newIndex = 0;
  do {
    newIndex = Math.floor(Math.random() * arrayLength);
  }
  while (currentIndex == newIndex);
  currentIndex = newIndex;
  console.log(chico[newIndex]);
}
}
