const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 1) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

var slideImg = document.getElementById("slideImg");

var images = new Array(
  "../images/page1.jpg",
  "../images/page2.jpg",
  "../images/page3.jpg",
  "../images/page4.jpg"
);

var len = images.length;
var i = 0;

function slider() {
  if (i > len - 1) {
    i = 0;
  }

  slideImg.src = images[i];
  i++;
  setTimeout("slider()", 3000);
}

var year = new Date().getFullYear();
var date = `Copyright &#169; Design By Saviour ${year}. All Rights Reserved.`;

document.getElementsByTagName("span")[0].innerHTML = date;
