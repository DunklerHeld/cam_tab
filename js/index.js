document.addEventListener("DOMContentLoaded", init);

var listItemVVS;
var listItemWeather;
var listItemCam;

var contentVVS;
var contentWeather;

var items = [];
var contents = [];

function init() {
  listItemVVS = document.getElementById("listItemVVS");
  listItemWeather = document.getElementById("listItemWeather");
  listItemCam = document.getElementById("listItemCam");

  items.push(listItemVVS);
  items.push(listItemWeather);
  items.push(listItemCam);

  contentVVS = document.getElementById("contentVVS");
  contentWeather = document.getElementById("contentWeather");
  contentCam = document.getElementById("contentCam");

  contentVVS.onSwitchTo = function() {
    var frame = document.getElementById("contentVVS-iframe");
    frame.src = frame.src;
  };

  contentWeather.onSwitchTo = function() {
    var frame = document.getElementById("contentWeather-iframe");
    frame.src = frame.src;
  };

  contentCam.onSwitchTo = function() {

  };

  contents.push(contentVVS);
  contents.push(contentWeather);
  contents.push(contentCam);


  changeContentTo(0);
  setInterval(() => {
    changeContentTo((currentIndex+1)%items.length);
  }, 15000);
}




var currentIndex = 0;
function changeContentTo(index) {

  var item = items[index];
  var content = contents[index];

  content.onSwitchTo();

  items[currentIndex].classList.remove("active");
  contents[currentIndex].style.display = "none";

  item.classList.add("active");
  content.style.display = "block";

  currentIndex = index;

}
