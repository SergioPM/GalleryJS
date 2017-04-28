var chico = [
 {description:"WREC",
   picture:"https://pbs.twimg.com/profile_images/378800000867595159/Vozrkk2S_400x400.jpeg",
   from:"twitter.com",
 },
  {description:"Bidwell Park",
  picture:"http://bidwellpark.org/wp-content/uploads/2014/04/BidwellPool.jpg",
  from:"bidwellpark.org",
 },
 {description:"Downtown",
 picture:"http://www.downtownchico.com/webart/downtown-chico.jpg",
 from:"downtownchico.com",
 }
 {discription:"Chico Museum",
  picture:"https://www.downtownchico.com/webart/listings/x277.jpg.pagespeed.ic.0Zz6o3DCeV.jpg",
  from:"downtownchico.com",
 }
 {description:"Science Museum",
  picture:"https://media-cdn.tripadvisor.com/media/photo-s/04/bd/1c/e3/gateway-science-museum.jpg",
  from:"tripadvisor.com",
 }
];
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
