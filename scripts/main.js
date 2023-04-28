function moreLinks()
{
if (confirm("Do you want to move to the next site?") == true)
  {
    location.replace("https://www.sciencekids.co.nz/");
  }
}

function activity()
{
  if(confirm("Are you ready to start your activity?") == true)
  {
    location.replace("https://docs.google.com/forms/d/e/1FAIpQLSfxBFKV1xKHpnQ4Vngwb2ugAybzt9EJIFNMfPxdrGoxnx-7Ew/viewform");
}
}

function social()
{
    location.replace("https://www.facebook.com/Sci-kids-106183308490334");
}

function social2()
{
    location.replace("https://www.instagram.com/mini.science/");
}

function firstimage() {

 var image = document.getElementById("myImage2");

 if (image.src.match("assets/scientist.jpg")) {

          image.src = "assets/scientist2.jpg"; } else {

          image.src = "assets/scientist.jpg";
      }
  }

function newImage() {

 var image = document.getElementById("myImage");

 if (image.src.match("assets/flower.jpg")) {

          image.src = "assets/flower2.jpg"; } else {

          image.src = "assets/flower.jpg";
      }
  }
